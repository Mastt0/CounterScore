import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Players = () => {
  const navigation = useNavigation();

  const runStartGame = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View>
      <Button title="Start Game" onPress={runStartGame} />
    </View>
  );
};

// const Players = () => {
//   return (
//     <View>
//       <Text>Hello World</Text>
//     </View>
//   );
// };

export default Players;
