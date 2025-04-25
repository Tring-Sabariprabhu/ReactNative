import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { allRoutes, routeNames } from '../routes/routes';

export const StackNavigator = ()=>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={routeNames.HOME} screenOptions={{animation: 'fade_from_bottom', headerShown: false, statusBarStyle: 'dark'}}>
        {
          allRoutes?.map((screen, index)=>(
            <Stack.Screen name={screen?.name} component={screen?.component} key={index} />
          ))
        }
      </Stack.Navigator>
    );
};
