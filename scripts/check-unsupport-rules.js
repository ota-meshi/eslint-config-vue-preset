"use strict"

const fs = require("fs-extra")
const path = require("path")
const buildVueRules = require("../lib/build-vue-rules")
const eslintRules = new (require("eslint")).Linter().rules

const dontSupportRules = [
    // `html-indent` and `script-indent`
    "indent",

    // Since it conflicts with HTML, quoting can not be forced.
    "quotes",

    // It is not necessary for the Vue template.
    "strict",
    "unicode-bom",
    "eol-last",
    "no-trailing-spaces",
    "linebreak-style",
    "no-multiple-empty-lines",
]

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
    const result = Object.assign({}, rules)
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

function checkConfig(moduleName, name) {
    const unsupports = buildVueRules(require(moduleName)).unsupports
    for (const ruleName of dontSupportRules) {
        delete unsupports[ruleName]
    }
    const dir = path.resolve(__dirname, "../", name)
    fs.mkdirsSync(dir)
    fs.writeFileSync(
        path.resolve(dir, "unsupports.md"),
        `# ESLint rules in \`"${name}"\` unsupported by vue

## All rules

\`\`\`json
${JSON.stringify(unsupports, null, 4)}
\`\`\`

## fixable

\`\`\`json
${JSON.stringify(fixableRules(unsupports), null, 4)}
\`\`\`

## layout

\`\`\`json
${JSON.stringify(layoutRules(unsupports), null, 4)}
\`\`\`

## whitespace

\`\`\`json
${JSON.stringify(whitespaceRules(unsupports), null, 4)}
\`\`\`
`,
        "utf8"
    )
}

checkConfig("eslint/conf/eslint-all", "eslint:all")
checkConfig("eslint/conf/eslint-recommended", "eslint:recommended")
checkConfig("eslint-config-airbnb", "airbnb")
checkConfig("eslint-config-standard", "standard")
checkConfig("eslint-config-google", "google")
checkConfig("eslint-config-vue", "config-vue")
