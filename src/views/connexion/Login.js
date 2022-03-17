import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import logoyda from "./../../assets/images/logo-yda.png";
import FormLogin from "../../../src/components/user/connexion/FormLogin";

export default function Login(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      > */}
      <Image
        source={logoyda}
        style={styles.logo_yda}
        //resizeMethod="resize"
        //style={{ position: "relative" }}
      />
      <Text style={styles.text}> Login </Text>
      <FormLogin navigation={props.navigation} />
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    paddingVertical: 40,
  },
  logo_yda: {
    width: "99%",
    height: 600,
  },
  text: {
    fontSize: 27,
    position: "absolute",
    width: "99%",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 350,
  },
});
