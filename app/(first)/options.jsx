import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import { router, Redirect } from "expo-router";

const options = () => {
  return (
    <SafeAreaView className="h-full , w-full">
      <ScrollView>
        <View className="h-full , w-full ">
          <Text className="text-3xl font-extrabold mt-[20] ml-[20] ">
            Select type
          </Text>
          <Button
            title="Regular Rooms"
            containerStyles="mt-20 h-[130] text-xl"
            handlePress={() => {
              router.push("New");
            }}
          />
          <Button
            title="Vip Rooms"
            containerStyles="mt-20 h-[130] text-xl"
            handlePress={() => {
              router.push("New2");
            }}
          />
          <Button
            title="Other"
            containerStyles="mt-20 h-[130] text-xl"
            handlePress={() => {
              router.push("New3");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default options;
