import { React, useState } from "react";
import { Image, Text, View, Alert, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { callPhone } from "../../components/Outils/CallPhoneFunction";
import { styles } from "./style";

import avatarUser from "./../../assets/images/avatar_icon.jpg";
import BtnsUpdateOrder from "../../components/BtnsUpdateOrders";

export default function HeaderUser({ user }) {
  console.log("INFOS DO USER no HEADER");
  console.log(user);

  const createTwoButtonAlert = () => {
    Alert.alert("Confirmation", "Je confirme la validation de cette commande", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Valider", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.center}>
      <View style={styles.fundo}></View>
      <View style={styles.avatarArea}>
        <Image source={avatarUser} style={styles.imagem} />
      </View>
      <Text style={styles.textoNome}>{user?.lastname}</Text>

      <TouchableOpacity style={styles.btnPlus} onPress={changeVisible}>
        <AntDesign name={"plus"} size={20} color="orange" />
      </TouchableOpacity>

      {visible && (
        <>
          <TouchableOpacity
            style={styles.onPress}
            onPress={() => callPhone(user.phone)}
          >
            <Text style={styles.phone}>
              <AntDesign name={"phone"} size={16} color="black" /> {user.phone}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.onPress}
            onPress={() => Linking.openURL(`mailto:${user.email}`)}
          >
            <Text style={styles.phone}>
              <AntDesign name={"mail"} size={16} color="black" /> {user.email}
            </Text>
          </TouchableOpacity>
        </>
      )}
      <BtnsUpdateOrder orderId={1} />
    </View>
  );
}
