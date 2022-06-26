import { React, useState } from "react";
import { Text, View, Alert, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnsUpdateOrders({ orderId }) {
  console.log("ORDER ID ENVIADO PRA BOTOES");
  console.log(orderId);

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

  return (
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.botaoValider}
        onPress={() => createTwoButtonAlert()}
      >
        <Text style={styles.textoBotao}> Préparer </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoFinaliser}>
        <Text style={styles.textoBotao}> Livrée </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoAnuller}>
        <Text style={styles.textoBotao}> Annuler </Text>
      </TouchableOpacity>
    </View>
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
