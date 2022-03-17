import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
//import { executeNativeBackPress } from "react-native-screens";
import useCustomersByCompany from "../../hooks/useCustomersByCompany";
import UserItem from "../../components/Orders/UserItem";
import cciLogo from "./../../assets/images/cci-logo.png";
import { useRoute } from "@react-navigation/native";

export default function OrderByEntreprise(props) {
  //const route = useRoute();
  const detailCompany = props.route.params.detailCompany;
  console.log("OrderByEntreprise return useCustomersByCompany () => ");

  const customOrders = useCustomersByCompany(detailCompany.id);
  console.log(customOrders);
  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(!visible);
  };

  const renderItem = ({ item }) => (
    <UserItem item={item} navigation={props.navigation} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.infoCompany} onPress={changeVisible}>
        <Image source={cciLogo} style={styles.logo}></Image>
        <Text> Empresa blabla</Text>
      </TouchableOpacity>
      {visible && (
        <View style={styles.infos}>
          <Text> Informacoes address </Text>
          <Text> Informacoes phone </Text>
          <Text> Informacoes email</Text>
        </View>
      )}

      <FlatList
        style={{
          position: "absolute",
          marginTop: "35%",
          width: "95%",
          //marginHorizontal: "2%",
        }}
        data={customOrders}
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
    position: "absolute",
    marginTop: 40,
    //justifyContent: "flex-start",
  },
  infoCompany: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    margin: 5,
  },
  infos: {
    width: "90%",
    position: "relative",
    alignItems: "center",
    top: 85,
  },
  logo: {
    width: "29%",
    height: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    position: "absolute",
    width: "99%",
    textAlign: "center",
    lineHeight: 20,
  },
});
