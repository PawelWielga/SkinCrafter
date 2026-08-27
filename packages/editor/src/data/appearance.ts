import { getHatDefinition, hats } from './hatTextureMap';
import { getPantsDefinition, pants } from './pantsTextureMap';
import {
  eyes,
  getEyeColorPalette,
  getEyeDefinition,
  getHairColorPalette,
  getHairDefinition,
  hairStyles,
} from './characterTextureDefinitions';
import {
  getAvailableSexes,
  getRaceSkinColors,
  getRaceTextureItem,
  type Sex,
} from './raceTextureMap';
import races, { type Race } from './races';
import { getShirtDefinition, shirts } from './shirtTextureMap';
import {
  buildTextureInputsFromItem,
  type ResolvedTextureItemDefinition,
} from './textureItemDefinitions';
import {
  isWardrobeItemCompatible,
  type ResolvedWardrobeItemDefinition,
  type WardrobeColorSlotDefinition,
} from './wardrobeDefinitions';
import type { SkinCrafterSkinModel } from '../publicTypes';
import type { TextureInput } from '../utils/combineTextures';
import type { ResolvedTextureLayers } from './textureLayers';

export type AppearanceCategoryId =
  | 'race' | 'sex' | 'skinColor' | 'eyes' | 'eyesColor' | 'hair' | 'hairColor'
  | 'hat' | 'shirt' | 'pants' | 'shoes' | 'accessory';

export type TextureLayerCategoryId = Extract<AppearanceCategoryId, 'hat' | 'shirt' | 'pants' | 'shoes' | 'accessory'>;
export type AppearanceVisualLayerId = 'race' | 'eyes' | 'hair' | TextureLayerCategoryId;
export type AppearanceState = Record<AppearanceCategoryId, string>;
export type AppearanceControl = 'choice' | 'color';
export type WardrobeColorState = Partial<
  Record<TextureLayerCategoryId, Record<string, Record<string, string>>>
>;

export interface AppearanceOption {
  id: string;
  labelKey: string;
  color?: string;
  textureItem?: ResolvedTextureItemDefinition | null;
  /** @deprecated UI compatibility projection; textureItem is the source of truth. */
  textureLayers?: ResolvedTextureLayers | null;
  /** @deprecated UI compatibility projection; textureItem is the source of truth. */
  colorSlots?: readonly WardrobeColorSlotDefinition[];
}

export interface AppearanceCategory {
  id: AppearanceCategoryId;
  labelKey: string;
  icon: string;
  control: AppearanceControl;
}

export interface AppearanceColorControlBinding {
  ownerCategoryId: Extract<AppearanceVisualLayerId, 'race' | 'eyes' | 'hair'>;
  colorControlId: Extract<AppearanceCategoryId, 'skinColor' | 'eyesColor' | 'hairColor'>;
  slotId: string;
}

export const appearanceCategories: AppearanceCategory[] = [
  { id: 'race', labelKey: 'category.race', icon: 'fa-user-tag', control: 'choice' },
  { id: 'sex', labelKey: 'category.sex', icon: 'fa-venus-mars', control: 'choice' },
  { id: 'skinColor', labelKey: 'category.skinColor', icon: 'fa-palette', control: 'color' },
  { id: 'eyes', labelKey: 'category.eyes', icon: 'fa-eye', control: 'choice' },
  { id: 'eyesColor', labelKey: 'category.eyesColor', icon: 'fa-eye-dropper', control: 'color' },
  { id: 'hair', labelKey: 'category.hair', icon: 'fa-scissors', control: 'choice' },
  { id: 'hairColor', labelKey: 'category.hairColor', icon: 'fa-fill-drip', control: 'color' },
  { id: 'hat', labelKey: 'category.hat', icon: 'fa-hat-cowboy', control: 'choice' },
  { id: 'shirt', labelKey: 'category.shirt', icon: 'fa-shirt', control: 'choice' },
  { id: 'pants', labelKey: 'category.pants', icon: 'fa-person', control: 'choice' },
  { id: 'shoes', labelKey: 'category.shoes', icon: 'fa-shoe-prints', control: 'choice' },
  { id: 'accessory', labelKey: 'category.accessory', icon: 'fa-gem', control: 'choice' },
];

