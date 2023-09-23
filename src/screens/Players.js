import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

//Part of FlatList Functionality
const Players = () => {
  const [users, setUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSubmit = async () => {
    try {
      const newPlayer = {
        id: Math.random().toString(), // generate a random id
        name: playerName,
      };
      const updatedUsers = [...users, newPlayer];
      setUsers(updatedUsers);
      await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));
    } catch (error) {
      console.log("Error saving data:", error);
    }

    toggleModal();
    setPlayerName("");
  };

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
      <EditPlayerButton
        onPress={editPlayers}
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
        setPlayerName={setPlayerName}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

//Adds a button which allows the user to add or edit "Players"
const EditPlayerButton = ({
  toggleModal,
  isModalVisible,
  setPlayerName,
  handleSubmit,
}) => (
  <View>
    <TouchableOpacity style={styles.button} onPress={toggleModal}>
      <Text style={styles.buttonText}>Add New Player</Text>
    </TouchableOpacity>

    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput placeholder="Player Name" onChangeText={setPlayerName} />

          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Cancel" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Players;
