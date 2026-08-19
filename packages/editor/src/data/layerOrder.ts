import {
  appearanceLayerOrder,
  textureLayerCategories,
  type AppearanceCategoryId,
  type TextureLayerCategoryId,
} from './appearance';

export type Layer = AppearanceCategoryId;
export type LayerOrder = Layer[];
export type TextureLayerOrder = TextureLayerCategoryId[];

const defaultLayerOrder: LayerOrder = appearanceLayerOrder;

export const defaultTextureLayerOrder: TextureLayerOrder = textureLayerCategories;

export default defaultLayerOrder;
