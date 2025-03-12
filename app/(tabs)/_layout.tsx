import React from 'react';
import '../../styles/global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="mood-log" options={{ title: 'Log Your Mood' }} />
    </Stack>
  );
}