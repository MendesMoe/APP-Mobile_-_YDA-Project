import React from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import ListOrderEntreprise from "../../../src/components/Orders/ListOrderEntreprise";

import logoyda from "./../../assets/images/logo-yda.png";

export default function DashAdmin(props) {
  return (
    <View style={styles.container}>
      <Image source={logoyda} style={styles.logo_yda} />
      <Text style={styles.welcome}> </Text>
      <Text style={styles.title}>
        Bonjour Moenah ! {"\n"} Commandes en Attente{"\n"}
        Page 1 - Lista de empresas com Orders{"\n"} Dashboard
      </Text>
      <ListOrderEntreprise navigation={props.navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    //justifyContent: "flex-start",
  },
  logo_yda: {
    width: "99%",
    height: 600,
  },
  title: {
    fontSize: 20,
    position: "absolute",
    width: "99%",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 20,
  },
});
