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

  let clients = [];
  let tabclients = data.tab_firms[0];
  console.log(tabclients);

  tabclients.users.forEach((user) => {
    if (user.orders.length) {
      clients.push(user);
    }
  });
  console.log("function getOnlyUsersWithOrders" + clients);
  return clients;
};

export const getOrdersByFirmId = (id) => {
  let resultado = [""];
  getFirmById(id)
    .then((data) => {
      resultado = getOnlyUsersWithOrders(data);
    })
    .finally("fin da funcao getOrdersByFirmId in api");
  console.log("function getOrdersByFirmId ; " + resultado);
  return resultado;
};

///////////////////////////////// GET ORDER AND ORDER DETAILS BY ID ////////////////////////////////////

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
