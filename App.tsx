/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  ScrollView,
  StatusBar,

  Text,

  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from './src/assets/global';
import { HomeScreen } from './src/components/screens/HomeScreen';
import { ProfileScreen } from './src/components/screens/ProfileScreen';
import { allRoutes } from './src/routes/routes';
import { Header } from './src/components/header/Header';
import { StackNavigator } from './src/navigations/Stack';
import { TabNavigator } from './src/navigations/Tab';


function App(): React.JSX.Element {


  return (
    <SafeAreaProvider>
      <NavigationContainer >
        {/* <Header />
        <StackNavigator /> */}
        <TabNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
