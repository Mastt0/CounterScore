import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

//Part of FlatList Functionality
const Players = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [users]);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem("users");
      if (value !== null) {
        setUsers(JSON.parse(value));
      }
    } catch (error) {
      console.log("Error retrieving data:", error);
    }
  };
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
};

//Adds a button which allows the user to add or edit "Players"
const EditPlayerButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Add New Player</Text>
  </TouchableOpacity>
);

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

export default Players;
