import React from "react";
import { SafeAreaView, FlatList, StatusBar } from "react-native";

import { useRoute } from "@react-navigation/native";

import HeaderUser from "./HeaderUser";
import UserOdetailsItem from "./UserOdetailsItem";
import { styles } from "./style";

export default function UserOrder() {
  const route = useRoute();
  const user = route.params.user;

  const renderItem = ({ item }) => <UserOdetailsItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        style={styles.list}
        data={user.orders[0].odetails}
        renderItem={renderItem}
        key={(item) => item.id}
        ListHeaderComponent={() => <HeaderUser user={route.params.user} />}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
}
