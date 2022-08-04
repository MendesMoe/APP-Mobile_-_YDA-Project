import { React, useState } from "react";
import { Image, Text, View, Alert, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { callPhone } from "../../components/Outils/CallPhoneFunction";
import { styles } from "./style";

import avatarUser from "./../../assets/images/avatar_icon.jpg";

export default function HeaderUser({ image, email, name, phone }) {
  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(!visible);
  };
  console.log("HeaderUser avec infouser ");
  return (
    <View style={styles.center}>
      <View style={styles.fundo}></View>
      <View style={styles.avatarArea}>
        <Image source={avatarUser} style={styles.imagem} />
      </View>
      <Text style={styles.textoNome}>{name}</Text>
      <TouchableOpacity style={styles.btnPlus} onPress={changeVisible}>
        <AntDesign name={"plus"} size={20} color="orange" />
      </TouchableOpacity>
      {visible && (
        <>
          <TouchableOpacity
            style={styles.onPress}
            onPress={() => callPhone(phone)}
          >
            <Text style={styles.phone}>
              <AntDesign name={"phone"} size={16} color="black" /> {phone}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.onPress}
            onPress={() => Linking.openURL(`mailto:${email}`)}
          >
            <Text style={styles.phone}>
              <AntDesign name={"mail"} size={16} color="black" /> {email}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
