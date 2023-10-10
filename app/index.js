import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { supabase } from './lib/supbase-client';

export default function IndexPage() {

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.replace("/(tabs)/home")
    })

    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(event)

      if (event === 'PASSWORD_RECOVERY') {
        console.log('hit the pw recovery event!')
        const { data, error } = await supabase.auth.updateUser({ password: 'fishfish' });
      }

      if (session) router.replace("/(tabs)/home")
      else router.replace("/(auth)/login")
    })
  }, [])

}