"use strict"

const path = require("path")

/**
 * Determines if a given string represents a filepath or not using the same
 * conventions as require(), meaning that the first character must be nonalphanumeric
 * and not the @ sign which is used for scoped packages to be considered a file path.
 * @param {string} filePath The string to check.
 * @returns {boolean} True if it's a filepath, false if not.
 * @private
 */
function isFilePath(filePath) {
    return path.isAbsolute(filePath) || !/[\w@]/u.test(filePath.charAt(0))
}

/**
 * Brings package name to correct format based on prefix
 * @param {string} name The name of the package.
 * @param {string} prefix Can be either "eslint-plugin", "eslint-config" or "eslint-formatter"
 * @returns {string} Normalized name of the package
 * @private
 */
function normalizePackageName(name, prefix) {
    let normalizedName = name

    if (normalizedName.charAt(0) === "@") {
        /**
         * it's a scoped package
         * package name is the prefix, or just a username
         */
        const scopedPackageShortcutRegex = new RegExp(
            `^(@[^/]+)(?:/(?:${prefix})?)?$`,
            "u",
        )
        const scopedPackageNameRegex = new RegExp(`^${prefix}(-|$)`, "u")

        if (scopedPackageShortcutRegex.test(normalizedName)) {
            normalizedName = normalizedName.replace(
                scopedPackageShortcutRegex,
                `$1/${prefix}`,
            )
        } else if (!scopedPackageNameRegex.test(normalizedName.split("/")[1])) {
            /**
             * for scoped packages, insert the prefix after the first / unless
             * the path is already @scope/eslint or @scope/eslint-xxx-yyy
             */
            normalizedName = normalizedName.replace(
                /^@([^/]+)\/(.*)$/u,
                `@$1/${prefix}-$2`,
            )
        }
    } else if (normalizedName.indexOf(`${prefix}-`) !== 0) {
        normalizedName = `${prefix}-${normalizedName}`
    }

    return normalizedName
}

/**
 * Resolves a eslint core config path
 * @param {string} name The eslint config name.
 * @returns {string} The resolved path of the config.
 * @private
 */
function getEslintCoreConfigPath(name) {
    if (name === "eslint:recommended") {
        // Add an explicit substitution for eslint:recommended to
        // conf/eslint-recommended.js.
        return require.resolve("eslint/conf/eslint-recommended")
    }

    if (name === "eslint:all") {
        // Add an explicit substitution for eslint:all to conf/eslint-all.js
        return require.resolve("eslint/conf/eslint-all")
    }

    throw new Error(`Failed to load config "${name}" to extend from.`)
}

/**
 * Load config
 * @param {string} name
 */
function loadConfig(name) {
    if (name.startsWith("eslint:")) {
        const extensionPath = getEslintCoreConfigPath(name)
        return require(extensionPath)
    } else if (name.startsWith("plugin:")) {
        const pluginName = name.slice(7, name.lastIndexOf("/"))
        const configName = name.slice(name.lastIndexOf("/") + 1)

        const packageName = normalizePackageName(pluginName, "eslint-plugin")
        return require(packageName).configs[configName]
    } else if (isFilePath(name)) {
        // If the `extends` path is relative, use the directory of the current configuration
        // file as the reference point. Otherwise, use as-is.
        // extensionPath = path.isAbsolute(name)
        //     ? name
        //     : path.join(relativeTo || path.dirname(filePath), name)
        return require(name)
    }
    const packageName = normalizePackageName(name, "eslint-config")
    const extensionPath = require.resolve(packageName)
    return require(extensionPath)
}

/**
 * Resolve extends config rules
 * @param {object} config
 */
function resolveExtendsRules(config) {
    if (!config.extends) {
        return Object.assign({}, config.rules)
    }
    const extendList = Array.isArray(config.extends)
        ? config.extends
        : [config.extends]
    const extendsRules = extendList
        .map((configName) => resolveExtendsRules(loadConfig(configName)))
        .reduce((res, conf) => Object.assign(res, conf), {})

    return Object.assign(extendsRules, config.rules)
}

module.exports = resolveExtendsRules
