import { Stack, Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import { supabase } from '../../lib/supbase-client';
import { useEffect, useState } from 'react';

export default function SettingsPage() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user)
        })
    }, [])

    console.log(user)

    async function doLogout() {
        const { error } = await supabase.auth.signOut()

        if (error) Alert.alert(error)
    }

    return (
        <>
            <Stack.Screen options={{ headerShown: true, title: "Settings" }} />
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>Index of Settings Tab</Text>
                <StatusBar style="auto" />
                <Text></Text>
                <Link href={"/settings/ACCOUNT"}>
                    <Text>Go to Account Settings</Text>
                </Link>
                <Link href={"/settings/NETWORK"}>
                    <Text>Go to Network Settings</Text>
                </Link>
                <Button title="logout" onPress={() => doLogout()}></Button>
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