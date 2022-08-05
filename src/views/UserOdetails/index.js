import React from "react";
import { SafeAreaView, FlatList, StatusBar } from "react-native";

import { useRoute } from "@react-navigation/native";

import HeaderUser from "../UserOrder/HeaderUser";
import BtnsUpdateOrders from "../../components/BtnsUpdateOrders";
import UserOdetailsItem from "./UserOdetailsItem";
import { styles } from "./style";

export default function UserOdetails(props) {
  const route = useRoute();
  const data = route.params;
  console.log(
    "route.params (data) de UserOdetails index chamado para somente 1 order / agora com infosOrder"
  );
  console.log(data);

  const renderItem = ({ item }) => <UserOdetailsItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        style={styles.list}
        data={data.item.odetails}
        renderItem={renderItem}
        key={(item) => item.id}
        ListHeaderComponent={() => <HeaderUser {...data.infosUser} />}
        ListFooterComponent={() => (
          <BtnsUpdateOrders orderId={data.item.id} order={data.infosOrder} />
        )}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
}
