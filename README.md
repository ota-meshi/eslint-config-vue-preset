# eslint-config-vue-preset

[![NPM license](https://img.shields.io/npm/l/eslint-config-vue-preset.svg)](https://www.npmjs.com/package/eslint-config-vue-preset)
[![NPM version](https://img.shields.io/npm/v/eslint-config-vue-preset.svg)](https://www.npmjs.com/package/eslint-config-vue-preset)
[![NPM downloads](https://img.shields.io/npm/dw/eslint-config-vue-preset.svg)](http://www.npmtrends.com/eslint-config-vue-preset)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-config-vue-preset.svg)](http://www.npmtrends.com/eslint-config-vue-preset)
[![NPM downloads](https://img.shields.io/npm/dy/eslint-config-vue-preset.svg)](http://www.npmtrends.com/eslint-config-vue-preset)
[![NPM downloads](https://img.shields.io/npm/dt/eslint-config-vue-preset.svg)](http://www.npmtrends.com/eslint-config-vue-preset)
[![Build Status](https://travis-ci.org/ota-meshi/eslint-config-vue-preset.svg?branch=master)](https://travis-ci.org/ota-meshi/eslint-config-vue-preset)
[![Coverage Status](https://coveralls.io/repos/github/ota-meshi/eslint-config-vue-preset/badge.svg?branch=master)](https://coveralls.io/github/ota-meshi/eslint-config-vue-preset?branch=master)

Provides various shareable configs for [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue).

## WORK IN PROGRESS

Please note that this repo is currently in alpha stage and still under active development.

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

### `vue-preset/vue/recommended-e`

It is ruleset that changed the setting of rules provided by [`"plugin:vue/recommended"`](https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead) to `"error"`.

```js
{
  "extends": "vue-preset/vue/recommended-e"
}
```

### `vue-preset/vue/strongly-recommended-e`

It is ruleset that changed the setting of rules provided by [`"plugin:vue/strongly-recommended"`](https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability) to `"error"`.

```js
{
  "extends": "vue-preset/vue/strongly-recommended-e"
}
```

<!--

### `vue-preset/standard`

The ruleset of `"standard"` for Vue template.

```js
{
  "extends": "vue-preset/standard"
}
```

### `vue-preset/airbnb`

The ruleset of `"airbnb"` for Vue template.

```js
{
  "extends": "vue-preset/airbnb"
}
```

### `vue-preset/eslint:recommended`

The ruleset of `"eslint:recommende"` for Vue template.

```js
{
  "extends": "vue-preset/eslint:recommended"
}
```

-->
