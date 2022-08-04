import { useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import { Text, View, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect } from "react/cjs/react.production.min";
import { updateStatusOrder } from "./../services/api";

export default function BtnsUpdateOrders({ orderId }) {
  console.log("ORDER ID ENVIADO PRA BOTOES");
  console.log(orderId);

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
    }
    Alert.alert("Error - Commande non modifié");
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.buttons}>
        <Text>Création : </Text>
        <Text>Total : </Text>
        <Text>Commentaire : </Text>
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
});
