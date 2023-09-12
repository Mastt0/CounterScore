import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import GameScore from "../screens/GameScore";
import Players from "../screens/Players";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Current Game" component={GameScore} />
      <Drawer.Screen name="Players" component={Players} />
    </Drawer.Navigator>
  );
}
