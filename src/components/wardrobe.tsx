import React, { useEffect, useMemo, useRef } from 'react';
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
}

const isTextureLayerCategory = (id: AppearanceCategoryId): id is TextureLayerCategoryId =>
  textureLayerCategories.includes(id as TextureLayerCategoryId);

export default function Wardrobe({
  appearance,
  textureLayerOrder,
  onAppearanceChange,
  onLayerOrderChange,
  t,
}: WardrobeProps): React.JSX.Element {
  const layerContainerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const container = layerContainerRef.current;
    if (!container) {
      return undefined;
    }

    let isDisposed = false;
    let destroyDragula: (() => void) | null = null;

    const readLayerOrder = (): TextureLayerCategoryId[] =>
      Array.from(container.querySelectorAll<HTMLElement>('[data-layer-id]')).reduce<
        TextureLayerCategoryId[]
      >((next, element) => {
        const layer = element.dataset.layerId;
        if (isTextureLayerCategory(layer as AppearanceCategoryId)) {
          next.push(layer as TextureLayerCategoryId);
        }

        return next;
      }, []);

    const setupDragula = async (): Promise<void> => {
      const browserWindow = window as Window & typeof globalThis & { global?: typeof globalThis };
      browserWindow.global ??= window;

      const dragulaModule = await import('dragula');
      if (isDisposed) {
        return;
      }

      const drake = dragulaModule.default([container], {
        accepts: (_el, target) => target === container,
        direction: 'vertical',
        moves: (_el, _container, handle) => Boolean(handle?.closest('.layer-order-handle')),
        revertOnSpill: true,
      });

      drake.on('drag', (element) => {
        element.classList.add('is-dragging');
      });

      drake.on('dragend', (element) => {
        element.classList.remove('is-dragging');
      });

      drake.on('drop', () => {
        onLayerOrderChange(readLayerOrder());
      });

      destroyDragula = () => drake.destroy();
    };

    void setupDragula();

    return () => {
      isDisposed = true;
      destroyDragula?.();
    };
  }, [onLayerOrderChange]);

  const renderCategory = (category: AppearanceCategory): React.JSX.Element => {
    const options = getOptions(category.id, appearance);
    const layerCategory: TextureLayerCategoryId | null = isTextureLayerCategory(category.id)
      ? category.id
      : null;
    const layerIndex = layerCategory ? textureLayerOrder.indexOf(layerCategory) : -1;

    return (
      <OptionCard
        key={category.id}
        heading={t(category.labelKey as TranslationKey)}
        icon={category.icon}
        className={`wardrobe-option-card p-2.5 pt-6 ${layerCategory ? 'layer-order-card' : ''}`}
        data-layer-id={layerCategory ?? undefined}
      >
        {layerCategory && (
          <div className="layer-order-controls" aria-hidden={false}>
            <button
              type="button"
              className="layer-order-handle"
              aria-label={`${t('action.dragLayer')} ${t(category.labelKey as TranslationKey)}`}
              title={t('action.dragLayer')}
            >
              <i className="fas fa-grip-vertical" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="layer-order-nudge"
              aria-label={`${t('action.moveLayerUp')} ${t(category.labelKey as TranslationKey)}`}
              title={t('action.moveLayerUp')}
              disabled={layerIndex <= 0}
              onClick={() => nudgeLayer(layerCategory, -1)}
            >
              <i className="fas fa-chevron-up" aria-hidden="true" />
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
              <i className="fas fa-chevron-down" aria-hidden="true" />
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
                  className={`color-option-swatch h-7 w-7 border pixel-border transition-transform hover:scale-105 ${
                    isSelected ? 'is-selected' : ''
                  }`}
                  style={{ backgroundColor: option.color ?? option.id }}
                  aria-label={t(option.labelKey as TranslationKey)}
                  aria-pressed={isSelected}
                  onClick={() => onAppearanceChange(category.id, option.id)}
                >
                  {isSelected && <i className="fas fa-check" aria-hidden="true" />}
                </button>
              );
            }

            return (
              <button
                key={option.id}
                type="button"
                className={`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${
                  isSelected
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
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
        <div ref={layerContainerRef} className="layer-order-list space-y-1.5">
          {layerCategories.map(renderCategory)}
        </div>
      </div>
    </PanelSection>
  );
}
