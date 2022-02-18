import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function OrderOdetails(props) {
  console.log("Voici props recebida neste Order Odetails");
  console.log(props);
  //console.log(props.item.item.name);
  //const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.unity_ing}>
      <Text style={styles.txt}> {props.item}</Text>
      <View>
        <Text>Order+Odetails </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  unity_ing: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 500,
    padding: 5,
    width: "98%",
    backgroundColor: "#F6F6F6",
    borderRadius: 9,
    marginVertical: 3,
    marginHorizontal: 2,
    //iOS shadow :
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // Android shadow :
    elevation: 4,
  },
  btn_details: {
    alignSelf: "center",
    marginRight: 5,
    width: 90,
    height: 23,
    backgroundColor: "#ECECEF",
    borderRadius: 9,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 32,
    marginHorizontal: 7,
  },
  txttime: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 32,
    marginHorizontal: 9,
  },
});
