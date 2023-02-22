import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

import { styles } from "./style";
import shimmerGif from "../../assets/shimmer.gif";

export default function FirmUserItemShimmerEffect() {
  return (
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.personItem}>
        <Image source={shimmerGif} style={styles.imageItem} />
        <View style={styles.informationsItem}>
          <Image source={shimmerGif} style={{ width: 200, height: 25 }} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
