import { AppRegistry, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './src/utils/ignoreWarnings';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const MainApp = () => {
  return (
      <App />
  );
};
AppRegistry.registerComponent(appName, () => MainApp);
