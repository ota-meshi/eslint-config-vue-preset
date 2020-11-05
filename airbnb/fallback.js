"use strict"

module.exports = {
    rules: {
        "vue/dot-notation": [
            "error",
            {
                allowKeywords: true,
            },
        ],
        "vue/dot-location": ["error", "property"],
        "vue/eqeqeq": [
            "error",
            "always",
            {
                null: "ignore",
            },
        ],
        "vue/no-empty-pattern": "error",
        "vue/no-multi-spaces": "error",
        "vue/no-useless-concat": "error",
        "vue/no-irregular-whitespace": "error",
        "vue/no-sparse-arrays": "error",
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
                ignoreDestructuring: false,
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
        "vue/comma-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "vue/comma-style": [
            "error",
            "last",
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],
        "vue/func-call-spacing": ["error", "never"],
        "vue/key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        "vue/keyword-spacing": [
            "error",
            {
                before: true,
                after: true,
                overrides: {
                    return: {
                        after: true,
                    },
                    throw: {
                        after: true,
                    },
                    case: {
                        after: true,
                    },
                },
            },
        ],
        "vue/max-len": [
            "error",
            100,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
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
        "vue/object-curly-newline": [
            "error",
            {
                ObjectExpression: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ObjectPattern: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ImportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ExportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
            },
        ],
        "vue/object-property-newline": [
            "error",
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],
        "vue/operator-linebreak": [
            "error",
            "before",
            {
                overrides: {
                    "=": "none",
                },
            },
        ],
        "vue/space-in-parens": ["error", "never"],
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
        "vue/prefer-template": "error",
        "vue/template-curly-spacing": "error",
    },
}
