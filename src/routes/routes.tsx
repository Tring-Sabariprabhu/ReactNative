import { HomeScreen } from '../components/screens/HomeScreen';
import { ProfileScreen } from '../components/screens/ProfileScreen';

export enum routeNames {
        HOME = 'Home',
        Profile = 'Profile'
}
export const allRoutes = [
    {
        name: routeNames.HOME,
        component: HomeScreen,
    },
    {
        name: routeNames.Profile,
        component: ProfileScreen,
    },
];
