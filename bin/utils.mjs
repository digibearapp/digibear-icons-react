import * as constants from "./constants.mjs";

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function prefixName(name) {
  return constants.PREFIX + capitalizeFirstLetter(name);
}
