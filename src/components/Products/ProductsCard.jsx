/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductsCard = ({product}) => {
  
  const {id,brand_name,img} = product || {}
  

    return (
        <div>
            <Link to={`/products/${id}`} >
                <div  className="card h-72 justify-center items-center mt-10 w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={img}
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{brand_name}</h2>
                  
                </div>
              </div>
                </Link>
        </div>
    );
};

export default ProductsCard;