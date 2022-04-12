import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Login from "../views/connexion/Login";
import OrderRoutes from "./OrderRoutes";
import Agenda from "../views/Agenda";

const Tab = createBottomTabNavigator();

export default function BottonRoutes() {
  return (
    <NavigationContainer>
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
          tabBarInactiveBackgroundColor: "#A9A9A9",
          tabBarInactiveTintColor: "#A9A9A9",
          tabBarActiveBackgroundColor: "#FFA500",
          tabBarActiveTintColor: "#FFA500",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Dashboard" component={OrderRoutes} />
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Logout" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
