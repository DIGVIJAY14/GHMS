import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const Form = ({ title, fill }) => {
  return (
    <View className={`  ml-[10] ${fill}`}>
      <Text className=" text-xl font-extrabold ml-[6]">{title}</Text>
      <View className=" h-[35]  w-[340] bg-blue-300 rounded-3xl mt-[5] border-[4px] border-blue-950 ">
        <TextInput className="ml-[10] mt-[3] font-extrabold"></TextInput>
      </View>
    </View>
  );
};

export default Form;
