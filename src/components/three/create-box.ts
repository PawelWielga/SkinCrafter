import * as THREE from 'three';

const TEX_SIZE = 64;

export default function createBox(tex, w, h, d, x, y, z, uvMap, options = {}) {
  const { transparent = false, expand = 0 } = options;
  const geometry = new THREE.BoxGeometry(w + expand, h + expand, d + expand);
  const materials = [
    new THREE.MeshBasicMaterial({ transparent }), // right
    new THREE.MeshBasicMaterial({ transparent }), // left
    new THREE.MeshBasicMaterial({ transparent }), // top
    new THREE.MeshBasicMaterial({ transparent }), // bottom
    new THREE.MeshBasicMaterial({ transparent }), // front
    new THREE.MeshBasicMaterial({ transparent }), // back
  ];

  const setUV = (mat, rect) => {
    mat.map = tex.clone();
    mat.map.magFilter = THREE.NearestFilter;
    mat.map.minFilter = THREE.NearestFilter;
    mat.map.wrapS = THREE.RepeatWrapping;
    mat.map.wrapT = THREE.RepeatWrapping;
    mat.map.repeat.set((rect[2] - rect[0]) / TEX_SIZE, (rect[3] - rect[1]) / TEX_SIZE);
    mat.map.offset.set(rect[0] / TEX_SIZE, 1 - rect[3] / TEX_SIZE);
    mat.map.needsUpdate = true;
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
