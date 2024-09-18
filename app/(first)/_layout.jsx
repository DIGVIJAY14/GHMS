import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="fclick" options={{ headerShown: false }} />
      <Stack.Screen name="options" options={{ headerShown: false }} />
      <Stack.Screen name="New" options={{ headerShown: false }} />
      <Stack.Screen name="New2" options={{ headerShown: false }} />
      <Stack.Screen name="New3" options={{ headerShown: false }} />
      <Stack.Screen name="indexx" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
