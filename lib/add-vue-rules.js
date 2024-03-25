"use strict";

const buildVueRules = require("./build-vue-rules");

module.exports = function addVueRules(config) {
  const vueRules = buildVueRules(config).vueRules;
  const newConfig = Object.assign({}, config);
  newConfig.rules = Object.assign({}, vueRules, newConfig.rules);
  return newConfig;
};
