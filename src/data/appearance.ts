import races from './races';
import { getAvailableSexes, getRaceTextureUrl, type Sex } from './raceTextureMap';
import type { Race } from './races';
import skinColorMap from './skinColorMap';
import hatTextureMap, { hats } from './hatTextureMap';
import shirtTextureMap, { shirts } from './shirtTextureMap';
import pantsTextureMap, { pants } from './pantsTextureMap';
import type { TextureInput } from '../utils/combineTextures';

export type AppearanceCategoryId =
  | 'race'
  | 'sex'
  | 'skinColor'
  | 'eyes'
  | 'eyesColor'
  | 'hair'
  | 'hairColor'
  | 'hat'
  | 'shirt'
  | 'pants'
  | 'shoes'
  | 'accessory';

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
  race: 'Human',
  sex: 'Male',
  skinColor: skinColorMap.Human[0],
  eyes: 'None',
  eyesColor: '#2F5D9B',
  hair: 'None',
  hairColor: '#4A2F20',
  hat: 'None',
  shirt: 'None',
  pants: 'None',
  shoes: 'None',
  accessory: 'None',
};

export const appearanceLayerOrder: AppearanceCategoryId[] = [
  'race',
  'sex',
  'eyes',
  'hair',
  'hat',
  'shirt',
  'pants',
  'shoes',
  'accessory',
];

const noneOption: AppearanceOption = {
  id: 'None',
  labelKey: 'option.none',
  texture: null,
};

const maleOption: AppearanceOption = {
  id: 'Male',
  labelKey: 'option.sex.Male',
  texture: null,
};

const femaleOption: AppearanceOption = {
  id: 'Female',
  labelKey: 'option.sex.Female',
  texture: null,
};

const sexOptions: Record<Sex, AppearanceOption> = {
  Male: maleOption,
  Female: femaleOption,
  None: noneOption,
};

const staticOptions: Partial<Record<AppearanceCategoryId, AppearanceOption[]>> = {
  race: races.map((race) => ({
    id: race,
    labelKey: `option.race.${race}`,
    texture: getRaceTextureUrl(race, 'Male'),
  })),
  eyes: [noneOption],
  eyesColor: [
    { id: '#2F5D9B', labelKey: 'option.color.blue', color: '#2F5D9B' },
    { id: '#2F8F4E', labelKey: 'option.color.green', color: '#2F8F4E' },
    { id: '#5B3A29', labelKey: 'option.color.brown', color: '#5B3A29' },
  ],
  hair: [noneOption],
  hairColor: [
    { id: '#4A2F20', labelKey: 'option.color.brown', color: '#4A2F20' },
    { id: '#D6B15D', labelKey: 'option.color.blond', color: '#D6B15D' },
    { id: '#1F1A17', labelKey: 'option.color.black', color: '#1F1A17' },
  ],
  hat: hats.map((hat) => ({
    id: hat,
    labelKey: hat === 'None' ? 'option.none' : `option.hat.${hat}`,
    texture: hatTextureMap[hat],
  })),
  shirt: shirts.map((shirt) => ({
    id: shirt,
    labelKey: shirt === 'None' ? 'option.none' : `option.shirt.${shirt}`,
    texture: shirtTextureMap[shirt],
  })),
  pants: pants.map((pants) => ({
    id: pants,
    labelKey: pants === 'None' ? 'option.none' : `option.pants.${pants}`,
    texture: pantsTextureMap[pants],
  })),
  shoes: [noneOption],
  accessory: [noneOption],
};

export function getOptions(
  categoryId: AppearanceCategoryId,
  appearance: AppearanceState
): AppearanceOption[] {
  if (categoryId === 'sex') {
    const race = appearance.race as Race;
    return getAvailableSexes(race).map((sex) => sexOptions[sex]);
  }

  if (categoryId === 'skinColor') {
    const race = appearance.race as keyof typeof skinColorMap;
    return skinColorMap[race].map((color) => ({
      id: color,
      labelKey: `option.skinColor.${color}`,
      color,
    }));
  }

  return staticOptions[categoryId] ?? [noneOption];
}

export function normalizeAppearance(value: Partial<AppearanceState> | null): AppearanceState {
  const next: AppearanceState = { ...defaultAppearance, ...(value ?? {}) };
  const raceOptions = getOptions('race', next).map((option) => option.id);
  if (!raceOptions.includes(next.race)) {
    next.race = defaultAppearance.race;
  }

  const skinColors = getOptions('skinColor', next).map((option) => option.id);
  if (!skinColors.includes(next.skinColor)) {
    next.skinColor = skinColors[0] ?? defaultAppearance.skinColor;
  }

  appearanceCategories.forEach((category) => {
    const optionIds = getOptions(category.id, next).map((option) => option.id);
    if (!optionIds.includes(next[category.id])) {
      next[category.id] = optionIds[0] ?? 'None';
    }
  });

  return next;
}

export function buildTextureInputs(appearance: AppearanceState): TextureInput[] {
  return appearanceLayerOrder.map((layer) => {
    if (layer === 'race') {
      const race = appearance.race as Race;

      return {
        url: getRaceTextureUrl(race, appearance.sex),
        tint: appearance.skinColor,
        blendMode: 'multiply',
      };
    }

    if (layer === 'hat') {
      return hatTextureMap[appearance.hat as keyof typeof hatTextureMap];
    }

    if (layer === 'shirt') {
      const url = shirtTextureMap[appearance.shirt as keyof typeof shirtTextureMap];
      return url ? { url, blendMode: 'source-over' } : null;
    }

    if (layer === 'pants') {
      const url = pantsTextureMap[appearance.pants as keyof typeof pantsTextureMap];
      return url ? { url, blendMode: 'source-over' } : null;
    }

    const option = getOptions(layer, appearance).find((item) => item.id === appearance[layer]);
    return option?.texture ?? null;
  });
}
