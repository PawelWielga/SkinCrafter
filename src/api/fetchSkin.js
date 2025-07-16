export default async function fetchSkin(username) {
  const profileRes = await fetch(
    `https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(username)}`
  );
  if (!profileRes.ok) {
    throw new Error('User not found');
  }
  const profile = await profileRes.json();
  const sessionRes = await fetch(
    `https://sessionserver.mojang.com/session/minecraft/profile/${profile.id}`
  );
  if (!sessionRes.ok) {
    throw new Error('Failed to fetch profile');
  }
  const sessionProfile = await sessionRes.json();
  const texturesProp = sessionProfile.properties.find((p) => p.name === 'textures');
  if (!texturesProp) {
    throw new Error('Skin texture not found');
  }
  const decoded = JSON.parse(atob(texturesProp.value));
  return decoded.textures.SKIN.url;
}
