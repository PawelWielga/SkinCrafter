import type { SkinCrafterSkinModel } from '../publicTypes';
import type { Race } from './races';
import { defineTextureLayers, type TextureLayers } from './textureLayers';
import {
  defineTextureItem,
  defineTextureItemVariants,
  resolveTextureItemVariant,
  type ResolvedTextureItemDefinition,
  type TextureItemColorSlotDefinition,
  type TextureItemVariants,
} from './textureItemDefinitions';

export type Sex = 'Male' | 'Female' | 'None';

interface RaceDefinition {
  skinColors: readonly string[];
  sexes: Partial<Record<SkinCrafterSkinModel, Sex>>;
  variants: TextureItemVariants;
}

function skinColorSlot(palette: readonly string[]): TextureItemColorSlotDefinition {
  return {
    id: 'skin',
    labelKey: 'category.skinColor',
    defaultColor: palette[0],
    palette,
  };
}

function colorableRaceItem(
  skinModel: SkinCrafterSkinModel,
  textureLayers: TextureLayers,
  palette: readonly string[]
) {
  return defineTextureItem({
    skinModel,
    textureLayers,
    colorSlots: [skinColorSlot(palette)],
  });
}

const humanColors = ['#D5BAAA', '#E0AC69', '#C68642'] as const;
const bearColors = ['#5D4037', '#8D6E63', '#A1887F'] as const;
const orcColors = ['#558B2F', '#7CB342'] as const;
const zombieColors = ['#556B2F'] as const;
const templateColors = ['#FFFFFF'] as const;

const raceTextureMap: Record<Race, RaceDefinition> = {
  Human: {
    skinColors: humanColors,
    sexes: { classic: 'Male', slim: 'Female' },
    variants: defineTextureItemVariants({
      classic: colorableRaceItem(
        'classic',
        defineTextureLayers({
          tintable: {
            texture: 'textures/race/human/male.tintable.png',
            colorSlot: 'skin',
          },
          fixed: 'textures/race/human/male.fixed.png',
        }),
        humanColors
      ),
      slim: colorableRaceItem(
        'slim',
        defineTextureLayers({
          tintable: {
            texture: 'textures/race/human/female.tintable.png',
            colorSlot: 'skin',
          },
          fixed: 'textures/race/human/female.fixed.png',
        }),
        humanColors
      ),
    }),
  },
  Bear: {
    skinColors: bearColors,
    sexes: { classic: 'Male' },
    variants: defineTextureItemVariants({
      classic: defineTextureItem({
        skinModel: 'classic',
        textureLayers: defineTextureLayers({ fixed: 'textures/race/bear/male.fixed.png' }),
      }),
    }),
  },
  Orc: {
    skinColors: orcColors,
    sexes: { classic: 'Male' },
    variants: defineTextureItemVariants({
      classic: colorableRaceItem(
        'classic',
        defineTextureLayers({
          tintable: {
            texture: 'textures/race/orc/male.tintable.png',
            colorSlot: 'skin',
          },
          fixed: 'textures/race/orc/male.fixed.png',
        }),
        orcColors
      ),
    }),
  },
  Zombie: {
    skinColors: zombieColors,
    sexes: { classic: 'Male' },
    variants: defineTextureItemVariants({
      classic: colorableRaceItem(
        'classic',
        defineTextureLayers({
          tintable: {
            texture: 'textures/race/zombie/male.tintable.png',
            colorSlot: 'skin',
          },
          fixed: 'textures/race/zombie/male.fixed.png',
        }),
        zombieColors
      ),
    }),
  },
  Template: {
    skinColors: templateColors,
    sexes: { classic: 'None' },
    variants: defineTextureItemVariants({
      classic: colorableRaceItem(
        'classic',
        defineTextureLayers({
          tintable: {
            texture: 'textures/race/template/none.tintable.png',
            colorSlot: 'skin',
          },
          fixed: 'textures/race/template/none.fixed.png',
        }),
        templateColors
      ),
    }),
  },
};

export function getAvailableSexes(race: Race): Sex[] {
  return Object.values(raceTextureMap[race].sexes).flatMap((sex) => sex ? [sex] : []);
}

export function getRaceSkinColors(race: Race): readonly string[] {
  return raceTextureMap[race].skinColors;
}

export function getRaceTextureItem(
  race: Race,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedTextureItemDefinition | null {
  return resolveTextureItemVariant(raceTextureMap[race].variants, skinModel, assetBaseUrl);
}

export function getRaceTextureLayers(
  race: Race,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
) {
  return getRaceTextureItem(race, skinModel, assetBaseUrl)?.textureLayers ?? null;
}

export default raceTextureMap;
