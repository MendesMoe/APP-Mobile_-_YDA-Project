import React from "react";
import {
  Image,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import UserOdetailsItem from "./UserOdetailsItem";
import { styles } from "./style";

import avatarUser from "./../../assets/images/avatar_icon.jpg";

export default function UserOrder() {
  const route = useRoute();
  const user = route.params.user;
  console.log("route.params dans UserOrder !!!!!!");
  console.log(route.params);

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
  const renderItem = ({ item }) => <UserOdetailsItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fundo} />
      <View style={styles.imagemArea}>
        <Image source={avatarUser} style={styles.imagem} />
      </View>
      <Text style={styles.textoNome}>{user?.lastname}</Text>
      <Text style={styles.textoEmail}>{user.email}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => createTwoButtonAlert()}
        >
          <Text style={styles.textoBotao}>En attente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Validé</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={user.orders[0].odetails}
        renderItem={renderItem}
        key={(item) => item.id}
      />
    </SafeAreaView>
  );
}
