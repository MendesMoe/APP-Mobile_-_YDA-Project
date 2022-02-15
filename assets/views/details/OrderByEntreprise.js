import React from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import ListOdetailEntreprise from "../../../components/Orders/ListOdetailEntreprise";

import logoyda from "../../images/logo-yda.png";

export default function OrderByEntreprise() {
  return (
    <View style={styles.container}>
      <Image source={logoyda} style={styles.logo_yda} />
      <Text style={styles.welcome}> </Text>
      <Text style={styles.title}>
        Bonjour Moenah ! {"\n"} Lista detalhada de pedidos
      </Text>
      <ListOdetailEntreprise />
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
