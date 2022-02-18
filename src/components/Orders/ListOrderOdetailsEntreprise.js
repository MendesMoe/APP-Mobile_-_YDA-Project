import React from "react";
import { StyleSheet, SafeAreaView, FlatList, View, Image } from "react-native";
import OrderOdetails from "./OrderOdetails";
import useEntreprises from "../../hooks/useCompany";

export default function ListOrderOdetailsEntreprise(props) {
  console.log("les props de ListOrderOdetailsEntreprise");
  console.log(props);

  const DATA = useEntreprises();
  console.log("les DATA by useEntreprises in ListOrderOdetailsEntreprise");
  console.log(DATA);

  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     name: "First Item",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     name: "Second Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     name: "Third Item",
  //   },
  // ];
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
