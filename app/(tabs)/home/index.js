import { Stack, Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    return (
        <>
            <Stack.Screen options={{ headerShown: true, title: "Home" }} />
            <View style={styles.container}>
                <Text>Index of Home Tab</Text>
                <StatusBar style="auto" />

                <Link href={"/home/details-page"}>
                    <Text>Go to Detail Page</Text>
                </Link>
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