export const appearanceColorControlBindings: readonly AppearanceColorControlBinding[] = [
  { ownerCategoryId: 'race', colorControlId: 'skinColor', slotId: 'skin' },
  { ownerCategoryId: 'eyes', colorControlId: 'eyesColor', slotId: 'iris' },
  { ownerCategoryId: 'hair', colorControlId: 'hairColor', slotId: 'primary' },
];

const visualLayerByControl: Record<AppearanceCategoryId, AppearanceVisualLayerId> = {
  race: 'race',
  sex: 'race',
  skinColor: 'race',
  eyes: 'eyes',
  eyesColor: 'eyes',
  hair: 'hair',
  hairColor: 'hair',
  hat: 'hat',
  shirt: 'shirt',
  pants: 'pants',
  shoes: 'shoes',
  accessory: 'accessory',
};

export function getVisualLayerForControl(categoryId: AppearanceCategoryId): AppearanceVisualLayerId {
  return visualLayerByControl[categoryId];
}

export function getColorControlBindingForOwner(
  categoryId: AppearanceCategoryId
): AppearanceColorControlBinding | null {
  return appearanceColorControlBindings.find((binding) => binding.ownerCategoryId === categoryId) ?? null;
}

export function getColorControlBinding(
  categoryId: AppearanceCategoryId
): AppearanceColorControlBinding | null {
  return appearanceColorControlBindings.find((binding) => binding.colorControlId === categoryId) ?? null;
}

export function isAppearanceColorSubcontrol(categoryId: AppearanceCategoryId): boolean {
  return getColorControlBinding(categoryId) !== null;
}

export const defaultAppearance: AppearanceState = {
  race: 'Human',
  sex: 'Male',
  skinColor: getRaceSkinColors('Human')[0],
  eyes: 'Classic',
  eyesColor: getEyeColorPalette()[0],
  hair: 'None',
  hairColor: getHairColorPalette()[0],
  hat: 'None',
  shirt: 'None',
  pants: 'None',
  shoes: 'None',
  accessory: 'None',
};

export const appearanceLayerOrder: AppearanceCategoryId[] = ['race', 'sex', 'eyes', 'hair', 'hat', 'shirt', 'pants', 'shoes', 'accessory'];
export const textureLayerCategories: TextureLayerCategoryId[] = ['hat', 'shirt', 'pants', 'shoes', 'accessory'];

const noneOption: AppearanceOption = {
  id: 'None',
  labelKey: 'option.none',
  textureItem: null,
  textureLayers: null,
};
const sexOptions: Record<Sex, AppearanceOption> = {
  Male: { id: 'Male', labelKey: 'option.sex.Male', textureItem: null, textureLayers: null },
  Female: { id: 'Female', labelKey: 'option.sex.Female', textureItem: null, textureLayers: null },
  None: noneOption,
};

function getSkinModelForAppearance(appearance: AppearanceState): SkinCrafterSkinModel {
  return appearance.sex === 'Female' ? 'slim' : 'classic';
}

function isTextureLayerCategory(layer: AppearanceCategoryId): layer is TextureLayerCategoryId {
  return textureLayerCategories.includes(layer as TextureLayerCategoryId);
}

function textureItemOption(
  id: string,
  labelKey: string,
  definition: ResolvedTextureItemDefinition | null
): AppearanceOption[] {
  if (!definition) return [];
  return [{
    id,
    labelKey,
    textureItem: definition,
    textureLayers: definition.textureLayers,
    ...(definition.colorSlots ? { colorSlots: definition.colorSlots } : {}),
  }];
}

