import React from 'react';
import OptionCard from './optionCard';
import PanelSection from './panelSection';
import {
  appearanceCategories,
  getOptions,
  type AppearanceCategoryId,
  type AppearanceState,
} from '../data/appearance';
import type { TranslationKey } from '../i18n/translations';

interface WardrobeProps {
  appearance: AppearanceState;
  onAppearanceChange: (category: AppearanceCategoryId, value: string) => void;
  t: (key: TranslationKey) => string;
}

export default function Wardrobe({
  appearance,
  onAppearanceChange,
  t,
}: WardrobeProps): React.JSX.Element {
  return (
    <PanelSection
      title={t('panel.customization')}
      icon="fa-sliders"
      className="overflow-visible md:overflow-hidden customization-panel p-3"
    >
      <div className="space-y-1.5 options-container md:flex-1 md:min-h-0">
        {appearanceCategories.map((category) => {
          const options = getOptions(category.id, appearance);
          return (
            <OptionCard
              key={category.id}
              heading={t(category.labelKey as TranslationKey)}
              icon={category.icon}
              className="wardrobe-option-card p-2.5 pt-6"
            >
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
        })}
      </div>
    </PanelSection>
  );
}
