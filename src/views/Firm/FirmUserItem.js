import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import avatarUser from "./../../assets/images/avatar_icon.jpg";

export default function FirmUserItem(props) {
  const navigation = useNavigation();
  console.log("= les props de FirmUserItem props");
  console.log(props);

  const infosUser = {
    image: props.item.avatar ? props.item.avatar : null,
    email: props.item.email,
    name: props.item.firstname + " " + props.item.lastname,
    phone: props.item.phone,
  };

  let oneOrder;
  let k;
  if (Object.keys(props.item.orders).length < 2) {
    oneOrder = true;
    k = Object.keys(props.item.orders);
  } else {
    oneOrder = false;
    k = [];
    k.push(0);
  }

  // console.log("= oneOrder en FirmUserItem");
  // console.log(oneOrder);

  // console.log("Qual o resultado de props.item.orders[0]");
  // console.log(props.item.orders[k[0]]);

  return (
    <TouchableOpacity
      style={styles.cartao}
      onPress={() => {
        oneOrder
          ? navigation.navigate("UserOdetails", {
              item: props.item.orders[k[0]],
              infosUser: infosUser,
            })
          : navigation.navigate("UserOrder", { user: props.item });
      }}
    >
      <Image source={avatarUser} style={styles.imagem} />
      <View style={styles.informacoes}>
        <Text style={styles.nome}> {props.item.firstname}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cartao: {
    backgroundColor: "#F6F6F6",
    marginVertical: 8,
    marginHorizontal: 11,
    borderRadius: 5,
    flexDirection: "row",

    // Android
    elevation: 3,

    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.11,
    shadowRadius: 1.62,
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
