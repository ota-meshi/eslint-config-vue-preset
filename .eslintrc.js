"use strict"

module.exports = {
    extends: ["plugin:@mysticatea/es2015", "plugin:@mysticatea/+node"],

    rules: {
        "no-loop-func": "off",
    },

    overrides: [
        {
            files: ["scripts/*.js"],
            rules: {
                "require-jsdoc": "off",
            },
        },
    ],
}
