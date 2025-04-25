/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import { Header } from 'src/components/header/Header';
import { StackNavigator } from 'src/navigations/Stack';
import { TabNavigator } from 'src/navigations/Tab';
import { DrawerNavigator } from 'src/navigations/Drawer';




function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        {/* <Header/> */}
        {/* <StackNavigator/> */}
        {/* <TabNavigator/> */}
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
