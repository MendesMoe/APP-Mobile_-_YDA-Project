import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import useProductByOdetail from "./../../hooks/useProductByOdetail";

import prod_vin from "./../../assets/images/product_vin.png";

export default function OdetailsItem(props) {
  console.log("les props de OdetailsItem");
  console.log(props);
  const product_id = parseInt(props.item.product_id);

  const productResponse = useProductByOdetail(product_id);
  const { status_code, message, donnees } = productResponse;
  console.log(productResponse);
  console.log(status_code);
  console.log(message);
  console.log(donnees);
  //console.log(typeof product);
  // const {
  //   created_at,
  //   description,
  //   id,
  //   image,
  //   name,
  //   price,
  //   service_id,
  //   status,
  //   updated_at,
  // } = donnees;
  // console.log(created_at);

  if (donnees) {
    return (
      <TouchableOpacity
        style={styles.cartao}
        onPress={() => {
          // setIdCompany(props.item.id);
          props.navigation.navigate("OrderByUser");
        }}
      >
        <Image
          source={prod_vin}
          style={styles.imagem}
          //accessibilityLabel={props.item.lastname}
        />
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
    return "";
  }
}

const styles = StyleSheet.create({
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
    width: 90,
    height: 90,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
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
    fontWeight: "regular",
  },
});
