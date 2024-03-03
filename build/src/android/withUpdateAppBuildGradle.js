"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withUpdateAppBuildGradle = (config) => {
    return (0, config_plugins_1.withAppBuildGradle)(config, (config) => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = setBuildScript(config.modResults.contents);
        }
        else {
            throw new Error('Cannot modify app/build.gradle.kts');
        }
        return config;
    });
};
const setBuildScript = (buildGradle) => {
    let newBuildGradle = buildGradle;
    const newEntry = `dependencies {\n\t\timplementation project(':react-native-contacts')`;
    newBuildGradle = newBuildGradle.replace(/dependencies\s?{/, newEntry);
    return newBuildGradle;
};
exports.default = withUpdateAppBuildGradle;
//# sourceMappingURL=withUpdateAppBuildGradle.js.map