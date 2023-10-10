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

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event)
      if (event === 'PASSWORD_RECOVERY') {
        console.log('OMG')
      }
      else if (session) router.replace("/(tabs)/home")
      else router.replace("/(auth)/login")
    })
  }, [])
  
}