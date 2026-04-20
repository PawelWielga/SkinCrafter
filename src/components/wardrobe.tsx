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
      className="overflow-visible md:overflow-hidden customization-panel"
    >
      <div className="space-y-2 options-container md:flex-1 md:min-h-0">
        {appearanceCategories.map((category) => {
          const options = getOptions(category.id, appearance);
          return (
            <OptionCard
              key={category.id}
              heading={t(category.labelKey as TranslationKey)}
              icon={category.icon}
            >
              <div
                className={
                  category.control === 'color'
                    ? 'mt-4 flex flex-wrap gap-2'
                    : 'mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2'
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
                        className={`w-9 h-9 border pixel-border transition-transform hover:scale-105 ${
                          isSelected ? 'ring-2 ring-green-700' : ''
                        }`}
                        style={{ backgroundColor: option.color ?? option.id }}
                        aria-label={t(option.labelKey as TranslationKey)}
                        aria-pressed={isSelected}
                        onClick={() => onAppearanceChange(category.id, option.id)}
                      />
                    );
                  }

                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`pixel-button min-h-10 px-2 py-2 border text-sm transition-colors ${
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
