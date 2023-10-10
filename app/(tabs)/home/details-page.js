import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    return (
        <>
            <Stack.Screen options={{ headerShown: true, title: "Home: Details" }} />
            <View style={styles.container}>
                <Text>Details Page of Home Tab</Text>
                <StatusBar style="auto" />
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});