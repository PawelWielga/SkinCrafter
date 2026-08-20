import { resolveAssetUrl } from '../assetResolver';
import { getHatTextureUrl, hats, type Hat } from './hatTextureMap';
import { getPantsTextureUrl, pants, type Pants } from './pantsTextureMap';
import { getAvailableSexes, getRaceTextureUrl, type Sex } from './raceTextureMap';
import races, { type Race } from './races';
import { getShirtTextureUrl, shirts, type Shirt } from './shirtTextureMap';
import skinColorMap from './skinColorMap';
import type { TextureInput } from '../utils/combineTextures';

export type AppearanceCategoryId =
  | 'race' | 'sex' | 'skinColor' | 'eyes' | 'eyesColor' | 'hair' | 'hairColor'
  | 'hat' | 'shirt' | 'pants' | 'shoes' | 'accessory';

export type TextureLayerCategoryId = Extract<AppearanceCategoryId, 'hat' | 'shirt' | 'pants' | 'shoes' | 'accessory'>;
export type AppearanceState = Record<AppearanceCategoryId, string>;
export type AppearanceControl = 'choice' | 'color';

export interface AppearanceOption {
  id: string;
  labelKey: string;
  color?: string;
  texture?: string | null;
}

export interface AppearanceCategory {
  id: AppearanceCategoryId;
  labelKey: string;
  icon: string;
  control: AppearanceControl;
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

export const defaultAppearance: AppearanceState = {
  race: 'Human', sex: 'Male', skinColor: skinColorMap.Human[0], eyes: 'Classic', eyesColor: '#2F5D9B',
  hair: 'None', hairColor: '#4A2F20', hat: 'None', shirt: 'None', pants: 'None', shoes: 'None', accessory: 'None',
};

export const appearanceLayerOrder: AppearanceCategoryId[] = ['race', 'sex', 'eyes', 'hair', 'hat', 'shirt', 'pants', 'shoes', 'accessory'];
export const textureLayerCategories: TextureLayerCategoryId[] = ['hat', 'shirt', 'pants', 'shoes', 'accessory'];

const noneOption: AppearanceOption = { id: 'None', labelKey: 'option.none', texture: null };
const sexOptions: Record<Sex, AppearanceOption> = {
  Male: { id: 'Male', labelKey: 'option.sex.Male', texture: null },
  Female: { id: 'Female', labelKey: 'option.sex.Female', texture: null },
  None: noneOption,
};

export function getOptions(categoryId: AppearanceCategoryId, appearance: AppearanceState, assetBaseUrl?: string): AppearanceOption[] {
  if (categoryId === 'race') {
    return races.map((race) => ({ id: race, labelKey: `option.race.${race}`, texture: getRaceTextureUrl(race, 'Male', assetBaseUrl) }));
  }
  if (categoryId === 'sex') {
    return getAvailableSexes(appearance.race as Race).map((sex) => sexOptions[sex]);
  }
  if (categoryId === 'skinColor') {
    const race = appearance.race as keyof typeof skinColorMap;
    return skinColorMap[race].map((color) => ({ id: color, labelKey: `option.skinColor.${color}`, color }));
  }
  if (categoryId === 'eyes') {
    return [
      { id: 'Classic', labelKey: 'option.eyes.Classic', texture: resolveAssetUrl('textures/eyes/clasic.png', assetBaseUrl) },
      { id: 'Small', labelKey: 'option.eyes.Small', texture: resolveAssetUrl('textures/eyes/small.png', assetBaseUrl) },
      { id: 'Big', labelKey: 'option.eyes.Big', texture: resolveAssetUrl('textures/eyes/big.png', assetBaseUrl) },
    ];
  }
  if (categoryId === 'eyesColor') {
    return [
      { id: '#2F5D9B', labelKey: 'option.color.blue', color: '#2F5D9B' },
      { id: '#2F8F4E', labelKey: 'option.color.green', color: '#2F8F4E' },
      { id: '#5B3A29', labelKey: 'option.color.brown', color: '#5B3A29' },
    ];
  }
  if (categoryId === 'hair') return [noneOption];
  if (categoryId === 'hairColor') {
    return [
      { id: '#4A2F20', labelKey: 'option.color.brown', color: '#4A2F20' },
      { id: '#D6B15D', labelKey: 'option.color.blond', color: '#D6B15D' },
      { id: '#1F1A17', labelKey: 'option.color.black', color: '#1F1A17' },
    ];
  }
  if (categoryId === 'hat') return hats.map((hat) => ({ id: hat, labelKey: hat === 'None' ? 'option.none' : `option.hat.${hat}`, texture: getHatTextureUrl(hat, assetBaseUrl) }));
  if (categoryId === 'shirt') return shirts.map((shirt) => ({ id: shirt, labelKey: shirt === 'None' ? 'option.none' : `option.shirt.${shirt}`, texture: getShirtTextureUrl(shirt, assetBaseUrl) }));
  if (categoryId === 'pants') return pants.map((item) => ({ id: item, labelKey: item === 'None' ? 'option.none' : `option.pants.${item}`, texture: getPantsTextureUrl(item, assetBaseUrl) }));
  return [noneOption];
}

export function normalizeAppearance(value: Partial<AppearanceState> | null): AppearanceState {
  const next: AppearanceState = { ...defaultAppearance, ...(value ?? {}) };
  const raceOptions = getOptions('race', next).map((option) => option.id);
  if (!raceOptions.includes(next.race)) next.race = defaultAppearance.race;
  const skinColors = getOptions('skinColor', next).map((option) => option.id);
  if (!skinColors.includes(next.skinColor)) next.skinColor = skinColors[0] ?? defaultAppearance.skinColor;
  appearanceCategories.forEach((category) => {
    const optionIds = getOptions(category.id, next).map((option) => option.id);
    if (!optionIds.includes(next[category.id])) next[category.id] = optionIds[0] ?? 'None';
  });
  return next;
}

export function normalizeTextureLayerOrder(value: readonly string[] | null | undefined): TextureLayerCategoryId[] {
  const validLayers = new Set<TextureLayerCategoryId>(textureLayerCategories);
  const next: TextureLayerCategoryId[] = [];
  (value ?? []).forEach((layer) => {
    if (validLayers.has(layer as TextureLayerCategoryId) && !next.includes(layer as TextureLayerCategoryId)) next.push(layer as TextureLayerCategoryId);
  });
  textureLayerCategories.forEach((layer) => { if (!next.includes(layer)) next.push(layer); });
  return next;
}

function buildTextureInputForLayer(
  layer: AppearanceCategoryId,
  appearance: AppearanceState,
  assetBaseUrl?: string
): TextureInput {
  if (layer === 'race') {
    return { url: getRaceTextureUrl(appearance.race as Race, appearance.sex, assetBaseUrl), tint: appearance.skinColor };
  }
  if (layer === 'hat') return getHatTextureUrl(appearance.hat as Hat, assetBaseUrl);
  if (layer === 'shirt') {
    const url = getShirtTextureUrl(appearance.shirt as Shirt, assetBaseUrl);
    return url ? { url } : null;
  }
  if (layer === 'pants') {
    const url = getPantsTextureUrl(appearance.pants as Pants, assetBaseUrl);
    return url ? { url } : null;
  }
  if (layer === 'eyes') {
    const option = getOptions('eyes', appearance, assetBaseUrl).find((item) => item.id === appearance.eyes);
    return option?.texture ? { url: option.texture, tint: appearance.eyesColor } : null;
  }
  const option = getOptions(layer, appearance, assetBaseUrl).find((item) => item.id === appearance[layer]);
  return option?.texture ?? null;
}

function orderedTextureLayers(textureLayerOrder: readonly string[]): AppearanceCategoryId[] {
  return ['race', 'sex', 'eyes', 'hair', ...normalizeTextureLayerOrder(textureLayerOrder)];
}

export function buildTextureInputs(
  appearance: AppearanceState,
  textureLayerOrder: readonly string[] = textureLayerCategories,
  assetBaseUrl?: string
): TextureInput[] {
  return orderedTextureLayers(textureLayerOrder).map((layer) =>
    buildTextureInputForLayer(layer, appearance, assetBaseUrl)
  );
}

export function buildTextureInputsForCategories(
  appearance: AppearanceState,
  textureLayerOrder: readonly string[],
  activeCategories: readonly AppearanceCategoryId[],
  assetBaseUrl?: string
): TextureInput[] {
  const active = new Set(activeCategories);
  const shouldIncludeLayer = (layer: AppearanceCategoryId): boolean => {
    if (layer === 'race') {
      return active.has('race') || active.has('sex') || active.has('skinColor');
    }
    if (layer === 'sex') {
      return false;
    }
    if (layer === 'eyes') {
      return active.has('eyes') || active.has('eyesColor');
    }
    if (layer === 'hair') {
      return active.has('hair') || active.has('hairColor');
    }
    return active.has(layer);
  };

  return orderedTextureLayers(textureLayerOrder)
    .filter(shouldIncludeLayer)
    .map((layer) => buildTextureInputForLayer(layer, appearance, assetBaseUrl));
}
