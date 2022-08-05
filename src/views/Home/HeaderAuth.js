import { React, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../../contexts/Auth";

import logo from "./../../assets/images/logo.png";

export default function HeaderAuth() {
  const { authData } = useContext(AuthContext);

  return (
    <View style={estilos.div}>
      <View style={estilos.topo}>
        <Animatable.Image
          animation="flipInY"
          source={logo}
          style={estilos.imagem}
        />
        <Text style={estilos.userName}> Salut {authData.name}</Text>
      </View>
      <Text style={estilos.legenda}>
        Liste des commandes en attente ou en cours. {"\n"}
        Sélectionnez l'entreprise et l'utilisateur pour voir les commandes
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  div: {
    marginHorizontal: 9,
    marginVertical: 5,
    backgroundColor: "#FFFFFF",
  },
  topo: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    width: "100%",
    flexDirection: "row",
  },

  imagem: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  userName: {
    marginTop: 10,
    fontSize: 24,
    lineHeight: 42,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginLeft: 5,
  },
  legenda: {
    fontSize: 16,
    lineHeight: 16,
  },
});
