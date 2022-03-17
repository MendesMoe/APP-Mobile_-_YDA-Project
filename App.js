import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import BottonRoutes from "./src/routes/BottonRoutes";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar />
      <BottonRoutes />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
