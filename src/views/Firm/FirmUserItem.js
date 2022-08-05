import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import avatarUser from "./../../assets/images/avatar_icon.jpg";
import { styles } from "./style";

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

  const datas = props.item;
  let infosOrder = null;

  let oneOrder;
  let k;
  if (Object.keys(props.item.orders).length < 2) {
    oneOrder = true;
    infosOrder = {
      date: datas.orders[0].created_at,
      comment: datas.orders[0].comments,
      status: datas.orders[0].status,
      total: datas.orders[0].total,
    };
    console.log(infosOrder);
    k = Object.keys(props.item.orders);
  } else {
    oneOrder = false;
    k = [];
    k.push(0);
  }

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => {
        oneOrder
          ? navigation.navigate("UserOdetails", {
              item: props.item.orders[k[0]],
              infosUser: infosUser,
              infosOrder: infosOrder,
            })
          : navigation.navigate("UserOrder", { user: props.item });
      }}
    >
      <View style={styles.personItem}>
      <Image source={avatarUser} style={styles.imageItem} />
      <View style={styles.informationsItem}>
        <Text style={styles.nameItem}> {props.item.firstname}</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
}
