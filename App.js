import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Tap the button to increase your score.
        </Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={incrementCounter}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.resetButton}
        onPress={resetCounter}
        activeOpacity={0.8}
      >
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
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
  header: {
    position: "absolute",
    top: 0,
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 140,
  },
  counterBox: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginTop: 100,
    marginBottom: 100,
  },
  counterText: {
    fontSize: 70,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#E94817",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 180,
    height: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#E94817",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
