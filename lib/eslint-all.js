"use strict";

const { loadAllCoreRules } = require("./load-all-core-rules");

const builtInRules = loadAllCoreRules();
const rules = {};
for (const [ruleId, rule] of builtInRules) {
  if (!rule.meta.deprecated) {
    rules[ruleId] = "error";
  }
}
module.exports = { rules };
