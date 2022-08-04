import React from "react";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/Auth";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import styles from "./style";

export default function FormLogin(props) {
  const [username, setUsername] = useState("");
  const [mdp, setMdp] = useState("");
  const navigation = useNavigation();
  const { connexion } = useContext(AuthContext);

  return (
    <View style={styles.container3}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Email"
        placeholderTextColor="#FFFFFF"
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Password"
        placeholderTextColor="#FFFFFF"
        autoCapitalize="none"
        value={mdp}
        secureTextEntry
        onChangeText={(text) => setMdp(text)}
      ></TextInput>
      <TouchableOpacity
        style={styles.btnConnexion}
        onPress={async () => {
          let login = await connexion(username, mdp);

          if (login == "connecté") {
            navigation.navigate("Dashboard");
          } else {
            Alert.alert(login);
          }
        }}
      >
        <Text style={styles.label}> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnDashboard}
        title="Dashboard"
        onPress={() => {
          props.navigation.navigate("Dashboard");
        }}
      >
        <Text style={styles.label}> Dashboard </Text>
      </TouchableOpacity>
    </View>
  );
}
