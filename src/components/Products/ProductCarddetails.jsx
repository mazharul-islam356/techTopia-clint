import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";


const ProductCarddetails = () => {
    const [ad,setAd] = useState({})

    const formData = useLoaderData();
    console.log(formData);

    const {id} = useParams()
   console.log(id);


useEffect(()=>{

    const findAd = formData?.find((adCart)=>adCart.id == id)
    console.log(findAd);
    setAd(findAd)

},[id,formData])
console.log(ad);


//-------------------- 4 card filte part-----------------


const [products,setProducts] = useState([])
const [filteredProducts,setfilteredProducts] = useState([])


useEffect(()=>{

    fetch('https://assingment-10.vercel.app/products')
    .then(res=>res.json())
    .then(data=>{
        setProducts(data)
        console.log(data);


        const filterProducts = data.filter(product=>product.type === ad.brand_name)
        setfilteredProducts(filterProducts)

        
    })
  

  
},[ad.brand_name])

console.log(filteredProducts);
console.log(products);





    return (
        <div>

            <SingleProduct ad={ad} filteredProducts={filteredProducts} ></SingleProduct>
            
        </div>
    );
};

export default ProductCarddetails;