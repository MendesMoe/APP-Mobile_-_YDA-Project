import { useState, useEffect } from "react";

import { getFirmsWithUsersAndOrders } from "../services/api";

export default function useEntreprises() {
  const [entreprises, setEntreprises] = useState("");

  useEffect(async () => {
    const result = await getFirmsWithUsersAndOrders();
    console.log(result);
    setEntreprises(result);
  }, []);
  console.log("function useEntreprise");
  console.log(entreprises);
  return entreprises;
}
