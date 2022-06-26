import React from "react";
import { Image, View } from "react-native";

import logoydablack from "./../../assets/images/logo.png";
import FormLogin from "./FormLogin";
import styles from "./style";

export default function Login(props) {
  return (
    <View style={styles.container2}>
      <Image source={logoydablack} style={styles.logo_yda} />
      <FormLogin navigation={props.navigation} />
    </View>
  );
}
