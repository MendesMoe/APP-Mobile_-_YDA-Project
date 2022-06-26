import { useState, useEffect } from "react";
import { getUsersWithOrdersByFirm } from "../services/api";

export default function useCustomersByCompany(id) {
  const [customers, setCustomers] = useState();
  console.log("useCustomersByCompany - id envoye : " + id);

  /// Get Data by API
  useEffect(async () => {
    const result = await getUsersWithOrdersByFirm(id);
    console.log(result);
    setCustomers(result["donnees"]);
  }, []);
  return customers;
}
