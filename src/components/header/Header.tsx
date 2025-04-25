import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../../assets/global";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
  };
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

enum tabs  {
    Home = 'Home',
    Profile = 'Profile',
}

export const Header = () => {
    const navigation = useNavigation<NavigationProp>();
    const [activeTab, setActiveTab] = useState(tabs?.Home);
    return (
        <View style={styles?.tabsContainer}>
            <TouchableOpacity onPress={() => {
                    navigation?.navigate('Home')
                    setActiveTab(tabs?.Home)
                    }}>
                <Text style={activeTab === tabs?.Home ? styles?.activeTabItem : styles?.tabItem}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation?.navigate('Profile')
                setActiveTab(tabs?.Profile)
                }}>
                <Text style={activeTab === tabs?.Profile ? styles?.activeTabItem : styles?.tabItem}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};
