import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import logo from "./../assets/images/logo.png";

class HeaderWelcome extends React.Component {
  state = {
    topo: {
      boasVindas: "Salut Moenah",
      legenda: "Actualisez le status des commandes clients",
    },
  };

  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
    position: "absolute",
    width: "100%",
  },
  imagem: {
    width: 70,
    height: 48,
  },
  boasVindas: {
    marginTop: 18,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default HeaderWelcome;
