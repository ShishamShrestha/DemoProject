/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Rootstack from './src/components/Rootstack';
import routes from './src/Navigation/routes';
import Login from './src/screens/Login';

 

function App(): React.JSX.Element {
 const navigation= useNavigation();
 const onPress=()=>{
  navigation.navigate(Rootstack.);
}
  return (
    <View>
      <Button title='Click me' onPress={()=>navigation.navigate(Login)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
