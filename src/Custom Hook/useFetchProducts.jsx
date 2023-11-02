import { useEffect, useState } from "react";

export default function useFetchProducts() {
  const [productss , setProducts] = useState([]);

  useEffect(() => {
    fetch("https://assingment-10-server-one.vercel.app/products")
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
