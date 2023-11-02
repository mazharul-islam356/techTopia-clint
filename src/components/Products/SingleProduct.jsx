/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleProduct = ({ ad, filteredProducts }) => {
  console.log(ad);
  console.log(filteredProducts);

  const { id, brand_name, slider01, slider02, slider03 } = ad;
  console.log(id, brand_name, slider01, slider02, slider03);

  return (
    <div>


      <div className="carousel w-full my-10 shadow-xl rounded-xl h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider01}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slider02}
            className="w-full"

          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slider03}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>




      <div className="grid md:grid-cols-2 justify-center lg:grid-cols-4 lg:gap-4">
        {filteredProducts.map((singleData) => (
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
