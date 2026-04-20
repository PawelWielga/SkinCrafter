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

export interface PoseOptions {
  leftArmX?: number;
  rightArmX?: number;
}

const RIGHT_ARM_X = -6;
const LEFT_ARM_X = 6;
const RIGHT_ARM_TPOSE_X = -10;
const LEFT_ARM_TPOSE_X = 10;
const ARM_TPOSE_Y = 16;
const RIGHT_LEG_X = -2;
const LEFT_LEG_X = 2;

export default function applyPose(p: Pose, refs: References, options: PoseOptions = {}): void {
  const { armL, armR, legL, legR, armLOL, armROL, legLOL, legROL } = refs;
  const leftArmX = options.leftArmX ?? LEFT_ARM_X;
  const rightArmX = options.rightArmX ?? RIGHT_ARM_X;
  const leftArmTposeX = options.leftArmX !== undefined ? options.leftArmX + 4 : LEFT_ARM_TPOSE_X;
  const rightArmTposeX =
    options.rightArmX !== undefined ? options.rightArmX - 4 : RIGHT_ARM_TPOSE_X;

  if (!armL || !armR || !legL || !legR) return;

  [armL, armR, legL, legR, armLOL, armROL, legLOL, legROL].forEach((part) =>
    part?.rotation.set(0, 0, 0)
  );

  armL.position.set(leftArmX, 12, 0);
  armR.position.set(rightArmX, 12, 0);
  legL.position.set(LEFT_LEG_X, 0, 0);
  legR.position.set(RIGHT_LEG_X, 0, 0);

  armLOL?.position.set(leftArmX, 12, 0);
  armROL?.position.set(rightArmX, 12, 0);
  legLOL?.position.set(LEFT_LEG_X, 0, 0);
  legROL?.position.set(RIGHT_LEG_X, 0, 0);

  if (p === 'tpose') {
    const z = Math.PI / 2;
    armL.position.set(leftArmTposeX, ARM_TPOSE_Y, 0);
    armR.position.set(rightArmTposeX, ARM_TPOSE_Y, 0);
    armL.rotation.z = z;
    armR.rotation.z = -z;

    armLOL?.position.set(leftArmTposeX, ARM_TPOSE_Y, 0);
    armROL?.position.set(rightArmTposeX, ARM_TPOSE_Y, 0);
    armLOL?.rotation.set(0, 0, z);
    armROL?.rotation.set(0, 0, -z);
  } else if (p === 'walking') {
    const forward = -Math.PI / 4;
    const backward = Math.PI / 4;
    const raisedArmY = 13;

    armL.rotation.x = forward;
    armL.position.set(armL.position.x, raisedArmY, 3);
    armR.rotation.x = backward;
    armR.position.set(armR.position.x, raisedArmY, -3);

    legL.rotation.x = backward;
    legL.position.set(legL.position.x, 1, -4);
    legR.rotation.x = forward;
    legR.position.set(legR.position.x, 1, 4);

    if (armLOL) {
      armLOL.rotation.x = forward;
      armLOL.position.set(armLOL.position.x, raisedArmY, 3);
    }
    if (armROL) {
      armROL.rotation.x = backward;
      armROL.position.set(armROL.position.x, raisedArmY, -3);
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
