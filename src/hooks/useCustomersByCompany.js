import { useState, useEffect } from "react";
import { getOrdersByFirmId } from "../services/api";

export default function useCustomersByCompany(id) {
  const [customers, setCustomers] = useState(getOrdersByFirmId(id));
  console.log("useCustomersByCompany - id envoye : " + id);
  /// Get Data by API
  useEffect(async () => {
    const data = await getOrdersByFirmId(id);
    console.log("inside useEffect " + data);
    setCustomers(data);
  }, [customers]);
  console.log(" fin du useCustomersByCompany hooks");
  console.log(customers);
  return customers;
}
