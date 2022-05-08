import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

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

import FirmUserItem from "./FirmUserItem";
import cciLogo from "./../../assets/images/cci-logo.png";
import { styles } from "./style";

export default function Firm() {
  const route = useRoute();

  const detailCompany = route.params.detailCompany;
  console.log("detailCompany de FIRM");
  console.log(detailCompany);

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
        <Text style={styles.companyName}> {detailCompany.name}</Text>
      </TouchableOpacity>
      {visible && (
        <View style={styles.infos}>
          <Text style={styles.infosCompany}>
            {" "}
            <AntDesign name={"phone"} size={16} color="black" />
            {detailCompany.phone}{" "}
          </Text>
          <Text style={styles.infosCompany}>
            {" "}
            <AntDesign name={"mail"} size={16} color="black" />
            {detailCompany.email}
          </Text>
        </View>
      )}

      <FlatList
        style={styles.list}
        // ListHeaderComponent={HeaderList}
        data={customOrders}
        extraData={detailCompany}
        renderItem={renderItem}
        key={(item) => item.id}
      />
    </SafeAreaView>
  );
}
