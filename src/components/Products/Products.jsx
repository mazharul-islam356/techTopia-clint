/* eslint-disable react/prop-types */

import ProductsCard from "./ProductsCard";



const Products = ({data}) => {
    console.log(data); 
    return (
        <div className="ml-10 grid grid-cols-3 gap-3">


        {
            data.map(product=><ProductsCard key={product.id} product={product}></ProductsCard>)
        }
            
            
        </div>
    );
};

export default Products;