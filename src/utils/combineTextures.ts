export default async function combineTextures(urls: (string | null)[]): Promise<string> {
  const valid = urls.filter((u): u is string => !!u);
  if (valid.length === 0) return '';

  const images = await Promise.all(
    valid.map(
      (src) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        })
    )
  );

  const canvas = document.createElement('canvas');
  canvas.width = images[0].width;
  canvas.height = images[0].height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  images.forEach((img) => {
    ctx.drawImage(img, 0, 0);
  });

  return canvas.toDataURL();
}
