import React from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import ListOrderOdetailsEntreprise from "../../../src/components/Orders/ListOrderOdetailsEntreprise";
import useEntreprises from "../../hooks/useEntreprises";

import logoyda from "./../../assets/images/logo-yda.png";

export default function OrderByEntreprise(props) {
  const data = useEntreprises();
  console.log("voici la data envoyé par le useEntreprise : ");
  console.log(data);

  return (
    <View style={styles.container}>
      <Image source={logoyda} style={styles.logo_yda} />
      <Text style={styles.welcome}> </Text>
      <Text style={styles.title}>
        Bonjour Moenah ! {"\n"} Lista de todas as orders de uma empresa - {"\n"}
        OrderByEntreprise
      </Text>
      <ListOrderOdetailsEntreprise data={data} />
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
