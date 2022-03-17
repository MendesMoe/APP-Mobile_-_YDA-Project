import { useState, useEffect } from "react";
import { getOrdersByFirmId } from "../services/api";

export default function useCustomersByCompany(id) {
  const [customers, setCustomers] = useState();
  console.log("useCustomersByCompany - id envoye : " + id);

  /// Get Data by API
  useEffect(async () => {
    const result = await getOrdersByFirmId(id);
    setCustomers(result);
  }, []);
  //console.log("function useCustomersByCompany !!!!!888888 " + result);
  console.log("customers ==== > ");
  console.log(customers);
  return customers;
}
