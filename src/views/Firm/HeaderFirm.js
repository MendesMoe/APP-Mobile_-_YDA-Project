import { React, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import { callPhone } from "../../components/Outils/CallPhoneFunction";
import cciLogo from "../../assets/images/logo_klm.png";
import { styles } from "./style";

export default function HeaderFirm({ infosFirm }) {
  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.center}>
      <View style={styles.fundo}></View>

      <View style={styles.avatarArea}>
        <Animatable.Image
          animation="flipInY"
          source={cciLogo}
          style={styles.imagem}
        />
      </View>

      <Text style={styles.textoNome}> {infosFirm?.name}</Text>

      <TouchableOpacity style={styles.btnPlus} onPress={changeVisible}>
        <AntDesign name={"plus"} size={20} color="orange" />
      </TouchableOpacity>

      {visible && (
        <View style={styles.visiblePress}>
          <TouchableOpacity
            style={styles.onPress}
            onPress={() => callPhone(infosFirm.phone)}
          >
            <Text style={styles.infosCompany}>
              <AntDesign name={"phone"} size={20} color="black" />{" "}
              {infosFirm.phone}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.onPress}
            onPress={() => Linking.openURL(`mailto:${infosFirm.email}`)}
          >
            <Text style={styles.infosCompany}>
              <AntDesign name={"mail"} size={16} color="black" />{" "}
              {infosFirm.email}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
