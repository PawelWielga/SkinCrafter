import {
  SkinCrafterEditor,
  SkinPreview,
  resolveAssetUrl,
  type AppearanceState,
  type SkinCrafterEditorProps,
  type SkinCrafterSkinOutput,
  type SkinCrafterState,
  type SkinPreviewProps,
} from '@dihor/skincrafter-editor';
import '@dihor/skincrafter-editor/styles.css';

type PublicTypeContract = [
  AppearanceState,
  SkinCrafterEditorProps,
  SkinCrafterSkinOutput,
  SkinCrafterState,
  SkinPreviewProps,
];

const publicTypeContract: PublicTypeContract | undefined = undefined;

void SkinCrafterEditor;
void SkinPreview;
void resolveAssetUrl;
void publicTypeContract;
