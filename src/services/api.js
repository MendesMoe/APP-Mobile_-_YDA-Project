import AsyncStorage from "@react-native-async-storage/async-storage";

const addressPublic = "172.20.10.4";
const addressPrive = "127.0.0.1:8000";

const reseau = addressPrive;

export const getUsersWithOrdersByFirm = (id) => {
  const url = "http://" + reseau + "/api/getUsersWithOrdersByFirm/" + id;
  const options = {
    method: "GET",
    headers: {
      //Authorization: "Bearer " + localStorage.getItem("@token"),
      //Accept: "application/json",
    },
  };
  console.log("function getUsersWithOrdersByFirm");
  return fetch(url, options).then((response) => response.json());
};

export const getOrderById = async (id) => {
  const url = "http://" + reseau + "/api/orders/" + id;
  const options = {
    method: "GET",
    headers: {
      //Authorization: "Bearer " + localStorage.getItem("@token"),
      //Accept: "application/json",
    },
  };
  console.log("function getOrderById");

  return await fetch(url, options).then((response) => response.json());
};
// OK
export const getFirmsWithUsersAndOrders = () => {
  const url = "http://" + reseau + "/api/firms";
  const options = {
    method: "GET",
    headers: {
      //Authorization: "Bearer " + localStorage.getItem("@token"),
      //Accept: "application/json",
    },
  };
  console.log(
    "function getFirmsWithUsersAndOrders com firmas que tem users and orders ?"
  );
  return fetch(url, options).then((response) => response.json());
};

///////////////////// FUNCTION GET PRODUCT ///////////////////////

export const getProductId = async (id) => {
  const url = "http://" + reseau + "/api/products/" + id;
  const options = {
    method: "GET",
    headers: {
      //Authorization: "Bearer " + localStorage.getItem("@token"),
      //Accept: "application/json",
    },
  };
  console.log("function getProductId");
  return await fetch(url, options).then((response) => response.json());
};

export const connexion = async (username, mdp) => {
  const url = "http://" + reseau + "/api/connexion";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: mdp,
    }),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(options.body);
  if (data.status_code == 200) {
    login(data.access_token);
    console.log("data.access_token async storage ok");
    return true;
  } else {
    console.log("pas de status 200, reponse loginUser");
    return false;
  }
};

const login = async (token) => {
  await AsyncStorage.setItem("token_yda", JSON.stringify(token));
};
