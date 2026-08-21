import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  SkinCrafterEditor,
  defaultAppearance,
  normalizeTextureLayerOrder,
  parseSkinCrafterState,
  serializeSkinCrafterState,
  type SkinCrafterEditorProps,
  type SkinCrafterErrorCategory,
  type SkinCrafterErrorCode,
  type SkinCrafterImportedInitialSkin,
  type SkinCrafterPersistenceAdapter,
  type SkinCrafterSerializedState,
  type SkinCrafterSkinOutput,
} from '@dihor/skincrafter-editor';
import '@dihor/skincrafter-editor/styles.css';

const serializedState: SkinCrafterSerializedState = serializeSkinCrafterState({
  appearance: { ...defaultAppearance },
  layerOrder: normalizeTextureLayerOrder(null),
});
const parsedState = parseSkinCrafterState(serializedState);
if (!parsedState.success) {
  throw new Error(parsedState.error.message);
}

document.documentElement.dataset.skinStateSchema = String(serializedState.schemaVersion);

const persistenceErrorCode: SkinCrafterErrorCode = 'persistence_load_failed';
const persistenceErrorCategory: SkinCrafterErrorCategory = 'persistence';
document.documentElement.dataset.persistenceErrorCode = persistenceErrorCode;
document.documentElement.dataset.persistenceErrorCategory = persistenceErrorCategory;

const importedSkin: SkinCrafterImportedInitialSkin = {
  image: new Blob([new Uint8Array()], { type: 'image/png' }),
  model: 'slim',
  appearance: parsedState.state.appearance,
  layerOrder: parsedState.state.layerOrder,
};

const persistence: SkinCrafterPersistenceAdapter = {
  load: () => ({ status: 'incompatible' }),
  save: () => undefined,
};

const editorProps: SkinCrafterEditorProps = {
  locale: 'en',
  initialSkin: importedSkin,
  persistence,
  onSkinChange: (skin: SkinCrafterSkinOutput) => {
    document.documentElement.dataset.skinModel = skin.metadata.model;
  },
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Missing #root element.');
}

createRoot(rootElement).render(
  <StrictMode>
    <SkinCrafterEditor {...editorProps} />
  </StrictMode>
);