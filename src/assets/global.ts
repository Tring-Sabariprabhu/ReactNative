import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabsContainer: {
        padding: 20,
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        gap: 20,
    },
    tabItem: {
        fontSize: 20,
    },
    activeTabItem: {
        backgroundColor: 'blue',
        fontSize: 20,
    },
});
