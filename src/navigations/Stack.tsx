import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { allRoutes } from 'routes/routes';
import { routeNames } from 'routes/routes';

export const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={routeNames.Home} screenOptions={{ animation: 'fade_from_bottom', statusBarBackgroundColor: 'black', headerShown: false, statusBarStyle: 'dark' }}>
            {
                allRoutes?.map((screen, index) => (
                    <Stack.Screen name={screen?.name} component={screen?.component} key={index} />
                ))
            }
        </Stack.Navigator>
    );
};
