"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withUpdateSettingsGradle = (config) => {
    return (0, config_plugins_1.withSettingsGradle)(config, (config) => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = setSettingsGradle(config.modResults.contents);
        }
        else {
            throw new Error('Cannot modify settings.gradle.kts');
        }
        return config;
    });
};
const setSettingsGradle = (settingsGradle) => {
    let newSettingsGradle = settingsGradle;
    newSettingsGradle += `
include ':react-native-contacts'
project(':react-native-contacts').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-contacts/android')
`;
    return newSettingsGradle;
};
exports.default = withUpdateSettingsGradle;
//# sourceMappingURL=withUpdateSettingsGradle.js.map