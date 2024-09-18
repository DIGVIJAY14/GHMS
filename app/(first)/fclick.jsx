import { View, Text, SafeAreaView } from "react-native";
import react from "react";
import DateDropdown from "../../components/datedropdownn";
import { ScrollView } from "react-native";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { router, Redirect, Link } from "expo-router";
import Dropdown from "../../components/dropdown";
import { useState } from "react";

const fclick = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValues, setSelectedValues] = useState(null);
  const [selectedValuess, setSelectedValuess] = useState(null);
  const [selecttime, setselecttime] = useState(null);
  const [selecttimee, setselecttimee] = useState(null);

  const [selectedDate, setSelectedDate] = useState({
    month: "January",
    day: "1",
    year: "2024",
  });

  const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
  ];
  const options1 = [
    { label: "1:00", value: "1:00" },
    { label: "2:00", value: "2:00" },
    { label: "3:00", value: "3:00" },
    { label: "4:00", value: "4:00" },
    { label: "5:00", value: "5:00" },
    { label: "6:00", value: "6:00" },
    { label: "7:00", value: "7:00" },
    { label: "8:00", value: "8:00" },
    { label: "9:00", value: "9:00" },
    { label: "10:00", value: "10:00" },
    { label: "11:00", value: "11:00" },
    { label: "12:00", value: "12:00" },
  ];
  const options2 = [
    { label: "AM", value: "AM" },
    { label: "PM", value: "PM" },
  ];
  return (
    <SafeAreaView className=" h-full , w-full">
      <ScrollView>
        <View className="h-full , w-full ">
          <Text className="text-3xl font-extrabold mt-[10] ml-[10]">
            Fill the details
          </Text>
          <Form title="Name" value={Form.firstname} fill="mt-[20]" />
          <Form title="Address" value={Form.address} fill="mt-[10]" />
          <View className=" ml-[10]">
            <Text className=" text-xl font-extrabold ml-[6] mt-[10] mb-[5]  ">
              Number of guest
            </Text>
            <Dropdown
              options={options}
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
              qwe="h-[45]"
            />
          </View>
          <View>
            <DateDropdown
              title="From"
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
            <Dropdown
              options={options1}
              selectedValue={selectedValues}
              onSelect={setSelectedValues}
              qwe="ml-[10] h-[45]"
            />
            <Dropdown
              options={options2}
              selectedValue={selecttime}
              onSelect={setselecttime}
              qwe="ml-[10] h-[45] mt-[5]"
            />
          </View>
          <View>
            <DateDropdown
              title="To"
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
            <Dropdown
              options={options1}
              selectedValue={selectedValuess}
              onSelect={setSelectedValuess}
              qwe="ml-[10] h-[45]"
            />
            <Dropdown
              options={options2}
              selectedValue={selecttimee}
              onSelect={setselecttimee}
              qwe="ml-[10] h-[45] mt-[5]"
            />
          </View>
          <Form title="Add Details" value={Form.details} fill="mt-[10]" />

          <Button
            title="Send Request"
            containerStyles="mt-10 w-[250] ml-[55]"
            handlePress={() => {
              router.push("indexx");
            }}
          />
          <Button
            title="Table"
            containerStyles="mt-10 w-[250] ml-[55]"
            handlePress={() => {
              router.push("table");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default fclick;
