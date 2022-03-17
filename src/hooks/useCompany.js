import { useState, useEffect } from "react";

import { getDataOrder } from "../services/api";

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
  const [entreprises, setEntreprises] = useState("");

  useEffect(async () => {
    const result = await loadData();
    setEntreprises(result);
  }, []);
  console.log("function useEntreprise");
  return entreprises;
}
