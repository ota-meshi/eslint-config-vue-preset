"use strict";

module.exports = {
  loadAllCoreRules,
};

/** @type { Map<string, RuleModule> | null } */
let coreRuleMap = null;

function loadAllCoreRules() {
  const eslint = require("eslint");
  try {
    const map = coreRuleMap || (coreRuleMap = new eslint.Linter().getRules());
    return map;
  } catch {
    // getRules() is no longer available in flat config.
  }

  const { builtinRules } = require("eslint/use-at-your-own-risk");
  return /** @type {any} */ (builtinRules || null);
}
