import { getHatDefinition, hats } from './hatTextureMap';
import { getPantsDefinition, pants } from './pantsTextureMap';
import { getAvailableSexes, getRaceTextureLayers, type Sex } from './raceTextureMap';
import races, { type Race } from './races';
import { getShirtDefinition, shirts } from './shirtTextureMap';
import skinColorMap from './skinColorMap';
import {
  defineTextureLayers,
  hasTintableTextureLayer,
  resolveTextureLayers,
  type ResolvedTextureLayers,
} from './textureLayers';
import {
  isWardrobeItemCompatible,
  type ResolvedWardrobeItemDefinition,
} from './wardrobeDefinitions';
import type { SkinCrafterSkinModel } from '../publicTypes';
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
  textureLayers?: ResolvedTextureLayers | null;
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

const noneOption: AppearanceOption = { id: 'None', labelKey: 'option.none', textureLayers: null };
const sexOptions: Record<Sex, AppearanceOption> = {
  Male: { id: 'Male', labelKey: 'option.sex.Male', textureLayers: null },
  Female: { id: 'Female', labelKey: 'option.sex.Female', textureLayers: null },
  None: noneOption,
};

const eyeTextureLayers = {
  Classic: defineTextureLayers({
    tintable: 'textures/eyes/clasic.tintable.png',
    fixed: 'textures/eyes/clasic.fixed.png',
  }),
  Small: defineTextureLayers({ tintable: 'textures/eyes/small.tintable.png' }),
  Big: defineTextureLayers({
    tintable: 'textures/eyes/big.tintable.png',
    fixed: 'textures/eyes/big.fixed.png',
  }),
} as const;

function getSkinModelForAppearance(appearance: AppearanceState): SkinCrafterSkinModel {
  return appearance.sex === 'Female' ? 'slim' : 'classic';
}

function wardrobeOption(
  id: string,
  labelKey: string,
  definition: ResolvedWardrobeItemDefinition | null,
  skinModel: SkinCrafterSkinModel
): AppearanceOption[] {
  if (!definition || !isWardrobeItemCompatible(definition, skinModel)) return [];
  return [{ id, labelKey, textureLayers: definition.textureLayers }];
}