function wardrobeOption(
  id: string,
  labelKey: string,
  definition: ResolvedWardrobeItemDefinition | null,
  skinModel: SkinCrafterSkinModel
): AppearanceOption[] {
  if (!definition || !isWardrobeItemCompatible(definition, skinModel)) return [];
  return textureItemOption(id, labelKey, definition);
}

function colorOptions(colors: readonly string[], keyPrefix = 'option.color'): AppearanceOption[] {
  const labelKeyByColor: Record<string, string> = {
    '#2F5D9B': `${keyPrefix}.blue`,
    '#2F8F4E': `${keyPrefix}.green`,
    '#5B3A29': `${keyPrefix}.brown`,
    '#4A2F20': `${keyPrefix}.brown`,
    '#D6B15D': `${keyPrefix}.blond`,
    '#1F1A17': `${keyPrefix}.black`,
  };
  return colors.map((color) => ({
    id: color,
    labelKey: labelKeyByColor[color] ?? `option.skinColor.${color}`,
    color,
  }));
}

export function getOptions(
  categoryId: AppearanceCategoryId,
  appearance: AppearanceState,
  assetBaseUrl?: string,
  skinModel: SkinCrafterSkinModel = getSkinModelForAppearance(appearance)
): AppearanceOption[] {
  if (categoryId === 'race') {
    return races.flatMap((race) => textureItemOption(
      race,
      `option.race.${race}`,
      getRaceTextureItem(race, skinModel, assetBaseUrl)
    ));
  }
  if (categoryId === 'sex') {
    return getAvailableSexes(appearance.race as Race).map((sex) => sexOptions[sex]);
  }
  if (categoryId === 'skinColor') {
    return getRaceSkinColors(appearance.race as Race).map((color) => ({
      id: color,
      labelKey: `option.skinColor.${color}`,
      color,
    }));
  }
  if (categoryId === 'eyes') {
    return eyes.flatMap((eye) => textureItemOption(
      eye,
      `option.eyes.${eye}`,
      getEyeDefinition(eye, skinModel, assetBaseUrl)
    ));
  }
  if (categoryId === 'eyesColor') return colorOptions(getEyeColorPalette());
  if (categoryId === 'hair') {
    return hairStyles.flatMap((hair) => hair === 'None'
      ? [noneOption]
      : textureItemOption(hair, `option.hair.${hair}`, getHairDefinition(hair, skinModel, assetBaseUrl)));
  }
  if (categoryId === 'hairColor') return colorOptions(getHairColorPalette());
  if (categoryId === 'hat') {
    return hats.flatMap((hat) =>
      hat === 'None'
        ? [noneOption]
        : wardrobeOption(hat, `option.hat.${hat}`, getHatDefinition(hat, skinModel, assetBaseUrl), skinModel)
    );
  }
  if (categoryId === 'shirt') {
    return shirts.flatMap((shirt) =>
      shirt === 'None'
        ? [noneOption]
        : wardrobeOption(shirt, `option.shirt.${shirt}`, getShirtDefinition(shirt, skinModel, assetBaseUrl), skinModel)
    );
  }
  if (categoryId === 'pants') {
    return pants.flatMap((item) =>
      item === 'None'
        ? [noneOption]
        : wardrobeOption(item, `option.pants.${item}`, getPantsDefinition(item, skinModel, assetBaseUrl), skinModel)
    );
  }
  return [noneOption];
}

