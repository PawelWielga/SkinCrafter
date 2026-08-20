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
const RIGHT_ARM_PIVOT = new THREE.Vector3(-5, 16, 0);
const LEFT_ARM_PIVOT = new THREE.Vector3(5, 16, 0);
const RIGHT_LEG_X = -1.9;
const LEFT_LEG_X = 1.9;
const RIGHT_LEG_PIVOT = new THREE.Vector3(RIGHT_LEG_X, 6, 0);
const LEFT_LEG_PIVOT = new THREE.Vector3(LEFT_LEG_X, 6, 0);

function setRotatedAroundPivot(
  part: THREE.Object3D | null,
  center: THREE.Vector3,
  pivot: THREE.Vector3,
  rotation: THREE.Euler
): void {
  if (!part) return;

  const rotatedCenter = center.clone().sub(pivot).applyEuler(rotation).add(pivot);
  part.position.copy(rotatedCenter);
  part.rotation.copy(rotation);
}

export default function applyPose(p: Pose, refs: References, options: PoseOptions = {}): void {
  const { armL, armR, legL, legR, armLOL, armROL, legLOL, legROL } = refs;
  const leftArmX = options.leftArmX ?? LEFT_ARM_X;
  const rightArmX = options.rightArmX ?? RIGHT_ARM_X;
  const leftArmCenter = new THREE.Vector3(leftArmX, 12, 0);
  const rightArmCenter = new THREE.Vector3(rightArmX, 12, 0);
  const leftLegCenter = new THREE.Vector3(LEFT_LEG_X, 0, 0);
  const rightLegCenter = new THREE.Vector3(RIGHT_LEG_X, 0, 0);

  if (!armL || !armR || !legL || !legR) return;

  [armL, armR, legL, legR, armLOL, armROL, legLOL, legROL].forEach((part) =>
    part?.rotation.set(0, 0, 0)
  );

  armL.position.copy(leftArmCenter);
  armR.position.copy(rightArmCenter);
  legL.position.copy(leftLegCenter);
  legR.position.copy(rightLegCenter);

  armLOL?.position.copy(leftArmCenter);
  armROL?.position.copy(rightArmCenter);
  legLOL?.position.copy(leftLegCenter);
  legROL?.position.copy(rightLegCenter);

  if (p === 'tpose') {
    const leftRotation = new THREE.Euler(0, 0, Math.PI / 2);
    const rightRotation = new THREE.Euler(0, 0, -Math.PI / 2);

    setRotatedAroundPivot(armL, leftArmCenter, LEFT_ARM_PIVOT, leftRotation);
    setRotatedAroundPivot(armR, rightArmCenter, RIGHT_ARM_PIVOT, rightRotation);
    setRotatedAroundPivot(armLOL, leftArmCenter, LEFT_ARM_PIVOT, leftRotation);
    setRotatedAroundPivot(armROL, rightArmCenter, RIGHT_ARM_PIVOT, rightRotation);
  } else if (p === 'walking') {
    const forward = -Math.PI / 4;
    const backward = Math.PI / 4;

    const leftArmRotation = new THREE.Euler(forward, 0, 0);
    const rightArmRotation = new THREE.Euler(backward, 0, 0);
    const leftLegRotation = new THREE.Euler(backward, 0, 0);
    const rightLegRotation = new THREE.Euler(forward, 0, 0);

    setRotatedAroundPivot(armL, leftArmCenter, LEFT_ARM_PIVOT, leftArmRotation);
    setRotatedAroundPivot(armR, rightArmCenter, RIGHT_ARM_PIVOT, rightArmRotation);
    setRotatedAroundPivot(legL, leftLegCenter, LEFT_LEG_PIVOT, leftLegRotation);
    setRotatedAroundPivot(legR, rightLegCenter, RIGHT_LEG_PIVOT, rightLegRotation);

    setRotatedAroundPivot(armLOL, leftArmCenter, LEFT_ARM_PIVOT, leftArmRotation);
    setRotatedAroundPivot(armROL, rightArmCenter, RIGHT_ARM_PIVOT, rightArmRotation);
    setRotatedAroundPivot(legLOL, leftLegCenter, LEFT_LEG_PIVOT, leftLegRotation);
    setRotatedAroundPivot(legROL, rightLegCenter, RIGHT_LEG_PIVOT, rightLegRotation);
  }
}
