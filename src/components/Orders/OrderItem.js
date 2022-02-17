import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function OrderItem(props) {
  console.log("Voici props recebida neste ordem item");
  //console.log(props.navigation);
  //console.log(props.item.item.name);
  //const [isSelected, setSelection] = useState(false);
  return (
    <TouchableOpacity
      style={styles.unity_ing}
      onPress={() => {
        props.navigation.navigate("OrderByEntreprise");
      }}
    >
      {/*<Image source={props.item.item.url} style={styles.img}></Image> */}
      {/*<Text style={styles.txt}>{props.name}</Text> */}
      <Text style={styles.txt}> {props.item.item.name}</Text>
      <Text style={styles.txttime}>
        {" "}
        {props.item.item.time_1}h, {props.item.item.visit_day_1}
      </Text>
      <Text style={styles.txttime}>
        {" "}
        {props.item.item.time_2}h, {props.item.item.visit_day_2}
      </Text>

      {/*<Text>Details</Text> style={styles.btn_details} */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  unity_ing: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 200,
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