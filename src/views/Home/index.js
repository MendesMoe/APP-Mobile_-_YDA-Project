import React from "react";
import { SafeAreaView, FlatList, StatusBar } from "react-native";
import useCompany from "../../hooks/useCompany";

import HomeCompanyItem from "./HomeCompanyItem";
import HeaderAuth from "./HeaderAuth";
import { styles } from "./style";

export default function DashAdmin() {
  const DATA = useCompany();

  const renderItem = ({ item }) => <HomeCompanyItem item={item} />;

  return (
    <SafeAreaView style={styles.containerHome}>
      <StatusBar />
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={renderItem}
        key={(item) => item.id}
        ListHeaderComponent={() => <HeaderAuth />}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
}
