import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import SkinCrafterIcon from './icon';
import {
  createLayerPreviewOrder,
  findLayerDropHint,
  type LayerDropHint,
  type LayerDropZone,
} from './layerDrag';
import OptionCard from './optionCard';
import PanelSection from './panelSection';
import {
  appearanceCategories,
  getColorControlBindingForOwner,
  getOptions,
  isAppearanceColorSubcontrol,
  isColorControlEffective,
  textureLayerCategories,
  type AppearanceCategoryId,
  type AppearanceCategory,
  type AppearanceState,
  type TextureLayerCategoryId,
  type WardrobeColorState,
} from '../data/appearance';
import { getHairColorSlotDefinition } from '../data/characterTextureDefinitions';
import type { TextureItemColorSlotDefinition } from '../data/textureItemDefinitions';
import type { TranslationKey } from '../i18n/translations';
import type { SkinCrafterSkinModel } from '../publicTypes';

interface WardrobeProps {
  appearance: AppearanceState;
  textureLayerOrder: TextureLayerCategoryId[];
  wardrobeColors?: WardrobeColorState;
  onAppearanceChange: (category: AppearanceCategoryId, value: string) => void;
  onWardrobeColorChange?: (
    category: TextureLayerCategoryId,
    itemId: string,
    slotId: string,
    color: string
  ) => void;
  onLayerOrderChange: (layerOrder: TextureLayerCategoryId[]) => void;
  t: (key: TranslationKey) => string;
  assetBaseUrl?: string;
  skinModel?: SkinCrafterSkinModel;
}

interface TextureItemColorPalettesProps {
  colorSlots: readonly TextureItemColorSlotDefinition[];
  colors?: Readonly<Record<string, string>>;
  onChange: (slotId: string, color: string) => void;
  t: (key: TranslationKey) => string;
  testId?: string;
}

