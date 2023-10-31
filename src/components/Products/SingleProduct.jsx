
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const SingleProduct = () => {

  const data = useParams()
  console.log(data);

const formData = useLoaderData();
console.log(formData);

const [products,setProducts] = useState([])

useEffect(()=>{
  const productsShow = formData.filter(product=>product.type=== data.brand_name)
  setProducts(productsShow)
  
},[formData,data])

console.log(products);


  return (
    <div>
     
      <div className="grid grid-cols-4 gap-4">
        {products.map((singleData) => (
          <div key={singleData._id} className="card mb-8 mt-4 w-[330px] bg-base-100 shadow-xl">
          <figure><img src={singleData.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{singleData.name}</h2>
            <p>Type: {singleData.brandType}</p>
            <p>Price: {singleData.price}</p>


            <Link to={`/details/${singleData._id}`}>
            <button className="btn btn-outline btn-wide btn-secondary">Details</button>
            </Link>


            <Link to='/update'>
            <button className="btn btn-outline btn-wide btn-accent">Update</button>
            </Link>


          </div>
        </div>
        ))}
      </div>
      
    </div>
  );
};

export default SingleProduct;

