import { View, Text, TouchableOpacity } from "react-native";
const Button = ({ handlePress, title, containerStyles }) => {
  return (
    <TouchableOpacity
      className={` justify-center items-center bg-blue-300 h-[50] w-[340] rounded-3xl  ml-[10] ${containerStyles} border-[10px] border-blue-950`}
      onPress={handlePress}
      activeOpacity={0.5}
    >
      <Text className="text-3xl font-extrabold text-primary ">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
