import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import useCompany from "../../hooks/useCompany";

import CompanyItem from "../../components/Orders/CompanyItem";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function DashAdmin(props) {
  console.log("les props de DashAdmin");
  console.log(props);

  const DATA = useCompany();
  console.log("les DATA by useEntreprises in DashAdmin");
  console.log(DATA);

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CompanyItem item={item} navigation={props.navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        style={{
          position: "absolute",
          marginTop: "50%",
          width: "95%",
          //marginHorizontal: "2%",
        }}
        data={DATA}
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
    backgroundColor: "#F6F6F6",

    //justifyContent: "flex-start",
  },
});
