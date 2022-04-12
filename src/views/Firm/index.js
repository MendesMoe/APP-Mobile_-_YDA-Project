import React, { useState } from "react";
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
import FirmUserItem from "../../components/Orders/FirmUserItem";
import cciLogo from "./../../assets/images/cci-logo.png";
import { useRoute } from "@react-navigation/native";

export default function Firm() {
  const route = useRoute();

  const detailCompany = route.params.detailCompany;

  const customOrders = useCustomersByCompany(detailCompany.id);
  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(!visible);
  };

  const renderItem = ({ item }) => <FirmUserItem item={item} />;

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
          width: "100%",
          //marginHorizontal: "2%",
        }}
        // ListHeaderComponent={HeaderList}
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
