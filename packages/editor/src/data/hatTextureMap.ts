import { resolveAssetUrl } from '../assetResolver';

export const hats = ['None', 'Duck'] as const;
export type Hat = (typeof hats)[number];

export function getHatTextureUrl(hat: Hat, assetBaseUrl?: string): string | null {
  return hat === 'Duck' ? resolveAssetUrl('textures/hat/duck.png', assetBaseUrl) : null;
}
