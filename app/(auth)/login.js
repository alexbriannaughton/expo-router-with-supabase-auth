import React, { useState } from 'react'
import { Alert, StyleSheet, View, TextInput, Button } from 'react-native'
import { supabase } from '../lib/supbase-client'
import { Stack } from 'expo-router'
import * as Linking from 'expo-linking'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
    }

    async function signUpWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
    }

    async function resetPassword() {
        const resetPasswordURL = Linking.createURL('')

        console.log(resetPasswordURL)

        const { data, error } = await supabase
            .auth
            .resetPasswordForEmail(
                email,
                { redirectTo: resetPasswordURL }
            );
        console.log('resetPassword data:', data)
        console.log('resetPassword() error: ', error)
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: true, title: "Supabase Expo Router App adsf" }} />
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <TextInput
                    label="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <TextInput
                    label="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize={'none'}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                    title="Sign In"
                    disabled={loading}
                    onPress={() => signInWithEmail()}>
                </Button>
            </View>
            <View style={styles.verticallySpaced}>
                <Button
                    title='Sign Up'
                    disabled={loading}
                    onPress={() => signUpWithEmail()}>
                </Button>
            </View>
            <View style={styles.verticallySpaced}>
                <Button
                    title='Forgot password?'
                    disabled={loading}
                    onPress={() => resetPassword()}>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
})