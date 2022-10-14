import React from "react";
import { SafeAreaView, FlatList, StatusBar } from "react-native";

import HeaderUser from "./HeaderUser";
import UserOrdersItem from "./UserOrdersItem";
import { styles } from "./style";

export default function UserOrder(props) {
  console.log("props de UserOrder index chamado para many orders");
  console.log(props.route.params);
  const user = props.route.params.user;

  const infosUser = {
    image: user.avatar ? user.avatar : "vide",
    email: user.email,
    name: user.firstname + " " + user.lastname,
    phone: user.phone,
  };

  // console.log("infosUser dns UserOrder");
  // console.log(infosUser);

  // console.log("Object values de user.order");
  // console.log(Object.values(user.orders));

  //Si l'utilisateur a passé seulement une commande, il appele directement le UserOdetails
  const renderItem = ({ item }) => (
    <UserOrdersItem item={item} infosUser={infosUser} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        style={styles.list}
        data={Object.values(user.orders)}
        renderItem={renderItem}
        key={(item) => item.id}
        ListHeaderComponent={() => <HeaderUser {...infosUser} />}
        contentContainerStyle={{ flexGrow: 1 }}
        ListFooterComponentStyle={{ flex: 1, justifyContent: "flex-end" }}
        showsVerticalScrollIndicator={false}
        // stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
}
