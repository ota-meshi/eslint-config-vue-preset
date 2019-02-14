"use strict"

module.exports = {
    rules: {
        "vue/eqeqeq": [
            "error",
            "always",
            {
                null: "ignore",
            },
        ],
        "vue/no-multi-spaces": "error",
        "vue/array-bracket-spacing": ["error", "never"],
        "vue/block-spacing": ["error", "always"],
        "vue/brace-style": [
            "error",
            "1tbs",
            {
                allowSingleLine: true,
            },
        ],
        "vue/camelcase": [
            "error",
            {
                properties: "never",
            },
        ],
        "vue/comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "always-multiline",
            },
        ],
        "vue/key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        "vue/no-restricted-syntax": [
            "error",
            {
                selector: "ForInStatement",
                message:
                    "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
            },
            {
                selector: "ForOfStatement",
                message:
                    "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
            },
            {
                selector: "LabeledStatement",
                message:
                    "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
            },
            {
                selector: "WithStatement",
                message:
                    "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
            },
        ],
        "vue/object-curly-spacing": ["error", "always"],
        "vue/space-infix-ops": "error",
        "vue/space-unary-ops": [
            "error",
            {
                words: true,
                nonwords: false,
                overrides: {},
            },
        ],
        "vue/no-unused-vars": "error",
        "vue/arrow-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ],
    },
}
