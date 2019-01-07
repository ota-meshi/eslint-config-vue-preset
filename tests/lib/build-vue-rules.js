"use strict"

const assert = require("assert")
const path = require("path")
const glob = require("glob")

describe("build-vue-rules", () => {
    const root = path.resolve(__dirname, "../../")
    const files = glob.sync("**/fallback.js", {
        root,
    })

    for (const file of files) {
        describe(file, () => {
            const filePath = path.join(root, file)
            it("should be match", () => {
                assert.deepStrictEqual(
                    require(filePath),
                    require(path.dirname(filePath))
                )
            })
        })
    }
})
