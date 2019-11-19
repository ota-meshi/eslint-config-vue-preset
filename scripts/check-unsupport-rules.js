"use strict"

const fs = require("fs-extra")
const path = require("path")
const buildVueRules = require("../lib/build-vue-rules")
const eslintRules = new (require("eslint").Linter)().getRules()

const DONT_SUPPORT_RULES = {
    // `html-indent` and `script-indent`
    indent: "Use `html-indent` and` script-indent` instead.",

    // Since it conflicts with HTML, quoting can not be forced.
    quotes: "Since it conflicts with HTML, quoting can not be forced.",

    // This rule is not necessary for Vue templates.
    strict: "This rule is not necessary for Vue templates.",
    "unicode-bom": "This rule is not necessary for Vue templates.",
    "eol-last": "This rule is not necessary for Vue templates.",
    "jsx-quotes": "This rule is not necessary for Vue templates.",

    // This rule already applies to the Vue template.
    "no-trailing-spaces": "This rule already applies to the Vue template.",
    "linebreak-style": "This rule already applies to the Vue template.",
    "no-multiple-empty-lines": "This rule already applies to the Vue template.",
    "no-irregular-whitespace": "This rule already applies to the Vue template.",
    "no-mixed-spaces-and-tabs":
        "This rule already applies to the Vue template.",
}

const WIP = [
    // WIP
    // "comma-spacing",
    // "dot-location",
    // "keyword-spacing",
    // "no-empty-pattern",
]

// cannot wrap
// no-extra-boolean-cast
// no-extra-parens

function rulesToMd(rules) {
    return Object.keys(rules)
        .map(rule => {
            if (DONT_SUPPORT_RULES[rule]) {
                return `- [${rule}](https://eslint.org/docs/rules/${rule}) ... ${DONT_SUPPORT_RULES[rule]}`
            }
            return `- [${
                WIP.includes(rule) ? "X" : " "
            }] [${rule}](https://eslint.org/docs/rules/${rule})`
        })
        .join("\n")
}

function rulesToJson(rules) {
    const result = Object.assign({}, rules)
    for (const name of Object.keys(result)) {
        if (DONT_SUPPORT_RULES[name] || WIP.includes(name)) {
            delete result[name]
        }
    }

    return `\`\`\`json
${JSON.stringify(result, null, 4)}
\`\`\``
}

function fixableRules(rules) {
    const result = Object.assign({}, rules)
    for (const name of Object.keys(result)) {
        if (eslintRules.get(name).meta.fixable == null) {
            delete result[name]
        }
    }
    return result
}

function whitespaceRules(rules) {
    const result = fixableRules(rules)
    for (const name of Object.keys(result)) {
        if (eslintRules.get(name).meta.fixable !== "whitespace") {
            delete result[name]
        }
    }
    return result
}

function layoutRules(rules) {
    const result = fixableRules(rules)
    for (const name of Object.keys(result)) {
        if (eslintRules.get(name).meta.type !== "layout") {
            delete result[name]
        }
    }
    return result
}

function highPriorityRules(rules) {
    const ignores = [
        // cond
        "no-cond-assign", // e.g. NG: `if (a = b) {`
        "no-constant-condition", // e.g. NG: `if (true) {`
        // for
        "for-direction", // e.g. NG: `for (var i = 0; i < 10; i--) {`
        // class
        "constructor-super",
        "no-class-assign",
        "no-dupe-class-members",
        "no-this-before-super",
        // function declaration
        "no-func-assign",
        // generator
        "require-yield",
        // getter setter
        "getter-return",
        "accessor-pairs",
        // switch case
        "no-case-declarations",
        "no-duplicate-case",
        "no-fallthrough",
        // variables
        "no-const-assign",
        "no-delete-var",
        "no-redeclare",
        // assign
        "no-self-assign",
        // catch, finally
        "no-ex-assign",
        "no-unsafe-finally",
        // label
        "no-unused-labels",
        // can not be used with Vue template
        "no-console",
        "no-debugger", // ?
        "no-global-assign",
        "no-undef",
        // priority low
        "no-new-symbol",
        "no-obj-calls",
        "no-octal",
        // is rarely used
        "no-compare-neg-zero", // e.g. NG: `if (x === -0) {`
    ]
    const result = Object.assign({}, rules)
    for (const name of Object.keys(result)) {
        if (ignores.includes(name)) {
            delete result[name]
        }
    }
    return result
}

function checkConfig(moduleName, name) {
    const unsupports = buildVueRules(require(moduleName)).unsupports
    const dir = path.resolve(__dirname, "../", name)
    fs.mkdirsSync(dir)
    fs.writeFileSync(
        path.resolve(dir, "unsupports.md"),
        `# ESLint rules in \`"${name}"\` unsupported by vue

## All rules

${rulesToMd(unsupports)}

## fixable

${rulesToJson(fixableRules(unsupports))}

## layout

${rulesToJson(layoutRules(unsupports))}

## whitespace

${rulesToJson(whitespaceRules(unsupports))}

## The rules I want to support.

${rulesToJson(highPriorityRules(unsupports))}

`,
        "utf8"
    )
}

checkConfig("eslint/conf/eslint-all", "eslint:all")
checkConfig("eslint/conf/eslint-recommended", "eslint:recommended")
checkConfig("eslint-config-airbnb", "airbnb")
checkConfig("eslint-config-standard", "standard")
checkConfig("eslint-config-google", "google")
checkConfig("eslint-plugin-vue-libs/config", "plugin:vue-libs/recommended")
