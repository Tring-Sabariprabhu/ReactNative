import { HomeScreen } from 'screens/HomeScreen';
import { ProfileScreen } from 'screens/ProfileScreen';

export enum routeNames {
    Home = 'Home',
    Profile = 'Profile',
}

export const allRoutes = [
    {
        name: routeNames.Home,
        component: HomeScreen,
    },
    {
        name: routeNames.Profile,
        component: ProfileScreen,
    },
];
