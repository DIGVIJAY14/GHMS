import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, FlatList } from "react-native";
import { styled } from "nativewind"; // or tailwind-rn

const DateDropdown = ({ title, selectedDate, onDateChange }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [step, setStep] = useState("month"); // Step can be 'month', 'day', or 'year'

  // Generate options for months, days, and years
  const generateOptions = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) =>
      (currentYear - i).toString()
    );

    return { months, days, years };
  };

  const { months, days, years } = generateOptions();

  const [selectedMonth, setSelectedMonth] = useState(
    selectedDate?.month || months[0]
  );
  const [selectedDay, setSelectedDay] = useState(selectedDate?.day || days[0]);
  const [selectedYear, setSelectedYear] = useState(
    selectedDate?.year || years[0]
  );

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const applyDate = () => {
    onDateChange({
      month: selectedMonth,
      day: selectedDay,
      year: selectedYear,
    });
    toggleModal();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (step === "month") {
          setSelectedMonth(item);
          setStep("day");
        } else if (step === "day") {
          setSelectedDay(item);
          setStep("year");
        } else if (step === "year") {
          setSelectedYear(item);
          applyDate();
        }
      }}
      className="p-2 border-b border-gray-200"
    >
      <Text className="text-base">{item}</Text>
    </TouchableOpacity>
  );

  const getOptions = () => {
    if (step === "month") return months;
    if (step === "day") return days;
    if (step === "year") return years;
  };

  return (
    <View className="w-80">
      {/* Title for the date picker */}
      {title && <Text className="mb-2 text-lg font-bold">{title}</Text>}

      {/* Date picker button */}
      <TouchableOpacity
        onPress={toggleModal}
        className=" p-2  bg-blue-300 rounded-3xl w-[340] border-[4px] border-blue-950 m-[5] ml-[10] "
      >
        <Text className="text-base">
          {`${selectedMonth} ${selectedDay}, ${selectedYear}`}
        </Text>
      </TouchableOpacity>

      {/* Modal for date picker */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-end items-center bg-black bg-opacity-50">
          <View className="bg-white w-full p-4 rounded-t-lg">
            <FlatList
              data={getOptions()}
              renderItem={renderItem}
              keyExtractor={(item) => item}
            />

            {/* Cancel Button */}
            <TouchableOpacity onPress={toggleModal} className="mt-4 p-2">
              <Text className="text-blue-500 text-center">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default styled(DateDropdown);
