"use strict";

const fs = require("fs-extra");
const path = require("path");

function writeConfig(name) {
  const dir = path.resolve(__dirname, "../", name);
  fs.mkdirsSync(dir);
  fs.writeFileSync(
    path.resolve(dir, "fallback.js"),
    `"use strict"

module.exports = ${JSON.stringify(require(dir), null, 4)}`,
    "utf8"
  );
}

// ruleset that changed the setting of rules provided by "plugin:vue/*" to `"error"`
writeConfig("vue/recommended-e");
writeConfig("vue/strongly-recommended-e");
writeConfig("vue/vue3-recommended-e");
writeConfig("vue/vue3-strongly-recommended-e");

// ruleset for Vue template
writeConfig("standard");
writeConfig("airbnb");
writeConfig("google");
writeConfig("eslint/recommended");
writeConfig("eslint/all");
