import type { TranslationKey } from '../i18n/translations';
import type { SkinCrafterSkinModel } from '../publicTypes';
import {
  resolveTextureLayers,
  type ResolvedTextureLayers,
  type TextureLayers,
} from './textureLayers';

export interface WardrobeColorSlotDefinition {
  id: string;
  labelKey: TranslationKey;
  defaultColor: string;
  palette: readonly string[];
}

export interface WardrobeItemDefinition {
  skinModel: SkinCrafterSkinModel;
  textureLayers: TextureLayers;
  colorSlots?: readonly WardrobeColorSlotDefinition[];
}

export interface ResolvedWardrobeItemDefinition {
  skinModel: SkinCrafterSkinModel;
  textureLayers: ResolvedTextureLayers;
  colorSlots?: readonly WardrobeColorSlotDefinition[];
}

export type WardrobeItemVariants = Partial<
  Record<SkinCrafterSkinModel, WardrobeItemDefinition>
>;

const isHexColor = (value: string): boolean => /^#[0-9a-f]{6}$/i.test(value);

function validateColorSlots(definition: WardrobeItemDefinition): void {
  const tintable = definition.textureLayers.tintable ?? [];
  const colorSlots = definition.colorSlots ?? [];

  if (tintable.length === 0) {
    if (colorSlots.length > 0) {
      throw new Error('A fixed-only wardrobe item must not define color slots.');
    }
    return;
  }

  if (colorSlots.length === 0) {
    throw new Error('Every tintable wardrobe item must define at least one color slot.');
  }

  const slotsById = new Map<string, WardrobeColorSlotDefinition>();
  for (const slot of colorSlots) {
    if (!slot.id.trim()) {
      throw new Error('Wardrobe color slot ids must not be empty.');
    }
    if (slotsById.has(slot.id)) {
      throw new Error(`Wardrobe color slot "${slot.id}" is defined more than once.`);
    }
    if (slot.palette.length === 0) {
      throw new Error(`Wardrobe color slot "${slot.id}" must define a non-empty palette.`);
    }
    if (!isHexColor(slot.defaultColor) || slot.palette.some((color) => !isHexColor(color))) {
      throw new Error(`Wardrobe color slot "${slot.id}" must use #RRGGBB palette colors.`);
    }
    if (!slot.palette.includes(slot.defaultColor)) {
      throw new Error(`Wardrobe color slot "${slot.id}" defaultColor must be present in its palette.`);
    }
    slotsById.set(slot.id, slot);
  }

  const usedSlots = new Set<string>();
  for (const layer of tintable) {
    if (!layer.colorSlot || !slotsById.has(layer.colorSlot)) {
      throw new Error('Every tintable wardrobe layer must reference a declared colorSlot.');
    }
    usedSlots.add(layer.colorSlot);
  }

  for (const slot of colorSlots) {
    if (!usedSlots.has(slot.id)) {
      throw new Error(`Wardrobe color slot "${slot.id}" is not used by any tintable layer.`);
    }
  }
}

export function defineWardrobeItem(
  definition: WardrobeItemDefinition
): WardrobeItemDefinition {
  const skinModel = (definition as Partial<WardrobeItemDefinition>).skinModel;
  if (skinModel !== 'classic' && skinModel !== 'slim') {
    throw new Error('A wardrobe item must define skinModel as "classic" or "slim".');
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

export function defineWardrobeItemVariants(
  variants: WardrobeItemVariants
): WardrobeItemVariants {
  const normalized: WardrobeItemVariants = {};

  for (const skinModel of ['classic', 'slim'] as const) {
    const definition = variants[skinModel];
    if (!definition) continue;

    const validated = defineWardrobeItem(definition);
    if (validated.skinModel !== skinModel) {
      throw new Error(`Wardrobe variant "${skinModel}" must declare the same skinModel.`);
    }
    normalized[skinModel] = validated;
  }

  return normalized;
}

export function resolveWardrobeItem(
  definition: WardrobeItemDefinition,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition {
  return {
    skinModel: definition.skinModel,
    textureLayers: resolveTextureLayers(definition.textureLayers, assetBaseUrl),
    ...(definition.colorSlots ? { colorSlots: definition.colorSlots } : {}),
  };
}

export function resolveWardrobeItemVariant(
  variants: WardrobeItemVariants,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition | null {
  const definition = variants[skinModel];
  return definition ? resolveWardrobeItem(definition, assetBaseUrl) : null;
}

export function isWardrobeItemCompatible(
  definition: Pick<WardrobeItemDefinition, 'skinModel'>,
  skinModel: SkinCrafterSkinModel
): boolean {
  return definition.skinModel === skinModel;
}
