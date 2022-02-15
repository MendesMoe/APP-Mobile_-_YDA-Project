import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
  FlatList,
} from "react-native";

import logoyda from "../../images/logo-yda.png";
import FormLogin from "../../../components/user/connexion/FormLogin";

export default function Login(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Image
        source={logoyda}
        style={styles.logo_yda}
        //resizeMethod="resize"
        //style={{ position: "relative" }}
      />
      <Text style={styles.text}> Login </Text>

      <FormLogin navigation={props.navigation} />
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