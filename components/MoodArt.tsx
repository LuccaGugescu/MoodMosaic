import React from 'react';
import { View } from 'react-native';

interface MoodArtProps {
  mood: string;
}

export default function MoodArt({ mood }: MoodArtProps) {
  const colors: Record<string, string> = {
    happy: 'bg-yellow-300',
    sad: 'bg-blue-300',
    calm: 'bg-green-300',
    excited: 'bg-red-300',
  };

  return <View className={`w-16 h-16 rounded-lg ${colors[mood] || 'bg-gray-300'}`} />;
}