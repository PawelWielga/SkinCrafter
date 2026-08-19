import * as THREE from 'three';

export type UVRect = [number, number, number, number];

export interface UVMap {
  right: UVRect;
  left: UVRect;
  top: UVRect;
  bottom: UVRect;
  front: UVRect;
  back: UVRect;
}

export type BoxFace = keyof UVMap;

export interface CreateBoxOptions {
  transparent?: boolean;
  expand?: number;
  rotate180Faces?: BoxFace[];
  flipXFaces?: BoxFace[];
  flipYFaces?: BoxFace[];
}

const TEX_SIZE = 64;

export default function createBox(
  tex: THREE.Texture,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
  uvMap: UVMap,
  options: CreateBoxOptions = {}
): THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> {
  const {
    transparent = false,
    expand = 0,
    rotate180Faces = [],
    flipXFaces = [],
    flipYFaces = [],
  } = options;
  const rotatedFaces = new Set<BoxFace>(rotate180Faces);
  const flippedXFaces = new Set<BoxFace>(flipXFaces);
  const flippedYFaces = new Set<BoxFace>(flipYFaces);

  const geometry = new THREE.BoxGeometry(width + expand, height + expand, depth + expand);

  const materials: THREE.MeshBasicMaterial[] = [
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // right
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // left
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // top
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // bottom
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // front
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // back
  ];

  const setUV = (
    mat: THREE.MeshBasicMaterial,
    rect: UVRect,
    flipX = false,
    flipY = false
  ): void => {
    const map = tex.clone();
    const repeatX = (rect[2] - rect[0]) / TEX_SIZE;
    const repeatY = (rect[3] - rect[1]) / TEX_SIZE;
    const left = rect[0] / TEX_SIZE;
    const right = rect[2] / TEX_SIZE;
    const top = 1 - rect[1] / TEX_SIZE;
    const bottom = 1 - rect[3] / TEX_SIZE;

    map.magFilter = THREE.NearestFilter;
    map.minFilter = THREE.NearestFilter;
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(flipX ? -repeatX : repeatX, flipY ? -repeatY : repeatY);
    map.offset.set(flipX ? right : left, flipY ? top : bottom);
    map.needsUpdate = true;
    mat.map = map;
  };

  const shouldFlipX = (face: BoxFace) => rotatedFaces.has(face) || flippedXFaces.has(face);
  const shouldFlipY = (face: BoxFace) => rotatedFaces.has(face) || flippedYFaces.has(face);

  setUV(materials[0], uvMap.right, shouldFlipX('right'), shouldFlipY('right'));
  setUV(materials[1], uvMap.left, shouldFlipX('left'), shouldFlipY('left'));
  setUV(materials[2], uvMap.top, shouldFlipX('top'), shouldFlipY('top'));
  setUV(materials[3], uvMap.bottom, shouldFlipX('bottom'), shouldFlipY('bottom'));
  setUV(materials[4], uvMap.front, shouldFlipX('front'), shouldFlipY('front'));
  setUV(materials[5], uvMap.back, shouldFlipX('back'), shouldFlipY('back'));

  const box = new THREE.Mesh(geometry, materials);
  box.position.set(x, y, z);

  return box;
}
