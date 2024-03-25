"use strict";

module.exports = function loadModule(name, resolve, reject) {
  let result = undefined;
  try {
    result = require(name);
  } catch (e) {
    if (e instanceof Error && e.code === "MODULE_NOT_FOUND") {
      return reject();
    }
    throw e;
  }
  return resolve(result);
};
