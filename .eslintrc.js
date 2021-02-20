"use strict"

module.exports = {
    extends: [
        "plugin:@ota-meshi/recommended",
        "plugin:@ota-meshi/+node",
        "plugin:@ota-meshi/+json",
        "plugin:@ota-meshi/+prettier",
    ],

    rules: {
        "no-loop-func": "off",
        "require-jsdoc": "off",
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
