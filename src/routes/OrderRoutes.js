import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../views/Home";
import Firm from "../views/Firm";
import UserOrder from "../views/UserOrder";

const Stack = createNativeStackNavigator();

export default function OrderRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Firms" component={Firm} />
      <Stack.Screen name="UserOrder" component={UserOrder} />
    </Stack.Navigator>
  );
}
