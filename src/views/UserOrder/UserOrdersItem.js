import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";

export default function UserOrdersItem(props) {
  console.log("props de UserOrdersItem");
  console.log(props);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cartao}
      onPress={() => {
        navigation.navigate("UserOdetails", {
          infosUser: props.infosUser,
          item: props.item,
        });
      }}
    >
      <View style={styles.imagem}>
        <AntDesign name={"home"} size={34} color="black" />
      </View>
      <View style={styles.informacoes}>
        <View style={styles.row}>
          <Text style={styles.title}> {props.item.status.toUpperCase()} </Text>
          <Text style={styles.title}> Total : {props.item.total} </Text>
        </View>
        <Text style={styles.text}>
          {" "}
          Création : {moment(props.item.created_at).calendar()}{" "}
        </Text>
        {props.item.note_admin && (
          <Text style={styles.text}> Note : {props.item.note_admin} </Text>
        )}
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
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 5,
    marginVertical: 12,
    marginRight: 18,
  },

  row: {
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
    width: "100%",
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: "red",
    fontWeight: "bold",
  },
});
