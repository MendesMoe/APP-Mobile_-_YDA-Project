import React from "react";
import { SafeAreaView, FlatList, StatusBar } from "react-native";
import useCompany from "../../hooks/useCompany";

import HomeCompanyItem from "./HomeCompanyItem";
import HeaderAuth from "./HeaderAuth";
import { styles } from "./style";

export default function DashAdmin() {
  const DATA = useCompany();
  console.log("INDEX HOME");
  console.log(DATA[0]);

  const renderItem = ({ item }) => <HomeCompanyItem item={item} />;

  return (
    <SafeAreaView style={styles.containerHome}>
      <StatusBar />
      <FlatList
        style={styles.list}
        data={DATA[0]}
        renderItem={renderItem}
        key={(item) => item.id}
        ListHeaderComponent={() => <HeaderAuth />}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
}
