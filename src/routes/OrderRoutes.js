import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../views/Home";
import Firm from "../views/Firm";
import Utilisateurs from "../views/UserOrder";
import Commande from "../views/UserOdetails";

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
        name="Utilisateurs"
        component={Utilisateurs}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Commande"
        component={Commande}
      />
    </Stack.Navigator>
  );
}
