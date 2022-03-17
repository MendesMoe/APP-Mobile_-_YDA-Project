import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../views/connexion/Login";
import AppOrder from "./AppOrder";
import DashAdmin from "../views/dashboard/DashAdmin";

const Tab = createBottomTabNavigator();

export default function BottonRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DashAdmin" component={DashAdmin} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Order" component={AppOrder} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
