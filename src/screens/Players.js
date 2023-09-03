import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { StatusBar } from "expo-statusbar";

export default function Players() {
  return (
    <View style={styles.container}>
      <Text>Players</Text>
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
