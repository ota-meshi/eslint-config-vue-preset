"use strict"

const assert = require("assert")
const resolveExtendsRules = require("../../lib/resolve-extends-rules")

describe("resolve-extends-rules", () => {
    describe("eslint:", () => {
        it("should be able to load 1", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "eslint:recommended" }),
                require("../../lib/eslint-recommended").rules,
            )
        })
        it("should be able to load 2", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "eslint:all" }),
                require("../../lib/eslint-all").rules,
            )
        })
    })
    describe("plugin:", () => {
        it("should be able to load 1", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "plugin:vue/base" }),
                require("eslint-plugin-vue").configs.base.rules,
            )
        })
    })
    describe("config", () => {
        it("should be able to load 1", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "standard" }),
                require("eslint-config-standard").rules,
            )
        })

        // it("should be able to load 2", () => {
        //     assert.deepStrictEqual(
        //         resolveExtendsRules({ extends: "prettier/vue" }),
        //         require("eslint-config-prettier/vue").rules,
        //     )
        // })

        it("should be able to load 3", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "@vue/standard" }),
                require(require("@vue/eslint-config-standard").extends[0])
                    .rules,
            )
        })
    })
    describe("module", () => {
        it("should be able to load 1", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "eslint-config-standard" }),
                require("eslint-config-standard").rules,
            )
        })

        it("should be able to load 3", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "@vue/eslint-config-standard" }),
                require(require("@vue/eslint-config-standard").extends[0])
                    .rules,
            )
        })
    })
})
