import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { callPhone } from "./../../components/Outils/CallPhoneFunction";

import {
  Image,
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

  const customWithOrders = useCustomersByCompany(detailCompany.id);

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
      {visible ? (
        <View style={styles.infos}>
          <TouchableOpacity onPress={() => callPhone(detailCompany.phone)}>
            <Text style={styles.infosCompany}>
              <AntDesign name={"phone"} size={16} color="black" />{" "}
              {detailCompany.phone}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${detailCompany.email}`)}
          >
            <Text style={styles.infosCompany}>
              <AntDesign name={"mail"} size={16} color="black" />{" "}
              {detailCompany.email}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.infos}></View>
      )}

      <FlatList
        style={styles.list}
        data={customWithOrders}
        extraData={detailCompany}
        renderItem={renderItem}
        key={(item) => item.id}
      />
    </SafeAreaView>
  );
  {
    /* ListHeaderComponent={HeaderList} */
  }
}
