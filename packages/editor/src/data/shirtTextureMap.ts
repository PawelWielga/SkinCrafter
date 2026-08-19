import { resolveAssetUrl } from '../assetResolver';

export const shirts = ['None', 'Hoodie'] as const;
export type Shirt = (typeof shirts)[number];

export function getShirtTextureUrl(shirt: Shirt, assetBaseUrl?: string): string | null {
  return shirt === 'Hoodie' ? resolveAssetUrl('textures/top/male/hoodie.png', assetBaseUrl) : null;
}
