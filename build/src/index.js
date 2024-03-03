"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withUpdateAppBuildGradle_1 = __importDefault(require("./android/withUpdateAppBuildGradle"));
const withUpdateSettingsGradle_1 = __importDefault(require("./android/withUpdateSettingsGradle"));
const withUpdateMainApplication_1 = __importDefault(require("./android/withUpdateMainApplication"));
const withRNContacts = (config) => {
    return (0, config_plugins_1.withPlugins)(config, [
        withUpdateSettingsGradle_1.default,
        withUpdateAppBuildGradle_1.default,
        withUpdateMainApplication_1.default,
    ]);
};
exports.default = withRNContacts;
//# sourceMappingURL=index.js.map