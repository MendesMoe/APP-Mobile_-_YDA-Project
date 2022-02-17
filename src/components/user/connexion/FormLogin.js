import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function FormLogin(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Email"
        placeholderTextColor="#707070"
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Password"
        placeholderTextColor="#707070"
        autoCapitalize="none"
      ></TextInput>
      <Button
        title="Connexion"
        onPress={() => props.navigation.navigate("Login")}
      />
      <Button
        title="Dashboard"
        onPress={() => {
          props.navigation.navigate("Dashboard");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 90,
    position: "absolute",
    marginTop: 370,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#C8C8C8",
    borderWidth: 1,
    padding: 5,
  },
});
