import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import avatarUser from "./../../assets/images/avatar_icon.jpg";
import { styles } from "./style";

function hasOneOrder({ ordersArray }) {}

export default function FirmUserItem(props) {
  const navigation = useNavigation();
  console.log("= les props de FirmUserItem props");
  console.log(props);

  const data = props.item;

  const infosUser = {
    image: data.avatar ? props.item.avatar : null,
    email: data.email,
    name: data.firstname + " " + props.item.lastname,
    phone: data.phone,
  };

  const orders = data.orders;

  let infosOrder = null;

  let oneOrder;
  let k;
  if (Object.keys(orders).length < 2) {
    oneOrder = true;
    const onlyOrder = Object.values(orders);

    infosOrder = {
      date: onlyOrder[0].created_at,
      comment: onlyOrder[0].comments,
      status: onlyOrder[0].status,
      total: onlyOrder[0].total,
    };

    k = Object.keys(orders);
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
