import { resolveAssetUrl } from '../assetResolver';

export const pants = ['None', 'Pants'] as const;
export type Pants = (typeof pants)[number];

export function getPantsTextureUrl(pants: Pants, assetBaseUrl?: string): string | null {
  return pants === 'Pants' ? resolveAssetUrl('textures/bottom/pants.png', assetBaseUrl) : null;
}
