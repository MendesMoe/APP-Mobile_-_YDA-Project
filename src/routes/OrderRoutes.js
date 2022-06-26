import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../views/Home";
import Firm from "../views/Firm";
import UserOrder from "../views/UserOrder";

const Stack = createNativeStackNavigator();

export default function OrderRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        screenOptions={{
          cardStyle: { backgroundColor: "#FFF" },
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        screenOptions={{
          contentStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
        name="Entreprises"
        component={Firm}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Commandes"
        component={UserOrder}
      />
    </Stack.Navigator>
  );
}
