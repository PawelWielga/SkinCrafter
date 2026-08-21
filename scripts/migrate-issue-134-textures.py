from pathlib import Path
from PIL import Image

ROOT = Path('packages/editor/src/assets/textures')
SOURCES = [
    'race/human/male.png',
    'race/human/female.png',
    'race/bear/male.png',
    'race/orc/male.png',
    'race/zombie/male.png',
    'race/template/none.png',
    'eyes/clasic.png',
    'eyes/small.png',
    'eyes/big.png',
]
TOLERANCE = 4

for relative in SOURCES:
    source_path = ROOT / relative
    image = Image.open(source_path).convert('RGBA')
    if image.size != (64, 64):
        raise RuntimeError(f'{relative}: expected 64x64, got {image.size}')

    tintable = Image.new('RGBA', image.size, (0, 0, 0, 0))
    fixed = Image.new('RGBA', image.size, (0, 0, 0, 0))
    tintable_pixels = tintable.load()
    fixed_pixels = fixed.load()
    tintable_count = 0
    fixed_count = 0

    for y in range(image.height):
        for x in range(image.width):
            pixel = image.getpixel((x, y))
            r, g, b, a = pixel
            if a == 0:
                continue
            protected = (r == g == b == 0) or (r == g == b == 255)
            is_tintable = not protected and max(r, g, b) - min(r, g, b) <= TOLERANCE
            if is_tintable:
                tintable_pixels[x, y] = pixel
                tintable_count += 1
            else:
                fixed_pixels[x, y] = pixel
                fixed_count += 1

    stem = source_path.with_suffix('')
    generated = []
    if tintable_count:
        path = Path(f'{stem}.tintable.png')
        tintable.save(path, format='PNG', optimize=False)
        generated.append(str(path.relative_to(ROOT)))
    if fixed_count:
        path = Path(f'{stem}.fixed.png')
        fixed.save(path, format='PNG', optimize=False)
        generated.append(str(path.relative_to(ROOT)))

    source_path.unlink()
    print(f'{relative}: tintable={tintable_count}, fixed={fixed_count}, generated={generated}')
