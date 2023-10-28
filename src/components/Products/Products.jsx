import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {

    const products = useLoaderData()
    console.log(products);
    
    return (
        <div className="grid grid-cols-4 gap-6" >

            {products.map(product=> <ProductCard key={product._id} products={product}></ProductCard> )}
            
        </div>
    );
};

export default Products;