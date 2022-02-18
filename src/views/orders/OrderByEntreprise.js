import React from "react";
import { Image, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { executeNativeBackPress } from "react-native-screens";
import useCustomersByCompany from "../../hooks/useCustomersByCompany";

import logoyda from "./../../assets/images/logo-yda.png";

export default function OrderByEntreprise(props) {
  const detailCompany = props.route.params.detailCompany;
  const customOrders = useCustomersByCompany(detailCompany.id);
  console.log("customOrders return by useCustomersByCompany () => ");
  console.log(customOrders);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoyda} style={styles.logo_yda} />

      <Text style={styles.title}>
        Liste de commandes de {detailCompany.name}
        {"\n"}
        Prenom : {customOrders[0].firstname} et Nom : Mendes
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    position: "absolute",
    marginTop: 40,
    //justifyContent: "flex-start",
  },
  logo_yda: {
    width: "99%",
    height: 600,
  },
  title: {
    fontSize: 18,
    position: "absolute",
    width: "99%",
    textAlign: "center",
    lineHeight: 20,
  },
  txttime: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 32,
    marginHorizontal: 9,
  },
});
