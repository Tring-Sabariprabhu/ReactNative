import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabsContainer: {
        marginTop: 25,
        padding: 20,
        flexDirection: 'row',
        gap: 20,
    },
    tabItem: {
        fontSize: 20,
        padding: 10,
    },
    activeTabItem: {
        borderBottomColor: '#82C8E5',
        borderBottomWidth: 2,
        fontWeight: 500,
        fontSize: 20,
        padding: 10,
    },
});
