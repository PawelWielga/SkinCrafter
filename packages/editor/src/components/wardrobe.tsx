import React, { useMemo, useState } from 'react';
import SkinCrafterIcon from './icon';
import OptionCard from './optionCard';
import PanelSection from './panelSection';
import {
  appearanceCategories,
  getOptions,
  textureLayerCategories,
  type AppearanceCategoryId,
  type AppearanceCategory,
  type AppearanceState,
  type TextureLayerCategoryId,
} from '../data/appearance';
import type { TranslationKey } from '../i18n/translations';

interface WardrobeProps {
  appearance: AppearanceState;
  textureLayerOrder: TextureLayerCategoryId[];
  onAppearanceChange: (category: AppearanceCategoryId, value: string) => void;
  onLayerOrderChange: (layerOrder: TextureLayerCategoryId[]) => void;
  t: (key: TranslationKey) => string;
  assetBaseUrl?: string;
}

const isTextureLayerCategory = (id: AppearanceCategoryId): id is TextureLayerCategoryId =>
  textureLayerCategories.includes(id as TextureLayerCategoryId);

export default function Wardrobe({
  appearance,
  textureLayerOrder,
  onAppearanceChange,
  onLayerOrderChange,
  t,
  assetBaseUrl,
}: WardrobeProps): React.JSX.Element {
  const [draggingLayer, setDraggingLayer] = useState<TextureLayerCategoryId | null>(null);

  const { fixedCategories, layerCategories } = useMemo(() => {
    const categoriesById = new Map<AppearanceCategoryId, AppearanceCategory>(
      appearanceCategories.map((category) => [category.id, category])
    );
    const fixedCategories = appearanceCategories.filter(
      (category) => !isTextureLayerCategory(category.id)
    );
    const layerCategories = textureLayerOrder
      .map((layer) => categoriesById.get(layer))
      .filter((category): category is AppearanceCategory => Boolean(category));

    return { fixedCategories, layerCategories };
  }, [textureLayerOrder]);

  const nudgeLayer = (layer: TextureLayerCategoryId, direction: -1 | 1): void => {
    const currentIndex = textureLayerOrder.indexOf(layer);
    const nextIndex = currentIndex + direction;

    if (currentIndex < 0 || nextIndex < 0 || nextIndex >= textureLayerOrder.length) {
      return;
    }

    const next = [...textureLayerOrder];
    [next[currentIndex], next[nextIndex]] = [next[nextIndex], next[currentIndex]];
    onLayerOrderChange(next);
  };

  const startLayerDrag = (
    event: React.DragEvent<HTMLButtonElement>,
    layer: TextureLayerCategoryId
  ): void => {
    setDraggingLayer(layer);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', layer);
  };

  const finishLayerDrag = (): void => {
    setDraggingLayer(null);
  };

  const allowLayerDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetLayer: TextureLayerCategoryId
  ): void => {
    if (!draggingLayer || draggingLayer === targetLayer) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const dropLayer = (
    event: React.DragEvent<HTMLDivElement>,
    targetLayer: TextureLayerCategoryId
  ): void => {
    event.preventDefault();
    const rawLayer = draggingLayer ?? event.dataTransfer.getData('text/plain');
    setDraggingLayer(null);

    if (!isTextureLayerCategory(rawLayer as AppearanceCategoryId)) return;
    const sourceLayer = rawLayer as TextureLayerCategoryId;
    if (sourceLayer === targetLayer) return;

    const next = textureLayerOrder.filter((layer) => layer !== sourceLayer);
    const targetIndex = next.indexOf(targetLayer);
    if (targetIndex < 0) return;

    next.splice(targetIndex, 0, sourceLayer);
    onLayerOrderChange(next);
  };

  const renderCategory = (category: AppearanceCategory): React.JSX.Element => {
    const options = getOptions(category.id, appearance, assetBaseUrl);
    const layerCategory: TextureLayerCategoryId | null = isTextureLayerCategory(category.id)
      ? category.id
      : null;
    const layerIndex = layerCategory ? textureLayerOrder.indexOf(layerCategory) : -1;

    return (
      <OptionCard
        key={category.id}
        heading={t(category.labelKey as TranslationKey)}
        icon={category.icon}
        className={`wardrobe-option-card p-2.5 pt-6 ${layerCategory ? 'layer-order-card' : ''} ${
          layerCategory === draggingLayer ? 'is-dragging' : ''
        }`}
        data-layer-id={layerCategory ?? undefined}
        onDragOver={
          layerCategory ? (event) => allowLayerDrop(event, layerCategory) : undefined
        }
        onDrop={layerCategory ? (event) => dropLayer(event, layerCategory) : undefined}
      >
        {layerCategory && (
          <div className="layer-order-controls">
            <button
              type="button"
              className="layer-order-handle"
              aria-label={`${t('action.dragLayer')} ${t(category.labelKey as TranslationKey)}`}
              title={t('action.dragLayer')}
              draggable
              onDragStart={(event) => startLayerDrag(event, layerCategory)}
              onDragEnd={finishLayerDrag}
            >
              <SkinCrafterIcon name="fa-grip-vertical" />
            </button>
            <button
              type="button"
              className="layer-order-nudge"
              aria-label={`${t('action.moveLayerUp')} ${t(category.labelKey as TranslationKey)}`}
              title={t('action.moveLayerUp')}
              disabled={layerIndex <= 0}
              onClick={() => nudgeLayer(layerCategory, -1)}
            >
              <SkinCrafterIcon name="fa-chevron-up" />
            </button>
            <button
              type="button"
              className="layer-order-nudge"
              aria-label={`${t('action.moveLayerDown')} ${t(
                category.labelKey as TranslationKey
              )}`}
              title={t('action.moveLayerDown')}
              disabled={layerIndex >= textureLayerOrder.length - 1}
              onClick={() => nudgeLayer(layerCategory, 1)}
            >
              <SkinCrafterIcon name="fa-chevron-down" />
            </button>
          </div>
        )}

        <div
          className={
            category.control === 'color'
              ? 'mt-2 flex flex-wrap gap-1.5'
              : 'mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5'
          }
          role="group"
          aria-label={t(category.labelKey as TranslationKey)}
        >
          {options.map((option) => {
            const isSelected = appearance[category.id] === option.id;
            if (category.control === 'color') {
              return (
                <button
                  key={option.id}
                  type="button"
                  className={`color-option-swatch h-7 w-7 border pixel-border ${
                    isSelected ? 'is-selected' : ''
                  }`}
                  style={{ backgroundColor: option.color ?? option.id }}
                  aria-label={t(option.labelKey as TranslationKey)}
                  aria-pressed={isSelected}
                  onClick={() => onAppearanceChange(category.id, option.id)}
                >
                  {isSelected && <SkinCrafterIcon name="fa-check" />}
                </button>
              );
            }

            return (
              <button
                key={option.id}
                type="button"
                className={`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${
                  isSelected ? 'skincrafter-option-selected' : 'skincrafter-secondary-action'
                }`}
                aria-pressed={isSelected}
                onClick={() => onAppearanceChange(category.id, option.id)}
              >
                {t(option.labelKey as TranslationKey)}
              </button>
            );
          })}
        </div>
      </OptionCard>
    );
  };

  return (
    <PanelSection
      title={t('panel.customization')}
      icon="fa-sliders"
      className="overflow-visible md:overflow-hidden customization-panel p-3"
    >
      <div className="space-y-1.5 options-container md:flex-1 md:min-h-0">
        {fixedCategories.map(renderCategory)}
        <div className="layer-order-list space-y-1.5">
          {layerCategories.map(renderCategory)}
        </div>
      </div>
    </PanelSection>
  );
}
