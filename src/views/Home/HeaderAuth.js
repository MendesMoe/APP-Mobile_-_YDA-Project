import { React, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../../contexts/Auth";

import logo from "./../../assets/images/logo.png";

export default function HeaderAuth() {
  const { authData } = useContext(AuthContext);

  return (
    <View style={estilos.topo}>
      <Animatable.Image
        animation="flipInY"
        source={logo}
        style={estilos.imagem}
      />
      <View style={estilos.divLogoName}>
        <Text style={estilos.boasVindas}> {authData.name}</Text>
        <Text style={estilos.legenda}>
          Actualisez le status des commandes clients
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    width: "100%",
    flexDirection: "row",
  },
  divLogoName: {
    flexDirection: "column",
    marginLeft: 5,
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  boasVindas: {
    marginTop: 11,
    fontSize: 22,
    lineHeight: 42,
    fontWeight: "bold",
  },
  legenda: {
    fontSize: 14,
    lineHeight: 16,
  },
});
