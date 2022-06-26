import { React, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../contexts/Auth";

import Logout from "../views/Connexion/Login";
import OrderRoutes from "./OrderRoutes";
import Agenda from "../views/Agenda";
import LoginRoutes from "./LoginRoutes";

const Tab = createBottomTabNavigator();

export default function BottonRoutes() {
  const { login } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {login ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              let icon = "home";

              if (route.name === "Agenda") {
                icon = "calendar";
              } else if (route.name === "Logout") {
                icon = "logout";
              }
              return <AntDesign name={icon} size={24} color="black" />;
            },
            tabBarInactiveBackgroundColor: "#EDEDED",
            tabBarInactiveTintColor: "#A9A9A9",
            tabBarActiveBackgroundColor: "#FFA500",
            tabBarActiveTintColor: "#FFA500",
            headerShown: false,
            tabBarHideOnKeyboard: true,
            keyboardHidesTabBar: true,
          })}
        >
          <Tab.Screen name="Dashboard" component={OrderRoutes} />
          <Tab.Screen name="Agenda" component={Agenda} />
          <Tab.Screen name="Logout" component={Logout} />
        </Tab.Navigator>
      ) : (
        <LoginRoutes />
      )}
    </NavigationContainer>
  );
}
