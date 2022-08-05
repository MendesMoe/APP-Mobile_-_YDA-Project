import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import shimmerGif from "../../assets/shimmer.gif";
import { styles } from "./style";

export default function HeaderFirmShimmerEffect() {
  
  return (
    <View style={styles.center}>
      <View style={{backgroundColor:"#FEFEFE",width: "100%",height: "60px"}}>
    </View>

      <View style={styles.avatarArea}>
        <Image source={shimmerGif} style={styles.imagem}
        />
      </View>

      <Image source={shimmerGif} style={{with: 200, height: 25}}
        />
    </View>
  );
}
