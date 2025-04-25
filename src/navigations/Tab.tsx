import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { allRoutes } from 'routes/routes';

export const TabNavigator = ()=>{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            {
                allRoutes?.map((screen, index)=>(
                    <Tab.Screen name={screen?.name} component={screen?.component} key={index} />
                ))
            }
        </Tab.Navigator>
    );
};
