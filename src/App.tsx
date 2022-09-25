import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Button} from './components/atoms/button/button';
import {View as RnuiView} from 'react-native-ui-lib';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('Patrinho');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const updateName = (name: string) => {
    const stateHandler: {[key: string]: string} = {
      patrinho: 'Betinho',
      betinho: 'Patrinho',
    };

    setName(stateHandler[name.toLowerCase()]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <RnuiView flex left>
            <Button onPress={() => updateName(name)} label="Sign Up" />
          </RnuiView>
          <Text style={{color: 'white'}}>{name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
