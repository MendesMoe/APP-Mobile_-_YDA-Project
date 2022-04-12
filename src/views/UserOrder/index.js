import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Button,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import UserOdetailsItem from "../../components/Orders/UserOdetailsItem";

import avatarUser from "./../../assets/images/avatar_icon.jpg";

export default function UserOrder() {
  const route = useRoute();
  const user = route.params.user;

  const createTwoButtonAlert = () =>
    Alert.alert("Confirmation", "Je confirme la validation de cette commande", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Valider", onPress: () => console.log("OK Pressed") },
    ]);

  const renderItem = ({ item }) => <UserOdetailsItem item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.avatar} source={avatarUser}></Image>
      <Text style={styles.title}>
        {user.lastname} {user.lastname}
      </Text>
      <Text style={styles.title}>{user.email}</Text>
      <Text style={styles.title}>
        Status de la commande : {user.orders[0].status} {"\n"}
        Total de la commande : {user.orders[0].total} €
      </Text>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          title="En attente"
          color="#FF8C00"
          onPress={() => "Commande mise en attente"}
        />
        <Button
          style={styles.button}
          title="Validé"
          color="#FFA500"
          onPress={() => createTwoButtonAlert()}
        />
      </View>
      <FlatList
        style={{
          position: "absolute",
          marginTop: "60%",
          width: "100%",
          //marginHorizontal: "2%",
        }}
        data={user.orders[0].odetails}
        renderItem={renderItem}
        key={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",

    marginTop: 40,
    //justifyContent: "flex-start",
  },
  avatar: {
    width: "50%",
    height: 90,
  },
  title: {
    fontSize: 21,
    width: "99%",
    textAlign: "center",
    lineHeight: 20,
  },
  buttons: {
    width: "70%",
    marginLeft: "13%",
    marginVertical: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
});
