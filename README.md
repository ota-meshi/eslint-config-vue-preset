# eslint-config-vue-preset

[![NPM license](https://img.shields.io/npm/l/eslint-config-vue-preset.svg)](https://www.npmjs.com/package/eslint-config-vue-preset)
[![NPM version](https://img.shields.io/npm/v/eslint-config-vue-preset.svg)](https://www.npmjs.com/package/eslint-config-vue-preset)
[![NPM downloads](https://img.shields.io/npm/dw/eslint-config-vue-preset.svg)](http://www.npmtrends.com/eslint-config-vue-preset)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-config-vue-preset.svg)](http://www.npmtrends.com/eslint-config-vue-preset)
[![NPM downloads](https://img.shields.io/npm/dy/eslint-config-vue-preset.svg)](http://www.npmtrends.com/eslint-config-vue-preset)
[![NPM downloads](https://img.shields.io/npm/dt/eslint-config-vue-preset.svg)](http://www.npmtrends.com/eslint-config-vue-preset)
[![Build Status](https://travis-ci.org/ota-meshi/eslint-config-vue-preset.svg?branch=master)](https://travis-ci.org/ota-meshi/eslint-config-vue-preset)
[![Coverage Status](https://coveralls.io/repos/github/ota-meshi/eslint-config-vue-preset/badge.svg?branch=master)](https://coveralls.io/github/ota-meshi/eslint-config-vue-preset?branch=master)

Provides various ESLint Shareable Configs for [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue).

## :cd: Installation

```bash
npm install --save-dev eslint eslint-plugin-vue eslint-config-vue-preset
```

## :book: Usage

### Configuration

Use `.eslintrc.*` file to configure rules. See also: [https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring).

Example **.eslintrc.js**:

```js
module.exports = {
  extends: [
    // Add ruleset provided by eslint-plugin-vue.
    'plugin:vue/recommended',

    // Add ruleset provided by eslint-config-vue-preset.
    'vue-preset/standard',
  ],
  // ...
}
```

## :wrench: Preset Configs

### `vue-preset/vue/vue3-recommended-e`

It is ruleset that changed the setting of rules provided by [`"plugin:vue/vue3-recommended"`](https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-3-x) to `"error"`.

```diff
{
  "extends": [
    "plugin:vue/base",
+    "vue-preset/vue/vue3-recommended-e"
  ]
}
```

### `vue-preset/vue/vue3-strongly-recommended-e`

It is ruleset that changed the setting of rules provided by [`"plugin:vue/vue3-strongly-recommended"`](https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability-for-vue-js-3-x) to `"error"`.

```diff
{
  "extends": [
    "plugin:vue/base",
+    "vue-preset/vue/vue3-strongly-recommended-e"
  ]
}
```

### `vue-preset/vue/recommended-e`

It is ruleset that changed the setting of rules provided by [`"plugin:vue/recommended"`](https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-2-x) to `"error"`.

```diff
{
  "extends": [
    "plugin:vue/base",
+    "vue-preset/vue/recommended-e"
  ]
}
```

### `vue-preset/vue/strongly-recommended-e`

It is ruleset that changed the setting of rules provided by [`"plugin:vue/strongly-recommended"`](https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability-for-vue-js-2-x) to `"error"`.

```diff
{
  "extends": [
    "plugin:vue/base",
+    "vue-preset/vue/strongly-recommended-e"
  ]
}
```

### `vue-preset/airbnb`

The ruleset of [`"airbnb"`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for Vue template.

```diff
{
  "extends": [
    // `eslint-config-airbnb` ruleset
    "airbnb",
    // Apply the same rules to expressions in templates.
+   "vue-preset/airbnb"
  ]
}
```

### `vue-preset/standard`

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

The ruleset of [`"standard"`](https://github.com/standard/eslint-config-standard) for Vue template.

```diff
{
  "extends": [
    // `eslint-config-standard` ruleset
    "standard",
    // Apply the same rules to expressions in templates.
+   "vue-preset/standard"
  ]
}
```

### `vue-preset/google`

The ruleset of [`"google"`](https://github.com/google/eslint-config-google) for Vue template.

```diff
{
  "extends": [
    // `eslint-config-google` ruleset
    "google",
    // Apply the same rules to expressions in templates.
+   "vue-preset/google"
  ]
}
```

### `vue-preset/eslint/recommended`

The ruleset of [`"eslint:recommended"`](https://eslint.org/docs/user-guide/configuring#using-eslintrecommended) for Vue template.

```diff
{
  "extends": [
    // eslint recommended ruleset
    "eslint:recommended",
    // Apply the same rules to expressions in templates.
+   "vue-preset/eslint/recommended"
  ]
}
```

## License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
