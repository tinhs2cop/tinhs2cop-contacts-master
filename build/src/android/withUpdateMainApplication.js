"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withUpdateMainApplication = (config) => {
    return (0, config_plugins_1.withMainApplication)(config, (config) => {
        config.modResults.contents = setMainApplication(config.modResults.contents);
        return config;
    });
};
const setMainApplication = (mainApplication) => {
    let newMainApplication = mainApplication;
    newMainApplication = newMainApplication.replace('import com.facebook.react.ReactApplication', `import com.facebook.react.ReactApplication
import com.rt2zz.reactnativecontacts.ReactNativeContacts`);
    newMainApplication = newMainApplication.replace('return PackageList(this).packages', `packages.add(new ReactNativeContacts()),
    return PackageList(this).packages`);
    return newMainApplication;
};
exports.default = withUpdateMainApplication;
//# sourceMappingURL=withUpdateMainApplication.js.map