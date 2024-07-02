/* eslint-disable react/prop-types */


import ProductsCard from "./ProductsCard";


const Products = ({data}) => {
    // console.log(data); 
    return (
        <div className="lg:ml-16 ml-2 grid md:grid-cols-2 lg:grid-cols-3 gap-3">

        {
            data.map(product=><ProductsCard key={product.id} product={product}></ProductsCard>)
        }
            
        </div>
    );
};

export default Products;