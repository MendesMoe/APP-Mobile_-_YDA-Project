import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import avatarUser from "./../../assets/images/avatar_icon.jpg";

export default function FirmUserItem(props) {
  const navigation = useNavigation();
  const data = useRoute();
  console.log("FirmUserItem + data de useRoute");
  console.log(data);
  //console.log(props);

  return (
    <TouchableOpacity
      style={styles.cartao}
      onPress={() => {
        navigation.navigate("Commandes", {
          user: props.item,
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
/*onPress={() => navigation.goBack()*/

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
