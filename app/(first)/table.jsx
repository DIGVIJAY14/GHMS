import React from "react";
import { View, Text } from "react-native";

const Table = () => {
  const tableData = [
    [
      "Row 1, Col 1",
      "Row 1, Col 2",
      "Row 1, Col 3",
      "Row 1, Col 4",
      "Row 1, Col 5",
    ],
    [
      "Row 2, Col 1",
      "Row 2, Col 2",
      "Row 2, Col 3",
      "Row 2, Col 4",
      "Row 2, Col 5",
    ],
    [
      "Row 3, Col 1",
      "Row 3, Col 2",
      "Row 3, Col 3",
      "Row 3, Col 4",
      "Row 3, Col 5",
    ],
    [
      "Row 4, Col 1",
      "Row 4, Col 2",
      "Row 4, Col 3",
      "Row 4, Col 4",
      "Row 4, Col 5",
    ],
    [
      "Row 5, Col 1",
      "Row 5, Col 2",
      "Row 5, Col 3",
      "Row 5, Col 4",
      "Row 5, Col 5",
    ],
  ];

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      {tableData.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row">
          {row.map((cell, colIndex) => (
            <View
              key={colIndex}
              className="border p-2 w-20 h-10 bg-white justify-center items-center"
            >
              <Text className="text-center">{cell}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Table;
