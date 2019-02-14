"use strict"

const resolveExtendsRules = require("./resolve-extends-rules")
const vueRuleNames = Object.keys(require("eslint-plugin-vue").rules)

function toVueRuleOptions(options, name) {
    let vueOptions = options
    const ruleName = name
    if (name === "no-dupe-keys") {
        // There is no same rule.
        return {}
    } else if (name === "no-unused-vars") {
        vueOptions = Array.isArray(options) ? options[0] : options
    } else if (name === "no-multi-spaces") {
        vueOptions = ["error"]
        if (Array.isArray(options)) {
            if (options[1] && options[1].Property) {
                vueOptions[1] = { ignoreProperties: true }
            }
        } else {
            vueOptions[0] = options
        }
    }

    if (Array.isArray(vueOptions) && vueOptions.length === 1) {
        vueOptions = vueOptions[0]
    }

    return {
        ruleName,
        vueOptions,
    }
}

function isOff(s) {
    if (s) {
        if (s === "off") {
            return true
        }
        if (Array.isArray(s)) {
            const e = s[0]
            return e && e === "off"
        }
    }
    return false
}

function toVueRules(rules) {
    const vueRules = {}
    const unsupports = {}
    for (const name of Object.keys(rules).filter(n => !n.includes("/"))) {
        if (vueRuleNames.includes(name)) {
            const { ruleName, vueOptions } = toVueRuleOptions(rules[name], name)
            if (ruleName) {
                vueRules[`vue/${ruleName}`] = vueOptions
            }
        } else if (!isOff(rules[name])) {
            unsupports[name] = rules[name]
        }
    }
    return {
        vueRules,
        unsupports,
    }
}

module.exports = function buildVueRules(config) {
    const rules = resolveExtendsRules(config)

    return toVueRules(rules)
}
