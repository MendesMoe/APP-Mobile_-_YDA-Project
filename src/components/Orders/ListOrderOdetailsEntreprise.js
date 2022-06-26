import React from "react";
import { StyleSheet, SafeAreaView, FlatList, View, Image } from "react-native";
import OrderOdetails from "./OrderOdetails";
import useEntreprises from "../../hooks/useCompany";

export default function ListOrderOdetailsEntreprise(props) {
  const DATA = useEntreprises();
  console.log("les DATA by useEntreprises in ListOrderOdetailsEntreprise");
  console.log(DATA);

  const renderItem = ({ item }) => (
    <OrderOdetails item={item.name} navigation={props.navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} key={(item) => item.id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: 500,
    position: "absolute",
    textAlign: "center",

    marginTop: 130,
    fontSize: 18,
  },
});
