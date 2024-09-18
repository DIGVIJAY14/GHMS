import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { images } from "../constants";
import Button from "../components/Button";
import { router } from "expo-router";

const index = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        height: "100%",
      }}
    >
      <SafeAreaView className="h-full , w-full ">
        <View className="h-full , w-full ">
          <Text className="font-extrabold text-3xl items-center justify-center mt-[20] , ml-[80]">
            GUEST HOUSE
          </Text>
          <Text className="font-extrabold text-3xl items-center justify-center ml-[20]">
            MANAGEMENT SYSTEM
          </Text>
          <Text className="font-extrabold text-2xl ml-[10] mt-[50]">
            Apply now !!
          </Text>
          <Button
            title="Guest House 1"
            containerStyles="mt-10 h-[100] "
            handlePress={() => {
              router.push("options");
            }}
          />
          <Button
            title="Guest House 2"
            containerStyles="mt-7 h-[100] "
            handlePress={() => {
              router.push("options");
            }}
          />
          <Button
            title="Guest House 3"
            containerStyles="mt-7 h-[100] "
            handlePress={() => {
              router.push("options");
            }}
          />
          <Image
            source={images.homcon}
            className="h-[100] , w-[100] mt-[50] ml-[130] "
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;
