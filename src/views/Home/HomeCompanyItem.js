import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./style";

import logoCompany from "./../../assets/images/cci-logo.png";
import { useNavigation } from "@react-navigation/native";

export default function CompanyItem(props) {
  const navigation = useNavigation();
  const data = props.item;
  console.log("Company Item");
  console.log(data);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Entreprises", {
          detailCompany: data,
        });
      }}
    >
      <View style={styles.person}>
        <Image source={logoCompany} style={styles.logo} />
        <View style={styles.informations}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.calendar}>
            <Icon name={"calendar"} size={16} color="#A3A3A3" />
            <Text style={styles.infoCalendar}>
              {" "}
              {data.visit_day_1} {data.time_1}h, {data.visit_day_2}{" "}
              {data.time_2}h{" "}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
