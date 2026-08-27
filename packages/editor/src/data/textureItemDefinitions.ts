import type { TranslationKey } from '../i18n/translations';
import type { SkinCrafterSkinModel } from '../publicTypes';
import type { TextureInput } from '../utils/combineTextures';
import {
  resolveTextureLayers,
  type ResolvedTextureLayers,
  type TextureLayers,
} from './textureLayers';

export interface TextureItemColorSlotDefinition {
  id: string;
  labelKey: TranslationKey;
  defaultColor: string;
  palette: readonly string[];
}

export interface TextureItemDefinition {
  skinModel: SkinCrafterSkinModel;
  textureLayers: TextureLayers;
  colorSlots?: readonly TextureItemColorSlotDefinition[];
}

export interface ResolvedTextureItemDefinition {
  skinModel: SkinCrafterSkinModel;
  textureLayers: ResolvedTextureLayers;
  colorSlots?: readonly TextureItemColorSlotDefinition[];
}

export type TextureItemVariants = Partial<
  Record<SkinCrafterSkinModel, TextureItemDefinition>
>;

const isHexColor = (value: string): boolean => /^#[0-9a-f]{6}$/i.test(value);

function colorSlotContractsEqual(
  left: readonly TextureItemColorSlotDefinition[] | undefined,
  right: readonly TextureItemColorSlotDefinition[] | undefined
): boolean {
  const leftSlots = left ?? [];
  const rightSlots = right ?? [];
  if (leftSlots.length !== rightSlots.length) return false;

  return leftSlots.every((slot, index) => {
    const other = rightSlots[index];
    return Boolean(other)
      && slot.id === other.id
      && slot.labelKey === other.labelKey
      && slot.defaultColor === other.defaultColor
      && slot.palette.length === other.palette.length
      && slot.palette.every((color, paletteIndex) => color === other.palette[paletteIndex]);
  });
}

function validateColorSlots(definition: TextureItemDefinition): void {
  const tintable = definition.textureLayers.tintable ?? [];
  const colorSlots = definition.colorSlots ?? [];

  if (tintable.length === 0) {
    if (colorSlots.length > 0) {
      throw new Error('A fixed-only texture item must not define color slots.');
    }
    return;
  }

  if (colorSlots.length === 0) {
    throw new Error('Every tintable texture item must define at least one color slot.');
  }

  const slotsById = new Map<string, TextureItemColorSlotDefinition>();
  for (const slot of colorSlots) {
    if (!slot.id.trim()) {
      throw new Error('Texture item color slot ids must not be empty.');
    }
    if (slotsById.has(slot.id)) {
      throw new Error(`Texture item color slot "${slot.id}" is defined more than once.`);
    }
    if (slot.palette.length === 0) {
      throw new Error(`Texture item color slot "${slot.id}" must define a non-empty palette.`);
    }
    if (!isHexColor(slot.defaultColor) || slot.palette.some((color) => !isHexColor(color))) {
      throw new Error(`Texture item color slot "${slot.id}" must use #RRGGBB palette colors.`);
    }
    if (!slot.palette.includes(slot.defaultColor)) {
      throw new Error(`Texture item color slot "${slot.id}" defaultColor must be present in its palette.`);
    }
    slotsById.set(slot.id, slot);
  }

  const usedSlots = new Set<string>();
  for (const layer of tintable) {
    if (!layer.colorSlot || !slotsById.has(layer.colorSlot)) {
      throw new Error('Every tintable texture layer must reference a declared colorSlot.');
    }
    usedSlots.add(layer.colorSlot);
  }

  for (const slot of colorSlots) {
    if (!usedSlots.has(slot.id)) {
      throw new Error(`Texture item color slot "${slot.id}" is not used by any tintable layer.`);
    }
  }
}

export function defineTextureItem(definition: TextureItemDefinition): TextureItemDefinition {
  const skinModel = (definition as Partial<TextureItemDefinition>).skinModel;
  if (skinModel !== 'classic' && skinModel !== 'slim') {
    throw new Error('A texture item must define skinModel as "classic" or "slim".');
  }

  validateColorSlots(definition);
  return {
    ...definition,
    skinModel,
    ...(definition.colorSlots
      ? { colorSlots: definition.colorSlots.map((slot) => ({ ...slot, palette: [...slot.palette] })) }
      : {}),
  };
}

export function defineTextureItemVariants(
  variants: TextureItemVariants
): TextureItemVariants {
  const normalized: TextureItemVariants = {};

  for (const skinModel of ['classic', 'slim'] as const) {
    const definition = variants[skinModel];
    if (!definition) continue;

    const validated = defineTextureItem(definition);
    if (validated.skinModel !== skinModel) {
      throw new Error(`Texture item variant "${skinModel}" must declare the same skinModel.`);
    }
    normalized[skinModel] = validated;
  }

  const colorableVariants = Object.values(normalized).filter(
    (definition): definition is TextureItemDefinition => Boolean(definition?.colorSlots?.length)
  );
  if (colorableVariants.length > 1) {
    const colorSlotContract = colorableVariants[0].colorSlots;
    if (colorableVariants.some((definition) => !colorSlotContractsEqual(definition.colorSlots, colorSlotContract))) {
      throw new Error(
        'Colorable texture item variants must define identical color slots across skin models.'
      );
    }
  }

  return normalized;
}

export function resolveTextureItem(
  definition: TextureItemDefinition,
  assetBaseUrl?: string
): ResolvedTextureItemDefinition {
  return {
    skinModel: definition.skinModel,
    textureLayers: resolveTextureLayers(definition.textureLayers, assetBaseUrl),
    ...(definition.colorSlots ? { colorSlots: definition.colorSlots } : {}),
  };
}

export function resolveTextureItemVariant(
  variants: TextureItemVariants,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedTextureItemDefinition | null {
  const definition = variants[skinModel];
  return definition ? resolveTextureItem(definition, assetBaseUrl) : null;
}

export function isTextureItemCompatible(
  definition: Pick<TextureItemDefinition, 'skinModel'>,
  skinModel: SkinCrafterSkinModel
): boolean {
  return definition.skinModel === skinModel;
}

export function buildTextureInputsFromItem(
  item: ResolvedTextureItemDefinition | null | undefined,
  colors?: Readonly<Record<string, string>>
): TextureInput[] {
  if (!item) return [];

  const slots = new Map((item.colorSlots ?? []).map((slot) => [slot.id, slot]));
  const inputs: TextureInput[] = [];

  for (const layer of item.textureLayers.tintable ?? []) {
    const slot = layer.colorSlot ? slots.get(layer.colorSlot) : undefined;
    inputs.push({
      url: layer.texture,
      role: 'tintable',
      tint: (layer.colorSlot ? colors?.[layer.colorSlot] : undefined) ?? slot?.defaultColor ?? '#FFFFFF',
    });
  }

  if (item.textureLayers.fixed) {
    inputs.push({ url: item.textureLayers.fixed, role: 'fixed' });
  }

  return inputs;
}
