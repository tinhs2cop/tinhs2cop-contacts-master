import { ConfigPlugin, withMainApplication } from '@expo/config-plugins';

const withUpdateMainApplication: ConfigPlugin = (config) => {
  return withMainApplication(config, (config) => {
    config.modResults.contents = setMainApplication(config.modResults.contents);
    return config;
  });
};

const setMainApplication = (mainApplication: string) => {
  let newMainApplication = mainApplication;
  newMainApplication = newMainApplication.replace(
    'import com.facebook.react.ReactApplication',
    `import com.facebook.react.ReactApplication
import com.rt2zz.reactnativecontacts.ReactNativeContacts`
  );
  newMainApplication = newMainApplication.replace(
    'return PackageList(this).packages',
    `packages.add(new ReactNativeContacts()),
    return PackageList(this).packages`
  );
  return newMainApplication;
};

export default withUpdateMainApplication;
