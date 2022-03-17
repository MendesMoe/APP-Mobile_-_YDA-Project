import React from "react";
import { Image, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import OdetailsItem from "../../components/Orders/OdetailsItem";

import avatarUser from "./../../assets/images/avatar_icon.jpg";
import { StatusBar } from "expo-status-bar";

export default function OrderByUser(props) {
  const route = useRoute();
  const user = props.route.params.user;

  const renderItem = ({ item }) => (
    <OdetailsItem item={item} navigation={props.navigation} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.avatar} source={avatarUser}></Image>
      <Text style={styles.title}>
        {user.lastname} {user.lastname}
      </Text>
      <Text style={styles.title}>{user.email}</Text>
      <Text style={styles.title}>
        Status de la commande : {user.orders[0].status} {"\n"}
        Total de la commande : {user.orders[0].total} €
      </Text>
      <FlatList
        style={{
          position: "absolute",
          marginTop: "50%",
          width: "95%",
          //marginHorizontal: "2%",
        }}
        data={user.orders[0].odetails}
        renderItem={renderItem}
        key={(item) => item.id}
      />
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
  avatar: {
    width: "50%",
    height: 90,
  },
  title: {
    fontSize: 21,
    width: "99%",
    textAlign: "center",
    lineHeight: 20,
  },
});
