import {
  defineTextureItem,
  defineTextureItemVariants,
  isTextureItemCompatible,
  resolveTextureItem,
  resolveTextureItemVariant,
  type ResolvedTextureItemDefinition,
  type TextureItemColorSlotDefinition,
  type TextureItemDefinition,
  type TextureItemVariants,
} from './textureItemDefinitions';

export type WardrobeColorSlotDefinition = TextureItemColorSlotDefinition;
export type WardrobeItemDefinition = TextureItemDefinition;
export type ResolvedWardrobeItemDefinition = ResolvedTextureItemDefinition;
export type WardrobeItemVariants = TextureItemVariants;

export const defineWardrobeItem = defineTextureItem;
export const defineWardrobeItemVariants = defineTextureItemVariants;
export const resolveWardrobeItem = resolveTextureItem;
export const resolveWardrobeItemVariant = resolveTextureItemVariant;
export const isWardrobeItemCompatible = isTextureItemCompatible;
