import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../views/Connexion/Login";
import OrderRoutes from "./OrderRoutes";

const Stack = createNativeStackNavigator();

export default function LoginRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={OrderRoutes}
      />
    </Stack.Navigator>
  );
}
