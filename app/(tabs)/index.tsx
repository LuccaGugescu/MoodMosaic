import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import { Mood } from '@/types';
import MoodArt from '@/components/MoodArt';

export default function HomeScreen() {
  const [moods, setMoods] = useState<Mood[]>([]);

  const loadMoods = async () => {
    const storedMoods = await AsyncStorage.getItem('moods');
    if (storedMoods) {
      setMoods(JSON.parse(storedMoods));
    }
  };

  useEffect(() => {
    loadMoods();
  }, []);

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">MoodMosaic</Text>
      <Link href="/mood-log" asChild>
        <Pressable className="bg-blue-500 p-3 rounded-lg mb-4">
          <Text className="text-white text-center">Log Your Mood</Text>
        </Pressable>
      </Link>
      <Text className="text-xl font-semibold mb-2">Your Mood Mosaic</Text>
      <View className="flex-row flex-wrap mb-4">
        {moods.map((mood, index) => (
          <MoodArt key={index} mood={mood.mood} />
        ))}
      </View>
      <Text className="text-xl font-semibold mb-2">Mood Log</Text>
      <FlatList
        data={moods}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View className="flex-row items-center mb-2">
            <MoodArt mood={item.mood} />
            <View className="ml-4">
              <Text className="text-lg">{item.mood}</Text>
              <Text className="text-sm text-gray-500">{item.note}</Text>
              <Text className="text-xs text-gray-400">{new Date(item.date).toLocaleString()}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}
