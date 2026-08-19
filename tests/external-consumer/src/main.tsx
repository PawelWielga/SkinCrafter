import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  SkinCrafterEditor,
  type SkinCrafterEditorProps,
  type SkinCrafterSkinOutput,
} from '@pawelwielga/skincrafter-editor';
import '@pawelwielga/skincrafter-editor/styles.css';

const editorProps: SkinCrafterEditorProps = {
  locale: 'en',
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
