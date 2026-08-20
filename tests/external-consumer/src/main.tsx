import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  SkinCrafterEditor,
  defaultAppearance,
  normalizeTextureLayerOrder,
  parseSkinCrafterState,
  serializeSkinCrafterState,
  type SkinCrafterEditorProps,
  type SkinCrafterImportedInitialSkin,
  type SkinCrafterSerializedState,
  type SkinCrafterSkinOutput,
} from '@pawelwielga/skincrafter-editor';
import '@pawelwielga/skincrafter-editor/styles.css';

const serializedState: SkinCrafterSerializedState = serializeSkinCrafterState({
  appearance: { ...defaultAppearance },
  layerOrder: normalizeTextureLayerOrder(null),
});
const parsedState = parseSkinCrafterState(serializedState);
if (!parsedState.success) {
  throw new Error(parsedState.error.message);
}

document.documentElement.dataset.skinStateSchema = String(serializedState.schemaVersion);

const importedSkin: SkinCrafterImportedInitialSkin = {
  image: new Blob([new Uint8Array()], { type: 'image/png' }),
  model: 'slim',
  appearance: parsedState.state.appearance,
  layerOrder: parsedState.state.layerOrder,
};

const editorProps: SkinCrafterEditorProps = {
  locale: 'en',
  initialSkin: importedSkin,
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
