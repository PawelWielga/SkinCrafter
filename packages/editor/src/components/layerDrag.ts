import type { TextureLayerCategoryId } from '../data/appearance';

export type LayerDropPosition = 'before' | 'after';

export function createLayerPreviewOrder(
  layerOrder: TextureLayerCategoryId[],
  sourceLayer: TextureLayerCategoryId,
  targetLayer: TextureLayerCategoryId,
  position: LayerDropPosition
): TextureLayerCategoryId[] {
  if (!layerOrder.includes(sourceLayer) || !layerOrder.includes(targetLayer)) {
    return [...layerOrder];
  }

  if (sourceLayer === targetLayer) {
    return [...layerOrder];
  }

  const next = layerOrder.filter((layer) => layer !== sourceLayer);
  const targetIndex = next.indexOf(targetLayer);
  const insertionIndex = targetIndex + (position === 'after' ? 1 : 0);
  next.splice(insertionIndex, 0, sourceLayer);
  return next;
}
