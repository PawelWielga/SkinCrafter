import * as THREE from 'three';

export type Pose = 'default' | 'tpose' | 'walking';

export interface References {
  armL: THREE.Object3D | null;
  armR: THREE.Object3D | null;
  legL: THREE.Object3D | null;
  legR: THREE.Object3D | null;
  armLOL: THREE.Object3D | null;
  armROL: THREE.Object3D | null;
  legLOL: THREE.Object3D | null;
  legROL: THREE.Object3D | null;
}

export default function applyPose(p: Pose, refs: References): void {
  const { armL, armR, legL, legR, armLOL, armROL, legLOL, legROL } = refs;

  if (!armL || !armR || !legL || !legR) return;

  [armL, armR, legL, legR, armLOL, armROL, legLOL, legROL].forEach((part) =>
    part?.rotation.set(0, 0, 0)
  );

  armL.position.set(-6, 12, 0);
  armR.position.set(6, 12, 0);
  legL.position.set(-2, 0, 0);
  legR.position.set(2, 0, 0);

  armLOL?.position.set(-6, 12, 0);
  armROL?.position.set(6, 12, 0);
  legLOL?.position.set(-2, 0, 0);
  legROL?.position.set(2, 0, 0);

  if (p === 'tpose') {
    const z = Math.PI / 2;
    armL.rotation.z = z;
    armR.rotation.z = -z;
    armLOL?.rotation.set(0, 0, z);
    armROL?.rotation.set(0, 0, -z);
  } else if (p === 'walking') {
    const forward = -Math.PI / 4;
    const backward = Math.PI / 4;

    armL.rotation.x = forward;
    armL.position.z = 3;
    armR.rotation.x = backward;
    armR.position.z = -3;

    legL.rotation.x = backward;
    legL.position.set(legL.position.x, 1, -4);
    legR.rotation.x = forward;
    legR.position.set(legR.position.x, 1, 4);

    if (armLOL) {
      armLOL.rotation.x = forward;
      armLOL.position.z = 3;
    }
    if (armROL) {
      armROL.rotation.x = backward;
      armROL.position.z = -3;
    }
    if (legLOL) {
      legLOL.rotation.x = backward;
      legLOL.position.set(legLOL.position.x, 1, -4);
    }
    if (legROL) {
      legROL.rotation.x = forward;
      legROL.position.set(legROL.position.x, 1, 4);
    }
  }
}
