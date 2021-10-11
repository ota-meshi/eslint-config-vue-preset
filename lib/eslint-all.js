"use strict"

const { Linter } = require("eslint")

const builtInRules = new Linter().getRules()
const rules = {}
for (const [ruleId, rule] of builtInRules) {
    if (!rule.meta.deprecated) {
        rules[ruleId] = "error"
    }
}
module.exports = { rules }
