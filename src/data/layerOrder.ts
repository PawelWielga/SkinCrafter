import { appearanceLayerOrder, type AppearanceCategoryId } from './appearance';

export type Layer = AppearanceCategoryId;
export type LayerOrder = Layer[];

const defaultLayerOrder: LayerOrder = appearanceLayerOrder;

export default defaultLayerOrder;
