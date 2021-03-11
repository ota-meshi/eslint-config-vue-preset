"use strict"

const assert = require("assert")
const resolveExtendsRules = require("../../lib/resolve-extends-rules")

describe("resolve-extends-rules", () => {
    describe("eslint:", () => {
        it("should be able to load 1", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "eslint:recommended" }),
                require("eslint/conf/eslint-recommended").rules,
            )
        })
        it("should be able to load 2", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "eslint:all" }),
                require("eslint/conf/eslint-all").rules,
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

        it("should be able to load 2", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({ extends: "plugin:@mysticatea/es2015" }),
                Object.assign(
                    {},
                    require("@mysticatea/eslint-plugin/lib/configs/_base")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-ts")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-vue")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-mocha")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-special")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_base")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-2015")
                        .rules,
                ),
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

        it("should be able to load 2", () => {
            assert.deepStrictEqual(
                resolveExtendsRules({
                    extends: "plugin:@mysticatea/eslint-plugin/es2015",
                }),

                Object.assign(
                    {},
                    require("@mysticatea/eslint-plugin/lib/configs/_base")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-ts")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-vue")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-mocha")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-special")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_base")
                        .rules,
                    require("@mysticatea/eslint-plugin/lib/configs/_override-2015")
                        .rules,
                ),
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
