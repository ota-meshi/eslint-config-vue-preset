"use strict";

const fs = require("fs-extra");
const path = require("path");
const buildVueRules = require("../lib/build-vue-rules");
const eslintRules = new (require("eslint").Linter)().getRules();

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
  "no-import-assign": "This rule is not necessary for Vue templates.",
  "no-with": "This rule is not necessary for Vue templates.",
  "lines-around-directive": "This rule is not necessary for Vue templates.",

  // This rule already applies to the Vue template.
  "no-trailing-spaces": "This rule already applies to the Vue template.",
  "linebreak-style": "This rule already applies to the Vue template.",
  "no-multiple-empty-lines": "This rule already applies to the Vue template.",
  "no-irregular-whitespace": "This rule already applies to the Vue template.",
  "no-mixed-spaces-and-tabs": "This rule already applies to the Vue template.",
};

const WIP = [
  // WIP
  // "comma-spacing",
  // "dot-location",
  // "keyword-spacing",
  // "no-empty-pattern",
];

// cannot wrap
// no-extra-boolean-cast
// no-extra-parens

function rulesToMd(rules) {
  return Object.keys(rules)
    .map((rule) => {
      if (DONT_SUPPORT_RULES[rule]) {
        return `- [${rule}](https://eslint.org/docs/rules/${rule}) ... ${DONT_SUPPORT_RULES[rule]}`;
      }
      return `- [${
        WIP.includes(rule) ? "X" : " "
      }] [${rule}](https://eslint.org/docs/rules/${rule})`;
    })
    .join("\n");
}

function rulesToJson(rules) {
  const result = Object.assign({}, rules);
  for (const name of Object.keys(result)) {
    if (DONT_SUPPORT_RULES[name] || WIP.includes(name)) {
      delete result[name];
    }
  }

  return `\`\`\`json
${JSON.stringify(result, null, 4)}
\`\`\``;
}

function fixableRules(rules) {
  const result = Object.assign({}, rules);
  for (const name of Object.keys(result)) {
    if (eslintRules.get(name).meta.fixable == null) {
      delete result[name];
    }
  }
  return result;
}

function whitespaceRules(rules) {
  const result = fixableRules(rules);
  for (const name of Object.keys(result)) {
    if (eslintRules.get(name).meta.fixable !== "whitespace") {
      delete result[name];
    }
  }
  return result;
}

function layoutRules(rules) {
  const result = fixableRules(rules);
  for (const name of Object.keys(result)) {
    if (eslintRules.get(name).meta.type !== "layout") {
      delete result[name];
    }
  }
  return result;
}

function highPriorityRules(rules) {
  const ignores = [
    // conditions
    "no-cond-assign", // e.g. NG: `if (a = b) {`
    "no-constant-condition", // e.g. NG: `if (true) {`
    "no-dupe-else-if",
    "use-isnan",
    "valid-typeof",
    "yoda",
    // for
    "for-direction", // e.g. NG: `for (var i = 0; i < 10; i--) {`
    // function
    "no-func-assign",
    "no-dupe-args",
    "no-caller",
    "space-before-function-paren",
    "function-paren-newline",
    // generator
    "require-yield",
    "generator-star-spacing",
    "yield-star-spacing",
    // with function
    "no-async-promise-executor",
    "prefer-promise-reject-errors",
    // class
    "constructor-super",
    "no-class-assign",
    "no-dupe-class-members",
    "no-this-before-super",
    "lines-between-class-members",
    "no-useless-constructor",
    // getter setter
    "getter-return",
    "no-setter-return",
    "accessor-pairs",
    // switch case
    "no-case-declarations",
    "no-duplicate-case",
    "no-fallthrough",
    "default-case-last",
    "switch-colon-spacing",
    // variables
    "no-const-assign",
    "no-delete-var",
    "no-redeclare",
    "no-var",
    "one-var",
    "prefer-const",
    // catch, finally
    "no-ex-assign",
    "no-unsafe-finally",
    "no-useless-catch",
    // assign
    "no-self-assign",
    "prefer-destructuring",
    // label
    "no-unused-labels",
    "no-labels",
    // regexp
    "no-invalid-regexp",
    "no-control-regex",
    "no-useless-backreference",
    "no-empty-character-class",
    "no-misleading-character-class",
    "no-regex-spaces",
    "prefer-regex-literals",
    // new
    "new-cap",
    "new-parens",
    "no-new-symbol",
    "no-new",
    "no-new-func",
    "no-new-object",
    "no-new-wrappers",
    // semi
    "no-extra-semi",
    "semi",
    "semi-spacing",
    "semi-style",
    // block
    "curly",
    "no-empty",
    "no-lone-blocks",
    "padded-blocks",
    "space-before-blocks",
    "nonblock-statement-body-position",
    // with declarations
    "no-inner-declarations",
    "no-use-before-define",
    "no-shadow-restricted-names",
    // with statements
    "no-extra-boolean-cast",
    "no-unreachable",
    "no-throw-literal",
    // escapes
    "no-nonoctal-decimal-escape",
    "no-octal",
    "no-useless-escape",
    "no-octal-escape",
    // multiline
    "multiline-ternary",
    "no-unexpected-multiline",
    // can not be used with Vue template
    "no-console",
    "no-debugger", // ?
    "no-global-assign",
    "no-undef",
    "no-obj-calls",
    // priority low
    "no-array-constructor",
    "no-prototype-builtins",
    "no-unsafe-negation",
    "no-unsafe-optional-chaining",
    "no-proto",
    "symbol-description",
    // is rarely used
    "no-compare-neg-zero", // e.g. NG: `if (x === -0) {`
  ];
  const result = Object.assign({}, rules);
  for (const name of Object.keys(result)) {
    if (ignores.includes(name) || DONT_SUPPORT_RULES[name]) {
      delete result[name];
    }
  }
  return result;
}

function checkConfig(moduleName, name) {
  const unsupported = buildVueRules(require(moduleName)).unsupported;
  const dir = path.resolve(__dirname, "../", name);
  fs.mkdirsSync(dir);
  fs.writeFileSync(
    path.resolve(dir, "unsupported.md"),
    `# ESLint rules in \`"${name}"\` unsupported by vue

## All rules


${rulesToMd(unsupported)}

## fixable

${rulesToJson(fixableRules(unsupported))}

## layout

${rulesToJson(layoutRules(unsupported))}

## whitespace

${rulesToJson(whitespaceRules(unsupported))}

## The rules I want to support.

${rulesToMd(highPriorityRules(unsupported))}

- layout

${rulesToMd(layoutRules(highPriorityRules(unsupported)))}

- fixable

${rulesToMd(fixableRules(highPriorityRules(unsupported)))}

`,
    "utf8"
  );
}

checkConfig("../lib/eslint-all.js", "eslint/all");
checkConfig("../lib/eslint-recommended.js", "eslint/recommended");
checkConfig("eslint-config-airbnb", "airbnb");
checkConfig("eslint-config-standard", "standard");
checkConfig("eslint-config-google", "google");
checkConfig("eslint-plugin-vue-libs/config", "plugin/vue-libs/recommended");
