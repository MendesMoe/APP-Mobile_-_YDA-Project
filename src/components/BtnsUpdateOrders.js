import { useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import { Text, View, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { updateStatusOrder } from "./../services/api";
import moment from "moment";

export default function BtnsUpdateOrders({ orderId, order }) {
  console.log("ORDER ID ENVIADO PRA BOTOES");
  console.log(orderId);
  console.log("ORDER info ENVIADO PRA BOTOES");
  console.log(order);

  const navigation = useNavigation();

  const [status, setStatus] = useState();

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

  async function updateOrder(orderId, status) {
    const result = await updateStatusOrder(orderId, status);
    console.log("result de updateOrder");
    console.log(orderId + " " + status);
    console.log(result);

    if (result === 200) {
      Alert.alert("Commande modifié");
      navigation.goBack();
    } else {
      Alert.alert("Error - Commande non modifié");
      navigation.goBack();
    }
  }

  return (
    <>
      <View style={styles.infos}>
        <View style={styles.infoItem}>
          <Text style={styles.infoKey}>Création : </Text>
          <Text style={styles.infoDate}>{moment(order.date).calendar()}</Text>
        </View>

        {order.comment ? (
          <View style={styles.infoItem}>
            <Text style={styles.infoKey}>Commentaire : </Text>
            <Text style={styles.infoDate}>{order.comment}</Text>
          </View>
        ) : (
          ""
        )}

        <View style={styles.infoItem}>
          <Text style={styles.infoKey}>Total :</Text>
          <Text style={styles.infoTotal}>{order.total} € </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.botaoValider}
          onPress={() => updateOrder(orderId, setStatus("en cours"))} // por que nao funciona o setStatus?
        >
          <Text style={styles.textoBotao}> Préparer </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoAnuller}
          onPress={() => updateOrder(orderId, "annule")}
        >
          <Text style={styles.textoBotao}> Annuler </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoFinaliser}
          onPress={() => updateOrder(orderId, "terminee")}
        >
          <Text style={styles.textoBotao}> Livrée </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 6,
  },
  botao: {
    backgroundColor: "#FFA500",
    marginTop: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "45%",
  },
  botaoValider: {
    backgroundColor: "#32CD32",
    marginTop: 2,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "26%",
  },
  botaoFinaliser: {
    backgroundColor: "#F48037",
    marginTop: 2,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "26%",
  },
  botaoAnuller: {
    backgroundColor: "#D92121",
    marginTop: 2,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "26%",
  },
  textoBotao: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  infoDate: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 16,
  },
  infoTotal: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FF0000",
  },
  infoKey: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
    fontFamily: "Roboto",
  },
  infos: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  infoItem: {
    padding: 3,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
