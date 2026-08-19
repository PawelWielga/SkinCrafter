import {
  SkinCrafterEditor,
  SkinPreview,
  resolveAssetUrl,
  type AppearanceState,
  type SkinCrafterEditorProps,
  type SkinCrafterSkinOutput,
  type SkinCrafterState,
  type SkinPreviewProps,
} from '@pawelwielga/skincrafter-editor';
import '@pawelwielga/skincrafter-editor/styles.css';

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
