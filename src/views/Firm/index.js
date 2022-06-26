import React from "react";

import { SafeAreaView, FlatList, StatusBar } from "react-native";
import { useRoute } from "@react-navigation/native";

import useCustomersByCompany from "../../hooks/useCustomersByCompany";

import FirmUserItem from "./FirmUserItem";
import HeaderFirm from "./HeaderFirm";
import { styles } from "./style";

export default function Firm() {
  const route = useRoute();

  const infosFirm = route.params.detailCompany;
  console.log(infosFirm);

  const customWithOrders = useCustomersByCompany(infosFirm.id);
  console.log("Resultado de useCustomersByCompany : ");
  console.log(customWithOrders);

  const renderItem = ({ item }) => <FirmUserItem item={item} />;

  return (
    <SafeAreaView style={styles.containerFirm}>
      <StatusBar />
      <FlatList
        style={styles.list}
        data={customWithOrders}
        extraData={infosFirm}
        renderItem={renderItem}
        key={(item) => item.id}
        ListHeaderComponent={() => <HeaderFirm infosFirm={infosFirm} />}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
}
