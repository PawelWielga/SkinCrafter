import type { TextureLayerCategoryId } from '../data/appearance';

export type LayerDropPosition = 'before' | 'after';

export interface LayerDropHint {
  targetLayer: TextureLayerCategoryId;
  position: LayerDropPosition;
}

export interface LayerDropZone {
  layer: TextureLayerCategoryId;
  top: number;
  bottom: number;
}

export function findLayerDropHint(
  dropZones: LayerDropZone[],
  clientY: number
): LayerDropHint | null {
  if (dropZones.length === 0) {
    return null;
  }

  for (const zone of dropZones) {
    const midpoint = zone.top + (zone.bottom - zone.top) / 2;
    if (clientY < midpoint) {
      return { targetLayer: zone.layer, position: 'before' };
    }

    if (clientY <= zone.bottom) {
      return { targetLayer: zone.layer, position: 'after' };
    }
  }

  return { targetLayer: dropZones[dropZones.length - 1].layer, position: 'after' };
}

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