export function normalizeAppearance(
  value: Partial<AppearanceState> | null,
  skinModel?: SkinCrafterSkinModel
): AppearanceState {
  const next: AppearanceState = { ...defaultAppearance, ...(value ?? {}) };
  const raceOptions = skinModel
    ? getOptions('race', next, undefined, skinModel).map((option) => option.id)
    : [...races];
  if (!raceOptions.includes(next.race as (typeof races)[number])) next.race = defaultAppearance.race;

  const availableSexes = getOptions('sex', next).map((option) => option.id);
  if (!availableSexes.includes(next.sex)) next.sex = availableSexes[0] ?? defaultAppearance.sex;

  const effectiveSkinModel = skinModel ?? getSkinModelForAppearance(next);
  const skinColors = getOptions('skinColor', next, undefined, effectiveSkinModel).map((option) => option.id);
  if (!skinColors.includes(next.skinColor)) next.skinColor = skinColors[0] ?? defaultAppearance.skinColor;

  appearanceCategories.forEach((category) => {
    if (category.id === 'race' || category.id === 'sex' || category.id === 'skinColor') return;
    const optionIds = getOptions(category.id, next, undefined, effectiveSkinModel).map((option) => option.id);
    if (!optionIds.includes(next[category.id])) next[category.id] = optionIds[0] ?? 'None';
  });
  return next;
}

function collectWardrobeOptions(category: TextureLayerCategoryId): AppearanceOption[] {
  const options = new Map<string, AppearanceOption>();
  for (const skinModel of ['classic', 'slim'] as const) {
    for (const option of getOptions(category, defaultAppearance, undefined, skinModel)) {
      const existing = options.get(option.id);
      if (!existing || (!existing.textureItem?.colorSlots?.length && option.textureItem?.colorSlots?.length)) {
        options.set(option.id, option);
      }
    }
  }
  return [...options.values()];
}

export function normalizeWardrobeColors(
  value: WardrobeColorState | null | undefined
): WardrobeColorState {
  const next: WardrobeColorState = {};

  for (const category of textureLayerCategories) {
    const itemColors: Record<string, Record<string, string>> = {};
    for (const option of collectWardrobeOptions(category)) {
      const colorSlots = option.textureItem?.colorSlots ?? [];
      if (colorSlots.length === 0) continue;

      const slotColors: Record<string, string> = {};
      for (const slot of colorSlots) {
        const candidate = value?.[category]?.[option.id]?.[slot.id];
        slotColors[slot.id] = typeof candidate === 'string' && slot.palette.includes(candidate)
          ? candidate
          : slot.defaultColor;
      }
      itemColors[option.id] = slotColors;
    }

    if (Object.keys(itemColors).length > 0) next[category] = itemColors;
  }

  return next;
}

export function cloneWardrobeColors(value: WardrobeColorState): WardrobeColorState {
  const next: WardrobeColorState = {};
  for (const category of textureLayerCategories) {
    const items = value[category];
    if (!items) continue;
    next[category] = Object.fromEntries(
      Object.entries(items).map(([itemId, colors]) => [itemId, { ...colors }])
    );
  }
  return next;
}

export function normalizeTextureLayerOrder(value: readonly string[] | null | undefined): TextureLayerCategoryId[] {
  const validLayers = new Set<TextureLayerCategoryId>(textureLayerCategories);
  const next: TextureLayerCategoryId[] = [];
  (value ?? []).forEach((layer) => {
    if (validLayers.has(layer as TextureLayerCategoryId) && !next.includes(layer as TextureLayerCategoryId)) {
      next.push(layer as TextureLayerCategoryId);
    }
  });
  textureLayerCategories.forEach((layer) => { if (!next.includes(layer)) next.push(layer); });
  return next;
}

interface TextureItemCompositionContext {
  appearance: AppearanceState;
  assetBaseUrl: string | undefined;
  skinModel: SkinCrafterSkinModel;
  wardrobeColors: WardrobeColorState;
}

interface ResolvedTextureItemSelection {
  item: ResolvedTextureItemDefinition | null;
  colors?: Readonly<Record<string, string>>;
}

type TextureItemResolver = (context: TextureItemCompositionContext) => ResolvedTextureItemSelection;

