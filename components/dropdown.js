import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, FlatList } from "react-native";
import { styled } from "nativewind";

const Dropdown = ({
  options,
  selectedValue,
  selectedValues,
  selectedValuess,
  onSelect,
  qwe,
  selecttime,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const selectItem = (item) => {
    onSelect(item);
    toggleModal();
  };

  return (
    <View className="w-48">
      <TouchableOpacity
        onPress={toggleModal}
        className={`p-2  bg-blue-300 rounded-3xl w-[340] border-[4px] border-blue-950  ${qwe}`}
      >
        <Text className="text-base">{selectedValue || "Select"}</Text>
        <Text className="text-base">{selectedValues}</Text>
        <Text className="text-base">{selectedValuess}</Text>
        <Text className=".text-base">{selecttime}</Text>
        <Text className="text-base">{selecttime}</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-end items-center bg-black bg-opacity-50">
          <View className="bg-white w-full p-4 rounded-t-lg">
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => selectItem(item.value)}
                  className="p-2 border-b border-gray-200"
                >
                  <Text className="text-base">{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Apply the Tailwind styling
export default styled(Dropdown);
