import { Stack, Link, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    const {settingType} = useLocalSearchParams()

    return (
        <>
            <Stack.Screen options={{ headerShown: true, title: `${settingType}` }} />
            <View style={styles.container}>
                <Text>Details Page of Settings Tab</Text>
                <Text>{settingType}</Text>
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