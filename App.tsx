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
import { Header } from './src/components/screens/header/Header';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const safePadding = '5%';
  const Stack = createNativeStackNavigator();

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    paddingTop: safePadding,
    paddingBottom: safePadding,
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Header/>
        <Stack.Navigator initialRouteName="Home" screenOptions={{animation: 'fade_from_bottom', headerShown: false, statusBarStyle: "dark"}}>
          {
            allRoutes?.map((screen, index)=>(
              <Stack.Screen name={screen?.name} component={screen?.component} key={index} />
            ))
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
