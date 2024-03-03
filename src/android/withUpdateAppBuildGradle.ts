import { ConfigPlugin, withAppBuildGradle } from '@expo/config-plugins';

const withUpdateAppBuildGradle: ConfigPlugin = (config) => {
  return withAppBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = setBuildScript(config.modResults.contents);
    } else {
      throw new Error('Cannot modify app/build.gradle.kts');
    }
    return config;
  });
};

const setBuildScript = (buildGradle: string) => {
  let newBuildGradle = buildGradle;
  const newEntry = `dependencies {\n\t\timplementation project(':react-native-contacts')`;
  newBuildGradle = newBuildGradle.replace(/dependencies\s?{/, newEntry);
  return newBuildGradle;
};

export default withUpdateAppBuildGradle;
