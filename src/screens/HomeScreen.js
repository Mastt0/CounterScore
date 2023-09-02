import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const runStartGame = () => {
    navigation.navigate("Players");
  };

  return (
    <View>
      <Button title="Start Game" onPress={runStartGame} />
    </View>
  );
};

export default HomeScreen;
