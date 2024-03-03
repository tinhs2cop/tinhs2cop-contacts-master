import { ConfigPlugin, withPlugins } from '@expo/config-plugins';
import withUpdateAppBuildGradle from './android/withUpdateAppBuildGradle';
import withUpdateSettingsGradle from './android/withUpdateSettingsGradle';
import withUpdateMainApplication from './android/withUpdateMainApplication';

const withRNContacts: ConfigPlugin = (config) => {
  return withPlugins(config, [
    withUpdateSettingsGradle,
    withUpdateAppBuildGradle,
    withUpdateMainApplication,
  ]);
};

export default withRNContacts;
