import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Mood } from '@/types';

export default function MoodLogScreen() {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const saveMood = async () => {
    const newMood: Mood = { mood, note, date: new Date().toISOString() };
    const existingMoods = await AsyncStorage.getItem('moods');
    const moods: Mood[] = existingMoods ? JSON.parse(existingMoods) : [];
    moods.push(newMood);
    await AsyncStorage.setItem('moods', JSON.stringify(moods));
    router.back();
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Log Your Mood</Text>
      <TextInput
        placeholder="How are you feeling?"
        value={mood}
        onChangeText={setMood}
        className="mb-4 p-2 bg-white rounded"
      />
      <TextInput
        placeholder="Add a note (optional)"
        value={note}
        onChangeText={setNote}
        className="mb-4 p-2 bg-white rounded"
      />
      <Pressable onPress={saveMood} className="bg-blue-500 p-3 rounded-lg">
        <Text className="text-white text-center">Save</Text>
      </Pressable>
    </View>
  );
}
