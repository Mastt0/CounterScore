import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

//Adds a button which allows the user to add or edit "Players"
const EditPlayerButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Add icon instead of text</Text>
  </TouchableOpacity>
);
//Part of FlatList Functionality
export default function Players() {
  const users = [
    { id: "1", name: "User One" },
    { id: "2", name: "User Two" },
  ];
  //Part of FlatList Functionality
  const renderUser = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  //Part of "EditPlayerButton" Functionality
  const editPlayers = () => {
    console.log("Changing Players");
  };

  return (
    <View style={styles.container}>
      <Text>Players</Text>
      <StatusBar style="auto" />
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id}
      />
      <EditPlayerButton onPress={editPlayers} />
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
