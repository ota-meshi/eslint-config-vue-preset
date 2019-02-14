"use strict"

module.exports = {
    rules: {
        "vue/arrow-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ],
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
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "never",
            },
        ],
        "vue/eqeqeq": [
            "error",
            "always",
            {
                null: "ignore",
            },
        ],
        "vue/key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        "vue/no-multi-spaces": "error",
        "vue/no-unused-vars": "error",
        "vue/object-curly-spacing": ["error", "always"],
        "vue/space-infix-ops": "error",
        "vue/space-unary-ops": [
            "error",
            {
                words: true,
                nonwords: false,
            },
        ],
    },
}
