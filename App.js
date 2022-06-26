import React from "react";
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AuthProvider } from "./src/contexts/Auth";

import BottonRoutes from "./src/routes/BottonRoutes";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar />
      <AuthProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <BottonRoutes />
        </KeyboardAvoidingView>
      </AuthProvider>
    </SafeAreaView>
  );
}
