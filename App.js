import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/Navigation/DrawerNavigator";
import React, { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  //Used to Set Orientation to Landscape
  useEffect(() => {
    async function setOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    }
    setOrientation();
  }, []);

  return (
    //Renders the Drawer Navigation which can be found in the counterScore/src/Navigation Directory
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
