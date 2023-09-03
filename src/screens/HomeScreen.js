import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
// import { StatusBar } from "expo-statuar";sb

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Is it working?</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const toggleDrawer = () => {
//     navigation.dispatch(DrawerActions.toggleDrawer());
//   };

//   const runStartGame = () => {
//     navigation.navigate("Players");
//   };

//   return (
//     <View>
//       <Button title="Toggle Drawer" onPress={toggleDrawer} />
//       <Button title="Start Game" onPress={runStartGame} />
//     </View>
//   );
// };

// export default HomeScreen;
