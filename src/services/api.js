const getFirmById = (id) => {
  const url = "http://127.0.0.1:8000/api/firms/" + id;
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
      //Accept: "application/json",
    },
  };
  console.log("function getFirmById");
  return fetch(url, options).then((response) => response.json());
};

///////////////////////////////// FUNCTION FILTRER SEULEMENT LES USERS AVEC ORDERS ////////////////////////////////////
export const getOnlyUsersWithOrders = (data) => {
  console.log(
    "function getOnlyUsersWithOrders / la data envoyé par getFirmById"
  );
  console.log(data);
  var usersOrders = [];
  let tabUsers = data.tab_firms[0].users;
  console.log(tabUsers);

  data.tab_firms[0].users.forEach((user) => {
    console.log(
      "chaque user " + user["firstname"] //JSON.stringify(user)
    );
    if (user.orders.length > 0) {
      usersOrders.push(user);
    }
  });

  return usersOrders;
};

export const getOrdersByFirmId = async (id) => {
  var resultado = [];
  resultado = await getFirmById(id).then((data) => {
    resultado = getOnlyUsersWithOrders(data);
    //console.log(resultado);
    return resultado;
  });

  console.log("function getOrdersByFirmId  88888888 " + resultado);
  return resultado;
};

export const getOrderById = async (id) => {
  const url = "http://127.0.0.1:8000/api/orders" + id;
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
      //Accept: "application/json",
    },
  };
  console.log("function getOrderById");

  return await fetch(url, options).then((response) => response.json());
};

export const getDataOrder = () => {
  const url = "http://127.0.0.1:8000/api/firms";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
      //Accept: "application/json",
    },
  };
  console.log("function getDataOrder");
  return fetch(url, options).then((response) => response.json());
};

///////////////////// FUNCTION GET PRODUCT ///////////////////////

export const getProductId = async (id) => {
  const url = "http://127.0.0.1:8000/api/products/" + id;
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
      Accept: "application/json",
    },
  };
  console.log("function getProductId");
  return await fetch(url, options).then((response) => response.json());
};
