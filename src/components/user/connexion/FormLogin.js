import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { connexion } from "../../../services/api";

export default function FormLogin(props) {
  const [username, setUsername] = useState("");
  const [mdp, setMdp] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Email"
        placeholderTextColor="#707070"
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Password"
        placeholderTextColor="#707070"
        autoCapitalize="none"
        value={mdp}
        secureTextEntry
        onChangeText={(text) => setMdp(text)}
      ></TextInput>
      <Button
        title="Connexion"
        onPress={() => {
          connexion(username, mdp);
          if (connexion == true) {
            navigation.navigate("Dashboard");
          } else {
            Alert.alert("Identifiants incorrects");
          }
        }}
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
