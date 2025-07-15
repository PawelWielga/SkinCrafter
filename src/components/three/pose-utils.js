export default function applyPose(p, refs) {
  const { armL, armR, legL, legR, armLOL, armROL, legLOL, legROL } = refs;

  if (!armL || !armR || !legL || !legR) return;

  [armL, armR, legL, legR, armLOL, armROL, legLOL, legROL].forEach((part) => {
    if (part) {
      part.rotation.set(0, 0, 0);
    }
  });

  if (armL) armL.position.set(-6, 12, 0);
  if (armR) armR.position.set(6, 12, 0);
  if (legL) legL.position.set(-2, 0, 0);
  if (legR) legR.position.set(2, 0, 0);
  if (armLOL) armLOL.position.set(-6, 12, 0);
  if (armROL) armROL.position.set(6, 12, 0);
  if (legLOL) legLOL.position.set(-2, 0, 0);
  if (legROL) legROL.position.set(2, 0, 0);

  if (p === 'tpose') {
    if (armL) armL.rotation.z = Math.PI / 2;
    if (armR) armR.rotation.z = -Math.PI / 2;
    if (armLOL) armLOL.rotation.z = Math.PI / 2;
    if (armROL) armROL.rotation.z = -Math.PI / 2;
  } else if (p === 'walking') {
    const forward = -Math.PI / 4;
    const backward = Math.PI / 4;
    if (armL) {
      armL.rotation.x = forward;
      armL.position.z = 3;
    }
    if (armR) {
      armR.rotation.x = backward;
      armR.position.z = -3;
    }
    if (legL) {
      legL.rotation.x = backward;
      legL.position.z = -4;
      legL.position.y = 1;
    }
    if (legR) {
      legR.rotation.x = forward;
      legR.position.z = 4;
      legR.position.y = 1;
    }
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
      legLOL.position.z = -4;
      legLOL.position.y = 1;
    }
    if (legROL) {
      legROL.rotation.x = forward;
      legROL.position.z = 4;
      legROL.position.y = 1;
    }
  }
}