function createAppearanceItemResolver(
  categoryId: Extract<AppearanceVisualLayerId, 'race' | 'eyes' | 'hair'>
): TextureItemResolver {
  const colorBinding = getColorControlBindingForOwner(categoryId);
  return ({ appearance, assetBaseUrl, skinModel }) => {
    const option = getOptions(categoryId, appearance, assetBaseUrl, skinModel)
      .find((candidate) => candidate.id === appearance[categoryId]);
    const colors = colorBinding
      ? { [colorBinding.slotId]: appearance[colorBinding.colorControlId] }
      : undefined;
    return { item: option?.textureItem ?? null, colors };
  };
}

function createWardrobeItemResolver(categoryId: TextureLayerCategoryId): TextureItemResolver {
  return ({ appearance, assetBaseUrl, skinModel, wardrobeColors }) => {
    const option = getOptions(categoryId, appearance, assetBaseUrl, skinModel)
      .find((candidate) => candidate.id === appearance[categoryId]);
    return {
      item: option?.textureItem ?? null,
      colors: wardrobeColors[categoryId]?.[appearance[categoryId]],
    };
  };
}

const textureItemResolvers: Record<AppearanceVisualLayerId, TextureItemResolver> = {
  race: createAppearanceItemResolver('race'),
  eyes: createAppearanceItemResolver('eyes'),
  hair: createAppearanceItemResolver('hair'),
  hat: createWardrobeItemResolver('hat'),
  shirt: createWardrobeItemResolver('shirt'),
  pants: createWardrobeItemResolver('pants'),
  shoes: createWardrobeItemResolver('shoes'),
  accessory: createWardrobeItemResolver('accessory'),
};

function orderedTextureLayers(textureLayerOrder: readonly string[]): AppearanceVisualLayerId[] {
  return ['race', 'eyes', 'hair', ...normalizeTextureLayerOrder(textureLayerOrder)];
}

function buildTextureInputsForLayer(
  layer: AppearanceVisualLayerId,
  context: TextureItemCompositionContext
): TextureInput[] {
  const selection = textureItemResolvers[layer](context);
  return buildTextureInputsFromItem(selection.item, selection.colors);
}

export function buildTextureInputs(
  appearance: AppearanceState,
  textureLayerOrder: readonly string[] = textureLayerCategories,
  assetBaseUrl?: string,
  skinModel: SkinCrafterSkinModel = getSkinModelForAppearance(appearance),
  wardrobeColors?: WardrobeColorState
): TextureInput[] {
  const context: TextureItemCompositionContext = {
    appearance,
    assetBaseUrl,
    skinModel,
    wardrobeColors: normalizeWardrobeColors(wardrobeColors),
  };
  return orderedTextureLayers(textureLayerOrder).flatMap((layer) => buildTextureInputsForLayer(layer, context));
}

export function buildTextureInputsForCategories(
  appearance: AppearanceState,
  textureLayerOrder: readonly string[],
  activeCategories: readonly AppearanceCategoryId[],
  assetBaseUrl?: string,
  skinModel: SkinCrafterSkinModel = getSkinModelForAppearance(appearance),
  wardrobeColors?: WardrobeColorState
): TextureInput[] {
  const activeLayers = new Set(activeCategories.map(getVisualLayerForControl));
  const context: TextureItemCompositionContext = {
    appearance,
    assetBaseUrl,
    skinModel,
    wardrobeColors: normalizeWardrobeColors(wardrobeColors),
  };

  return orderedTextureLayers(textureLayerOrder)
    .filter((layer) => activeLayers.has(layer))
    .flatMap((layer) => buildTextureInputsForLayer(layer, context));
}

export function isColorControlEffective(
  categoryId: AppearanceCategoryId,
  appearance: AppearanceState,
  assetBaseUrl?: string
): boolean {
  const binding = getColorControlBinding(categoryId);
  if (!binding) return true;

  const skinModel = getSkinModelForAppearance(appearance);
  const option = getOptions(binding.ownerCategoryId, appearance, assetBaseUrl, skinModel)
    .find((candidate) => candidate.id === appearance[binding.ownerCategoryId]);
  return Boolean(option?.textureItem?.colorSlots?.some((slot) => slot.id === binding.slotId));
}
