import { useState, useEffect } from "react";

const getDataOrder = () => {
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

const getOnlyWithOrders = (data) => {
  let companyorder = [];
  data.forEach((entreprise) => {
    let haveOrder = false;
    if (entreprise.users.length) {
      entreprise.users.forEach((user) => {
        if (user.orders.length) {
          haveOrder = true;
        }
      });
    }
    if (haveOrder) {
      companyorder.push(entreprise);
    }
  });
  console.log("function getOnlyWithOrders");
  return companyorder;
};

const loadData = async () => {
  let resultado = [""];
  await getDataOrder().then((data) => {
    resultado = getOnlyWithOrders(data);
  });
  console.log("function loadData");
  return resultado;
};

export default function useEntreprises() {
  const [entreprises, setEntreprises] = useState(loadData());

  useEffect(async () => {
    const result = await loadData();
    setEntreprises(result);
  }, []);
  console.log("function useEntreprise");
  return entreprises;
}

/*
console.log("return hook");
console.log(result);

console.log("resultado en loadData");
console.log(resultado);
*/
