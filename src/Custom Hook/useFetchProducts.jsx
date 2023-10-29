import { useEffect, useState } from "react";

export default function useFetchProducts() {
  const [productss , setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Destructure the data here
  const { name, type, brandType } = productss;

  return {
    name,
    type,
    brandType,
  };
}
