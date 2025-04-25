
import { createDrawerNavigator } from '@react-navigation/drawer';
import { allRoutes, routeNames } from 'routes/routes';


export const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName={routeNames?.Home}>
            {
                allRoutes?.map((screen, index) => (
                    <Drawer.Screen name={screen?.name} component={screen?.component} key={index} />
                ))
            }
        </Drawer.Navigator>
    );
};

