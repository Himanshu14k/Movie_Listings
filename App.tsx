import React, {useEffect} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import Routes from './src/navigations/Routes';
import FlashMessage from 'react-native-flash-message';

const App = (): JSX.Element => {

  return (
    <View style={{flex: 1}}>
      <Routes />
      
      <FlashMessage
        statusBarHeight={StatusBar.currentHeight}
        position="top"
        titleStyle={{
          fontSize: 18,
          color: '#fff',
          textAlign: 'left',
          marginTop: Platform.OS === 'android' ? 0 : 0,
        }}
        textStyle={{
          fontSize: 18,
          color: '#fff',
          textAlign: 'left',
        }}
      />
    </View>
  );
};

export default App;
