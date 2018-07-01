'use strict';

function isSubBST(root, min, max) {
  if (root === null) {
    return true;
  }
  if (root.value <= min && max >= root.value) {
    return false;
  }
  return isSubBST(root.left, min, root.value) && isSubBST(root.right, root.value, max);
}

function isBST(root) {
  return isSubBST(root, -Infinity, Infinity);
}
