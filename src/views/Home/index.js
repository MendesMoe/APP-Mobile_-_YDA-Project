import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import useCompany from "../../hooks/useCompany";

import HomeCompanyItem from "./HomeCompanyItem";
import Header from "../../components/HeaderWelcome";
import { styles } from "./style";

export default function DashAdmin(props) {
  console.log("les props de DashAdmin");
  console.log(props);

  const DATA = useCompany();
  console.log("les DATA by useEntreprises in DashAdmin");
  console.log(DATA);

  const renderItem = ({ item }) => <HomeCompanyItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={renderItem}
        key={(item) => item.id}
      />
    </SafeAreaView>
  );
}
