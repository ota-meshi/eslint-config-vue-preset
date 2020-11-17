"use strict"

const loadModule = require("../../lib/load-module")
const resolveExtendsRules = require("../../lib/resolve-extends-rules")

module.exports = loadModule(
    "eslint-plugin-vue",
    (result) => {
        const baseConfig = result.configs["vue3-strongly-recommended"]

        const rules = Object.assign(
            resolveExtendsRules(baseConfig),
            baseConfig.rules,
        )

        for (const name of Object.keys(rules)) {
            rules[name] = "error"
        }

        return {
            rules,
        }
    },
    () => require("./fallback"),
)
