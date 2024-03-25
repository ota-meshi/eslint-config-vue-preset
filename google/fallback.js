"use strict";

module.exports = {
  rules: {
    "vue/no-irregular-whitespace": 2,
    "vue/no-multi-spaces": 2,
    "vue/no-unused-vars": 2,
    "vue/array-bracket-spacing": [2, "never"],
    "vue/block-spacing": [2, "never"],
    "vue/brace-style": 2,
    "vue/camelcase": [
      2,
      {
        properties: "never",
      },
    ],
    "vue/comma-dangle": [2, "always-multiline"],
    "vue/comma-spacing": 2,
    "vue/comma-style": 2,
    "vue/func-call-spacing": 2,
    "vue/key-spacing": 2,
    "vue/keyword-spacing": 2,
    "vue/max-len": [
      2,
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignorePattern: "goog.(module|require)",
      },
    ],
    "vue/object-curly-spacing": 2,
    "vue/operator-linebreak": [2, "after"],
    "vue/quote-props": [2, "consistent"],
  },
};
