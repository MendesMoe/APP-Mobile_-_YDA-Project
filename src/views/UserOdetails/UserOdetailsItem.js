import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import useProductByOdetail from "../../hooks/useProductByOdetail";

import prod_vin from "./../../assets/images/product_vin.png";

export default function UserOdetailsItem(props) {
  console.log("les props de UserOdetailsItem");
  console.log(props);
  let productId = parseInt(props.item.product_id);

  const productResponse = useProductByOdetail(productId);
  const { status_code, message, donnees } = productResponse;
  console.log(productResponse);
  console.log(status_code);
  console.log(message);
  console.log(donnees);

  if (donnees) {
    return (
      <TouchableOpacity style={styles.cartao} onPress={() => {}}>
        <Image source={prod_vin} style={styles.imagem} />
        <View style={styles.informacoes}>
          <Text style={styles.nome}> {donnees[0].name} </Text>
          <Text style={styles.description}> Prix : {donnees[0].price} </Text>
          <Text style={styles.description}> Quantité : {props.item.qtty} </Text>
          <Text style={styles.description}>
            {" "}
            Total : {props.item.total_odetail}{" "}
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return <Text> vide</Text>;
  }
}

const styles = StyleSheet.create({
  cartao: {
  
    backgroundColor: "#FEFEFE",
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
    width: 90,
    height: 90,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 18,
  },
  nome: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "normal",
  },
});
