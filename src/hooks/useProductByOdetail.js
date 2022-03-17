import { useState, useEffect } from "react";

import { getProductId } from "../services/api";

export default function useProductByOdetail(id) {
  const [product, setProduct] = useState("");

  useEffect(async () => {
    const result = await getProductId(id);
    console.log("result");
    console.log(result);
    setProduct(result);
  }, []);
  //   console.log("function useProductByOdetail");
  //   console.log(product);
  return product;
}
