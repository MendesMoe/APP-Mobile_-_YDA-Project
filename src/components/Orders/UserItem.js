import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import avatarUser from "./../../assets/images/avatar_icon.jpg";

export default function UserItem(props) {
  console.log("les props de UserItem");
  console.log(props);

  return (
    <TouchableOpacity
      style={styles.cartao}
      onPress={() => {
        // setIdCompany(props.item.id);
        props.navigation.navigate("OrderByUser", {
          user: props.item,
          //onPress={() => navigation.goBack()}
        });
      }}
    >
      <Image
        source={avatarUser}
        style={styles.imagem}
        accessibilityLabel={props.item.lastname}
      />
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
