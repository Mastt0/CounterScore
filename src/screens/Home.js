import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const NewGameButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Start New Game</Text>
  </TouchableOpacity>
);
const EditPlayersButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Edit Players</Text>
  </TouchableOpacity>
);

export default function Home() {
  const newGame = () => {
    console.log("New Game");
  };

  const editPlayers = () => {
    console.log("Edit players");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NewGameButton onPress={newGame} />
      <EditPlayersButton onPress={editPlayers} />
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
