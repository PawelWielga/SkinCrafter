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

export interface CreateBoxOptions {
  transparent?: boolean;
  expand?: number;
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
  const { transparent = false, expand = 0 } = options;

  const geometry = new THREE.BoxGeometry(width + expand, height + expand, depth + expand);

  const materials: THREE.MeshBasicMaterial[] = [
    new THREE.MeshBasicMaterial({ transparent }), // right
    new THREE.MeshBasicMaterial({ transparent }), // left
    new THREE.MeshBasicMaterial({ transparent }), // top
    new THREE.MeshBasicMaterial({ transparent }), // bottom
    new THREE.MeshBasicMaterial({ transparent }), // front
    new THREE.MeshBasicMaterial({ transparent }), // back
  ];

  const setUV = (mat: THREE.MeshBasicMaterial, rect: UVRect): void => {
    const map = tex.clone();
    map.magFilter = THREE.NearestFilter;
    map.minFilter = THREE.NearestFilter;
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.repeat.set((rect[2] - rect[0]) / TEX_SIZE, (rect[3] - rect[1]) / TEX_SIZE);
    map.offset.set(rect[0] / TEX_SIZE, 1 - rect[3] / TEX_SIZE);
    map.needsUpdate = true;
    mat.map = map;
  };

  setUV(materials[0], uvMap.right);
  setUV(materials[1], uvMap.left);
  setUV(materials[2], uvMap.top);
  setUV(materials[3], uvMap.bottom);
  setUV(materials[4], uvMap.front);
  setUV(materials[5], uvMap.back);

  const box = new THREE.Mesh(geometry, materials);
  box.position.set(x, y, z);

  return box;
}
