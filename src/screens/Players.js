import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const EditPlayers = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Add icon instead of text</Text>
  </TouchableOpacity>
);

export default function Players() {
  const editPlayers2 = () => {
    console.log("Changing Players");
  };

  return (
    <View style={styles.container}>
      <Text>Players</Text>
      <StatusBar style="auto" />
      <EditPlayers onPress={editPlayers2} />
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
  button: {
    backgroundColor: "#1518E3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
