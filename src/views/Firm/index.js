import React, { useEffect, useState }from "react";

import { SafeAreaView, FlatList, StatusBar } from "react-native";
import { useRoute } from "@react-navigation/native";

import useCustomersByCompany from "../../hooks/useCustomersByCompany";

import FirmUserItem from "./FirmUserItem";
import HeaderFirm from "./HeaderFirm";
import HeaderFirmShimmerEffect from "./HeaderFirmShimmerEffect";
import FirmUserItemShimmerEffect from "./FirmUserItemShimmerEffect";
import { styles } from "./style";

export default function Firm() {
  const route = useRoute();
  const [time, setTime] = useState(false);

  useEffect( async () => {
    setTimeout(() => {
      setTime(true);
    }, 1000);
  },[])

  const infosFirm = {
    image: route.params.detailCompany.image,
    email: route.params.detailCompany.email,
    name: route.params.detailCompany.name,
    phone: route.params.detailCompany.phone,
  };

  const customWithOrders = useCustomersByCompany(route.params.detailCompany.id);
  console.log("Firm - index - customWithOrders");
  console.log(customWithOrders);

  const renderItem = ({ item }) => (
    <FirmUserItem item={item} infosFirm={infosFirm} />
  );

  return (
    <SafeAreaView style={styles.containerFirm}>
      <StatusBar />
      
      { time ?
      <FlatList
      style={styles.list}
      data={customWithOrders}
      renderItem={renderItem}
      key={(item) => item.id}
      ListHeaderComponent={() => <HeaderFirm {...infosFirm} />}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
    />
    :
    <>
      <HeaderFirmShimmerEffect/>
      <FirmUserItemShimmerEffect/>
      <FirmUserItemShimmerEffect/>
      <FirmUserItemShimmerEffect/>
    </>
    }
      
    </SafeAreaView>
  );
}
