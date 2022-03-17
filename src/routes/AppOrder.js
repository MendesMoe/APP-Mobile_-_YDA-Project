import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../views/connexion/Login";
import DashAdmin from "../views/dashboard/DashAdmin";
import OrderByEntreprise from "../views/orders/OrderByEntreprise";
import OrderByUser from "../views/orders/OrderByUser";
import BottonRoutes from "./BottonRoutes";

const Stack = createNativeStackNavigator();

export default function AppOrder({ DashAdmin }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashAdmin} />
      <Stack.Screen name="OrderByEntreprise" component={OrderByEntreprise} />
      <Stack.Screen name="OrderByUser" component={OrderByUser} />
    </Stack.Navigator>
  );
}
