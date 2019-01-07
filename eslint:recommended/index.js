"use strict"

const loadModule = require("../lib/load-module")
const buildVueRules = require("../lib/build-vue-rules")

module.exports = loadModule(
    "eslint/conf/eslint-recommended",
    config => ({
        rules: buildVueRules(config).vueRules,
    }),
    () => require("./fallback")
)
