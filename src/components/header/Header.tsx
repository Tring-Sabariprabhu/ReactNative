import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from 'assets/global';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { routeNames } from 'routes/routes';

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
  };
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;



export const Header = () => {
    const navigation = useNavigation<NavigationProp>();
    const [activeTab, setActiveTab] = useState(routeNames?.Home);
    return (
        <View style={styles?.tabsContainer}>
            <TouchableOpacity onPress={() => {
                    navigation?.navigate(routeNames?.Home);
                    setActiveTab(routeNames?.Home);
                    }}>
                <Text style={activeTab === routeNames?.Home ? styles?.activeTabItem : styles?.tabItem}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation?.navigate(routeNames?.Profile);
                setActiveTab(routeNames?.Profile);
                }}>
                <Text style={activeTab === routeNames?.Profile ? styles?.activeTabItem : styles?.tabItem}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};