export function TextureItemColorPalettes({
  colorSlots,
  colors,
  onChange,
  t,
  testId = 'texture-item-color-palettes',
}: TextureItemColorPalettesProps): React.JSX.Element | null {
  if (colorSlots.length === 0) return null;

  return (
    <div className="mt-2 space-y-2" data-testid={testId}>
      {colorSlots.map((slot) => {
        const selectedColor = colors?.[slot.id] ?? slot.defaultColor;
        const label = t(slot.labelKey);
        return (
          <div key={slot.id} data-color-slot={slot.id}>
            <div className="text-xs font-semibold mb-1">{label}</div>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label={label}>
              {slot.palette.map((color) => {
                const isSelected = selectedColor === color;
                return (
                  <button
                    key={color}
                    type="button"
                    className={`color-option-swatch h-7 w-7 border pixel-border ${
                      isSelected ? 'is-selected' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`${label}: ${color}`}
                    aria-pressed={isSelected}
                    onClick={() => onChange(slot.id, color)}
                  >
                    {isSelected && <SkinCrafterIcon name="fa-check" />}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function WardrobeColorPalettes(
  props: Omit<TextureItemColorPalettesProps, 'testId'>
): React.JSX.Element | null {
  return <TextureItemColorPalettes {...props} testId="wardrobe-color-palettes" />;
}

interface LayerDragGhost {
  x: number;
  y: number;
  pointerType: 'mouse' | 'touch';
}

const isTextureLayerCategory = (id: AppearanceCategoryId): id is TextureLayerCategoryId =>
  textureLayerCategories.includes(id as TextureLayerCategoryId);

const layerOrdersEqual = (
  left: TextureLayerCategoryId[],
  right: TextureLayerCategoryId[]
): boolean => left.length === right.length && left.every((layer, index) => layer === right[index]);

export default function Wardrobe({
  appearance,
  textureLayerOrder,
  wardrobeColors,
  onAppearanceChange,
  onWardrobeColorChange,
  onLayerOrderChange,
  t,
  assetBaseUrl,
  skinModel,
}: WardrobeProps): React.JSX.Element {
  const [draggingLayer, setDraggingLayer] = useState<TextureLayerCategoryId | null>(null);
  const [previewLayerOrder, setPreviewLayerOrder] = useState<TextureLayerCategoryId[] | null>(null);
  const [dropHint, setDropHint] = useState<LayerDropHint | null>(null);
  const [dragGhost, setDragGhost] = useState<LayerDragGhost | null>(null);
  const draggingLayerRef = useRef<TextureLayerCategoryId | null>(null);
  const previewLayerOrderRef = useRef<TextureLayerCategoryId[] | null>(null);
  const touchPointerIdRef = useRef<number | null>(null);
  const layerListRef = useRef<HTMLDivElement | null>(null);
  const layerDropZonesRef = useRef<LayerDropZone[]>([]);
  const previousLayerPositionsRef = useRef(new Map<TextureLayerCategoryId, number>());

  const categoriesById = useMemo(
    () => new Map<AppearanceCategoryId, AppearanceCategory>(
      appearanceCategories.map((category) => [category.id, category])
    ),
    []
  );
  const fixedCategories = useMemo(
    () => appearanceCategories.filter(
      (category) => !isTextureLayerCategory(category.id) && !isAppearanceColorSubcontrol(category.id)
    ),
    []
  );

  const renderedLayerOrder = draggingLayer && previewLayerOrder ? previewLayerOrder : textureLayerOrder;

  const layerCategories = useMemo(
    () => renderedLayerOrder
      .map((layer) => categoriesById.get(layer))
      .filter((category): category is AppearanceCategory => Boolean(category)),
    [categoriesById, renderedLayerOrder]
  );

  useLayoutEffect(() => {
    const list = layerListRef.current;
    if (!list) return;

    const nextPositions = new Map<TextureLayerCategoryId, number>();
    const cards = list.querySelectorAll<HTMLElement>('[data-layer-id]');

    cards.forEach((card) => {
      const rawLayer = card.dataset.layerId as AppearanceCategoryId | undefined;
      if (!rawLayer || !isTextureLayerCategory(rawLayer)) return;

      const nextTop = card.offsetTop;
      const previousTop = previousLayerPositionsRef.current.get(rawLayer);
      nextPositions.set(rawLayer, nextTop);

      if (previousTop === undefined || previousTop === nextTop || typeof card.animate !== 'function') return;

      if (typeof card.getAnimations === 'function') {
        card
          .getAnimations()
          .filter((animation) => animation.id === 'skincrafter-layer-preview')
          .forEach((animation) => animation.cancel());
      }

      const animation = card.animate(
        [
          { transform: `translateY(${previousTop - nextTop}px)` },
          { transform: 'translateY(0)' },
        ],
        { duration: 150, easing: 'ease-out' }
      );
      animation.id = 'skincrafter-layer-preview';
    });

    previousLayerPositionsRef.current = nextPositions;
  }, [renderedLayerOrder]);

  const captureLayerDropZones = (sourceLayer: TextureLayerCategoryId): LayerDropZone[] => {
    const list = layerListRef.current;
    if (!list) return [];

    const listTop = list.getBoundingClientRect().top;
    return [...list.querySelectorAll<HTMLElement>('[data-layer-id]')].flatMap((card) => {
      const rawLayer = card.dataset.layerId as AppearanceCategoryId | undefined;
      if (!rawLayer || !isTextureLayerCategory(rawLayer) || rawLayer === sourceLayer) return [];

      const rect = card.getBoundingClientRect();
      return [{ layer: rawLayer, top: rect.top - listTop, bottom: rect.bottom - listTop }];
    });
  };

  const findCurrentLayerDropHint = (clientY: number): LayerDropHint | null => {
    const list = layerListRef.current;
    if (!list) return null;

    const relativeY = clientY - list.getBoundingClientRect().top;
    return findLayerDropHint(layerDropZonesRef.current, relativeY);
  };

  const clearLayerDrag = (): void => {
    draggingLayerRef.current = null;
    previewLayerOrderRef.current = null;
    touchPointerIdRef.current = null;
    layerDropZonesRef.current = [];
    setDraggingLayer(null);
    setPreviewLayerOrder(null);
    setDropHint(null);
    setDragGhost(null);
  };

  const beginLayerDrag = (layer: TextureLayerCategoryId, ghost: LayerDragGhost): void => {
    const initialPreview = [...textureLayerOrder];
    layerDropZonesRef.current = captureLayerDropZones(layer);
    draggingLayerRef.current = layer;
    previewLayerOrderRef.current = initialPreview;
    setDraggingLayer(layer);
    setPreviewLayerOrder(initialPreview);
    setDropHint(null);
    setDragGhost(ghost);
  };

  const updateLayerPreview = (
    targetLayer: TextureLayerCategoryId,
    position: LayerDropHint['position']
  ): void => {
    const sourceLayer = draggingLayerRef.current;
    if (!sourceLayer) return;

    const next = createLayerPreviewOrder(textureLayerOrder, sourceLayer, targetLayer, position);
    previewLayerOrderRef.current = next;
    setPreviewLayerOrder((current) => current && layerOrdersEqual(current, next) ? current : next);
    setDropHint({ targetLayer, position });
  };

  const commitLayerDrag = (): void => {
    const next = previewLayerOrderRef.current;
    const shouldCommit = next && !layerOrdersEqual(next, textureLayerOrder);
    clearLayerDrag();

    if (shouldCommit && next) onLayerOrderChange(next);
  };

  const nudgeLayer = (layer: TextureLayerCategoryId, direction: -1 | 1): void => {
    const currentIndex = textureLayerOrder.indexOf(layer);
    const nextIndex = currentIndex + direction;
    if (currentIndex < 0 || nextIndex < 0 || nextIndex >= textureLayerOrder.length) return;

    const next = [...textureLayerOrder];
    [next[currentIndex], next[nextIndex]] = [next[nextIndex], next[currentIndex]];
    onLayerOrderChange(next);
  };

  const startLayerDrag = (
    event: React.DragEvent<HTMLButtonElement>,
    layer: TextureLayerCategoryId
  ): void => {
    beginLayerDrag(layer, { x: event.clientX, y: event.clientY, pointerType: 'mouse' });
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', layer);

    if (typeof event.dataTransfer.setDragImage === 'function') {
      const transparentDragImage = document.createElement('div');
      transparentDragImage.style.position = 'fixed';
      transparentDragImage.style.left = '-10000px';
      transparentDragImage.style.top = '-10000px';
      transparentDragImage.style.width = '1px';
      transparentDragImage.style.height = '1px';
      transparentDragImage.style.opacity = '0';
      document.body.appendChild(transparentDragImage);
      event.dataTransfer.setDragImage(transparentDragImage, 0, 0);
      window.setTimeout(() => transparentDragImage.remove(), 0);
    }
  };

  const moveLayerDragGhost = (event: React.DragEvent<HTMLButtonElement>): void => {
    if (!draggingLayerRef.current || (event.clientX === 0 && event.clientY === 0)) return;
    setDragGhost({ x: event.clientX, y: event.clientY, pointerType: 'mouse' });
  };

  const finishLayerDrag = (): void => {
    if (draggingLayerRef.current) clearLayerDrag();
  };

  const allowLayerDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    if (!draggingLayerRef.current) return;

    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    const hint = findCurrentLayerDropHint(event.clientY);
    if (hint) updateLayerPreview(hint.targetLayer, hint.position);
  };

  const dropLayer = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    commitLayerDrag();
  };

  const startTouchLayerDrag = (
    event: React.PointerEvent<HTMLDivElement>,
    layer: TextureLayerCategoryId
  ): void => {
    if (event.pointerType === 'mouse' || event.button > 0) return;

    const target = event.target instanceof Element ? event.target : null;
    if (!target?.closest('h3')) return;

    event.preventDefault();
    touchPointerIdRef.current = event.pointerId;
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture is best-effort; browser window dispatch still keeps the interaction usable.
    }
    beginLayerDrag(layer, { x: event.clientX, y: event.clientY, pointerType: 'touch' });
  };

  const moveTouchLayerDrag = (event: React.PointerEvent<HTMLDivElement>): void => {
    if (event.pointerId !== touchPointerIdRef.current || !draggingLayerRef.current) return;

    event.preventDefault();
    setDragGhost({ x: event.clientX, y: event.clientY, pointerType: 'touch' });
    const hint = findCurrentLayerDropHint(event.clientY);
    if (hint) updateLayerPreview(hint.targetLayer, hint.position);
  };

  const finishTouchLayerDrag = (event: React.PointerEvent<HTMLDivElement>): void => {
    if (event.pointerId !== touchPointerIdRef.current) return;

    event.preventDefault();
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // The pointer may already have been released by the browser.
    }
    commitLayerDrag();
  };

  const cancelTouchLayerDrag = (event: React.PointerEvent<HTMLDivElement>): void => {
    if (event.pointerId !== touchPointerIdRef.current) return;
    clearLayerDrag();
  };

  const renderCategory = (category: AppearanceCategory): React.JSX.Element => {
    const options = getOptions(category.id, appearance, assetBaseUrl, skinModel);
    const layerCategory: TextureLayerCategoryId | null = isTextureLayerCategory(category.id)
      ? category.id
      : null;
    const layerIndex = layerCategory ? textureLayerOrder.indexOf(layerCategory) : -1;
    const isDropTarget = layerCategory && dropHint?.targetLayer === layerCategory;
    const selectedOption = options.find((option) => appearance[category.id] === option.id);
    const colorBinding = getColorControlBindingForOwner(category.id);
    const selectedItemColorSlots = colorBinding
      ? selectedOption?.textureItem?.colorSlots?.filter((slot) => slot.id === colorBinding.slotId) ?? []
      : [];
    const appearanceColorSlots = colorBinding
      && isColorControlEffective(colorBinding.colorControlId, appearance, assetBaseUrl, skinModel)
      ? selectedItemColorSlots
      : colorBinding && category.id === 'hair' && selectedOption?.id === 'None'
        ? [getHairColorSlotDefinition()]
        : [];
    const wardrobeColorSlots = layerCategory ? selectedOption?.textureItem?.colorSlots ?? [] : [];
    const selectedWardrobeColors = layerCategory && selectedOption
      ? wardrobeColors?.[layerCategory]?.[selectedOption.id]
      : undefined;
    const selectedAppearanceColors = colorBinding
      ? { [colorBinding.slotId]: appearance[colorBinding.colorControlId] }
      : undefined;

    return (
      <OptionCard
        key={category.id}
        heading={t(category.labelKey as TranslationKey)}
        icon={category.icon}
        className={`wardrobe-option-card p-2.5 pt-6 ${layerCategory ? 'layer-order-card' : ''} ${
          layerCategory === draggingLayer ? 'is-dragging' : ''
        } ${isDropTarget ? `drop-${dropHint.position}` : ''}`}
        data-layer-id={layerCategory ?? undefined}
        onPointerDown={layerCategory ? (event) => startTouchLayerDrag(event, layerCategory) : undefined}
        onPointerMove={layerCategory ? moveTouchLayerDrag : undefined}
        onPointerUp={layerCategory ? finishTouchLayerDrag : undefined}
        onPointerCancel={layerCategory ? cancelTouchLayerDrag : undefined}
      >
        {layerCategory && (
          <div className="layer-order-controls">
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
              className="layer-order-handle"
              aria-label={`${t('action.dragLayer')} ${t(category.labelKey as TranslationKey)}`}
              title={t('action.dragLayer')}
              draggable
              onDragStart={(event) => startLayerDrag(event, layerCategory)}
              onDrag={moveLayerDragGhost}
              onDragEnd={finishLayerDrag}
            >
              <SkinCrafterIcon name="fa-grip-vertical" />
            </button>
            <button
              type="button"
              className="layer-order-nudge"
              aria-label={`${t('action.moveLayerDown')} ${t(category.labelKey as TranslationKey)}`}
              title={t('action.moveLayerDown')}
              disabled={layerIndex >= textureLayerOrder.length - 1}
              onClick={() => nudgeLayer(layerCategory, 1)}
            >
              <SkinCrafterIcon name="fa-chevron-down" />
            </button>
          </div>
        )}

        <div
          className={category.control === 'color'
            ? 'mt-2 flex flex-wrap gap-1.5'
            : 'mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5'}
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

        {colorBinding && appearanceColorSlots.length > 0 && (
          <TextureItemColorPalettes
            colorSlots={appearanceColorSlots}
            colors={selectedAppearanceColors}
            t={t}
            testId={`appearance-color-palettes-${category.id}`}
            onChange={(_slotId, color) => onAppearanceChange(colorBinding.colorControlId, color)}
          />
        )}

        {layerCategory && selectedOption && wardrobeColorSlots.length > 0 && (
          <WardrobeColorPalettes
            colorSlots={wardrobeColorSlots}
            colors={selectedWardrobeColors}
            t={t}
            onChange={(slotId, color) =>
              onWardrobeColorChange?.(layerCategory, selectedOption.id, slotId, color)
            }
          />
        )}
      </OptionCard>
    );
  };

  const draggedCategory = draggingLayer ? categoriesById.get(draggingLayer) : null;

  return (
    <PanelSection
      title={t('panel.customization')}
      icon="fa-sliders"
      className="overflow-visible md:overflow-hidden customization-panel p-3"
    >
      <div className="space-y-1.5 options-container md:flex-1 md:min-h-0">
        {fixedCategories.map(renderCategory)}
        <div
          ref={layerListRef}
          className="layer-order-list space-y-1.5"
          onDragOver={allowLayerDrop}
          onDrop={dropLayer}
        >
          {layerCategories.map(renderCategory)}
        </div>
      </div>
      {dragGhost && draggedCategory && (
        <div
          className={`layer-drag-ghost ${dragGhost.pointerType === 'touch' ? 'is-touch' : ''}`}
          style={{ left: dragGhost.x, top: dragGhost.y }}
          aria-hidden="true"
          data-testid="layer-drag-ghost"
        >
          <SkinCrafterIcon name={draggedCategory.icon} />
          <span>{t(draggedCategory.labelKey as TranslationKey)}</span>
        </div>
      )}
    </PanelSection>
  );
}
