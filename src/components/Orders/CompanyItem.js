import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import logoCompany from "./../../assets/images/cci-logo.png";

export default function CompanyItem(props) {
  console.log("les props de CompanyItem");
  console.log(props);

  return (
    <TouchableOpacity
      style={styles.cartao}
      onPress={() => {
        // setIdCompany(props.item.id);
        props.navigation.navigate("OrderByEntreprise", {
          detailCompany: props.item,
          //onPress={() => navigation.goBack()}
        });
      }}
    >
      <Image
        source={logoCompany}
        style={styles.imagem}
        accessibilityLabel={props.item.name}
      />
      <View style={styles.informacoes}>
        <Text style={styles.nome}>
          {" "}
          {props.item.name}
          {props.item.id}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 32,
    marginHorizontal: 7,
  },
  txttime: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 32,
    marginHorizontal: 9,
  },
  ////////////
  cartao: {
    backgroundColor: "#F6F6F6",
    marginVertical: 8,
    marginHorizontal: 11,
    borderRadius: 6,
    flexDirection: "row",

    // Android
    elevation: 4,

    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 18,
  },
  nome: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "bold",
  },
});
