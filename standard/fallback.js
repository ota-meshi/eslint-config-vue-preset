"use strict";

module.exports = {
  rules: {
    "vue/object-shorthand": ["warn", "properties"],
    "vue/array-bracket-spacing": ["error", "never"],
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
        allow: ["^UNSAFE_"],
        properties: "never",
        ignoreGlobals: true,
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
    "vue/comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "vue/comma-style": ["error", "last"],
    "vue/dot-location": ["error", "property"],
    "vue/dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
    "vue/eqeqeq": [
      "error",
      "always",
      {
        null: "ignore",
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
      },
    ],
    "vue/multiline-ternary": ["error", "always-multiline"],
    "vue/no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "vue/no-empty-pattern": "error",
    "vue/no-extra-parens": ["error", "functions"],
    "vue/no-irregular-whitespace": "error",
    "vue/no-loss-of-precision": "error",
    "vue/no-multi-spaces": "error",
    "vue/no-sparse-arrays": "error",
    "vue/no-unused-vars": "error",
    "vue/object-curly-newline": [
      "error",
      {
        multiline: true,
        consistent: true,
      },
    ],
    "vue/object-curly-spacing": ["error", "always"],
    "vue/object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    "vue/operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
          "|>": "before",
        },
      },
    ],
    "vue/quote-props": ["error", "as-needed"],
    "vue/space-in-parens": ["error", "never"],
    "vue/space-infix-ops": "error",
    "vue/space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
      },
    ],
    "vue/template-curly-spacing": ["error", "never"],
  },
};
