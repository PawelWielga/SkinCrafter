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
  const { transparent = false, expand = 0, rotate180Faces = [] } = options;
  const rotatedFaces = new Set<BoxFace>(rotate180Faces);

  const geometry = new THREE.BoxGeometry(width + expand, height + expand, depth + expand);

  const materials: THREE.MeshBasicMaterial[] = [
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // right
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // left
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // top
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // bottom
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // front
    new THREE.MeshBasicMaterial({ transparent, toneMapped: false }), // back
  ];

  const setUV = (mat: THREE.MeshBasicMaterial, rect: UVRect, rotate180 = false): void => {
    const map = tex.clone();
    const repeatX = (rect[2] - rect[0]) / TEX_SIZE;
    const repeatY = (rect[3] - rect[1]) / TEX_SIZE;

    map.magFilter = THREE.NearestFilter;
    map.minFilter = THREE.NearestFilter;
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    if (rotate180) {
      map.repeat.set(-repeatX, -repeatY);
      map.offset.set(rect[2] / TEX_SIZE, 1 - rect[1] / TEX_SIZE);
    } else {
      map.repeat.set(repeatX, repeatY);
      map.offset.set(rect[0] / TEX_SIZE, 1 - rect[3] / TEX_SIZE);
    }
    map.needsUpdate = true;
    mat.map = map;
  };

  setUV(materials[0], uvMap.right, rotatedFaces.has('right'));
  setUV(materials[1], uvMap.left, rotatedFaces.has('left'));
  setUV(materials[2], uvMap.top, rotatedFaces.has('top'));
  setUV(materials[3], uvMap.bottom, rotatedFaces.has('bottom'));
  setUV(materials[4], uvMap.front, rotatedFaces.has('front'));
  setUV(materials[5], uvMap.back, rotatedFaces.has('back'));

  const box = new THREE.Mesh(geometry, materials);
  box.position.set(x, y, z);

  return box;
}
