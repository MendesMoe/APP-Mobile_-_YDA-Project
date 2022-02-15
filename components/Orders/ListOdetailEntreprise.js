import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import OrderOdetails from "./OrderOdetails";

export default class ListOdetailEntreprise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
    };
  }
  getDataOrder() {
    const url = "http://127.0.0.1:8000/api/firms";
    //Options de la requête API
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
        //Accept: "application/json",
      },
    };
    return fetch(url, options).then((response) => response.json());
  }

  getOnlyWithOrders(data) {
    let tmp = [];
    data.forEach((entreprise) => {
      let ok = false;
      if (entreprise.users.length) {
        entreprise.users.forEach((user) => {
          if (user.orders.length) {
            ok = true;
          }
        });
      }
      if (ok) {
        tmp.push(entreprise);
      }
    });
    return tmp;
  }

  _loadData() {
    // va chercher les options de l'API
    this.getDataOrder().then((data) => {
      console.log("State data");
      console.log(data);
      console.log("State data users");
      console.log(data[1].users);
      console.log("State data users orders");
      console.log(data[1].users[1].orders);
      //this.setState({ data: data }, () => {
      this.setState({ data: this.getOnlyWithOrders(data) }, () => {
        // getOnlyWithOrders
        console.log(this.state.data);
      });
    });
    // la récupération des data stockées dans l'API
    // Quand il récupére la data 'then' entao injeta no state data[].
  }

  componentDidMount() {
    this._loadData();
  }

  renderItemComponent = (data) => <OrderOdetails item={data} />;

  ItemSeparator = () => (
    <View
      style={{
        height: 2,
        backgroundColor: "rgb(232,232,232)",
        marginLeft: 15,
        marginRight: 15,
      }}
    />
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={(item) => this.renderItemComponent(item)}
          ItemSeparatorComponent={this.ItemSeparator}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: 500,
    position: "absolute",
    textAlign: "center",

    marginTop: 130,
    fontSize: 18,
  },
});