export function getOptions(
  categoryId: AppearanceCategoryId,
  appearance: AppearanceState,
  assetBaseUrl?: string,
  skinModel: SkinCrafterSkinModel = getSkinModelForAppearance(appearance)
): AppearanceOption[] {
  if (categoryId === 'race') {
    return races.map((race) => ({
      id: race,
      labelKey: `option.race.${race}`,
      textureLayers: getRaceTextureLayers(race, 'Male', assetBaseUrl),
    }));
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
      { id: 'Classic', labelKey: 'option.eyes.Classic', textureLayers: resolveTextureLayers(eyeTextureLayers.Classic, assetBaseUrl) },
      { id: 'Small', labelKey: 'option.eyes.Small', textureLayers: resolveTextureLayers(eyeTextureLayers.Small, assetBaseUrl) },
      { id: 'Big', labelKey: 'option.eyes.Big', textureLayers: resolveTextureLayers(eyeTextureLayers.Big, assetBaseUrl) },
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
  if (categoryId === 'hat') {
    return hats.flatMap((hat) =>
      hat === 'None'
        ? [noneOption]
        : wardrobeOption(
            hat,
            `option.hat.${hat}`,
            getHatDefinition(hat, assetBaseUrl),
            skinModel
          )
    );
  }
  if (categoryId === 'shirt') {
    return shirts.flatMap((shirt) =>
      shirt === 'None'
        ? [noneOption]
        : wardrobeOption(
            shirt,
            `option.shirt.${shirt}`,
            getShirtDefinition(shirt, assetBaseUrl),
            skinModel
          )
    );
  }
  if (categoryId === 'pants') {
    return pants.flatMap((item) =>
      item === 'None'
        ? [noneOption]
        : wardrobeOption(
            item,
            `option.pants.${item}`,
            getPantsDefinition(item, assetBaseUrl),
            skinModel
          )
    );
  }
  return [noneOption];
}

export function normalizeAppearance(
  value: Partial<AppearanceState> | null,
  skinModel?: SkinCrafterSkinModel
): AppearanceState {
  const next: AppearanceState = { ...defaultAppearance, ...(value ?? {}) };
  const raceOptions = getOptions('race', next).map((option) => option.id);
  if (!raceOptions.includes(next.race)) next.race = defaultAppearance.race;

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

export function normalizeTextureLayerOrder(value: readonly string[] | null | undefined): TextureLayerCategoryId[] {
  const validLayers = new Set<TextureLayerCategoryId>(textureLayerCategories);
  const next: TextureLayerCategoryId[] = [];
  (value ?? []).forEach((layer) => {
    if (validLayers.has(layer as TextureLayerCategoryId) && !next.includes(layer as TextureLayerCategoryId)) next.push(layer as TextureLayerCategoryId);
  });
  textureLayerCategories.forEach((layer) => { if (!next.includes(layer)) next.push(layer); });
  return next;
}

function buildTextureInputsFromLayers(
  layers: ResolvedTextureLayers | null | undefined,
  tint?: string
): TextureInput[] {
  if (!layers) return [];

  const inputs: TextureInput[] = [];
  if (layers.tintable) {
    inputs.push({ url: layers.tintable, role: 'tintable', tint: tint ?? '#FFFFFF' });
  }
  if (layers.fixed) {
    inputs.push({ url: layers.fixed, role: 'fixed' });
  }
  return inputs;
}

function buildTextureInputsForLayer(
  layer: AppearanceCategoryId,
  appearance: AppearanceState,
  assetBaseUrl: string | undefined,
  skinModel: SkinCrafterSkinModel
): TextureInput[] {
  if (layer === 'race') {
    return buildTextureInputsFromLayers(
      getRaceTextureLayers(appearance.race as Race, appearance.sex, assetBaseUrl),
      appearance.skinColor
    );
  }
  if (layer === 'sex') return [];
  if (layer === 'eyes') {
    const option = getOptions('eyes', appearance, assetBaseUrl, skinModel).find((item) => item.id === appearance.eyes);
    return buildTextureInputsFromLayers(option?.textureLayers, appearance.eyesColor);
  }
  if (layer === 'hair') {
    const option = getOptions('hair', appearance, assetBaseUrl, skinModel).find((item) => item.id === appearance.hair);
    return buildTextureInputsFromLayers(option?.textureLayers, appearance.hairColor);
  }
  const option = getOptions(layer, appearance, assetBaseUrl, skinModel).find((item) => item.id === appearance[layer]);
  return buildTextureInputsFromLayers(option?.textureLayers);
}

function orderedTextureLayers(textureLayerOrder: readonly string[]): AppearanceCategoryId[] {
  return ['race', 'sex', 'eyes', 'hair', ...normalizeTextureLayerOrder(textureLayerOrder)];
}

export function buildTextureInputs(
  appearance: AppearanceState,
  textureLayerOrder: readonly string[] = textureLayerCategories,
  assetBaseUrl?: string,
  skinModel: SkinCrafterSkinModel = getSkinModelForAppearance(appearance)
): TextureInput[] {
  return orderedTextureLayers(textureLayerOrder).flatMap((layer) =>
    buildTextureInputsForLayer(layer, appearance, assetBaseUrl, skinModel)
  );
}

export function buildTextureInputsForCategories(
  appearance: AppearanceState,
  textureLayerOrder: readonly string[],
  activeCategories: readonly AppearanceCategoryId[],
  assetBaseUrl?: string,
  skinModel: SkinCrafterSkinModel = getSkinModelForAppearance(appearance)
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
    .flatMap((layer) => buildTextureInputsForLayer(layer, appearance, assetBaseUrl, skinModel));
}

export function isColorControlEffective(
  categoryId: AppearanceCategoryId,
  appearance: AppearanceState,
  assetBaseUrl?: string
): boolean {
  if (categoryId === 'skinColor') {
    return hasTintableTextureLayer(
      getRaceTextureLayers(appearance.race as Race, appearance.sex, assetBaseUrl)
    );
  }
  if (categoryId === 'eyesColor') {
    const option = getOptions('eyes', appearance, assetBaseUrl).find((item) => item.id === appearance.eyes);
    return hasTintableTextureLayer(option?.textureLayers);
  }
  if (categoryId === 'hairColor') {
    const option = getOptions('hair', appearance, assetBaseUrl).find((item) => item.id === appearance.hair);
    return hasTintableTextureLayer(option?.textureLayers);
  }
  return true;
}
