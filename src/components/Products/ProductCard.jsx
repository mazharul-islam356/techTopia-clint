/* eslint-disable react/prop-types */

const ProductCard = ({products}) => {
    console.log(products);

    const {brandType,name, image, price, shortDescription, ratting, type} = products;

  return (
    <div>
      <div className="card w-[340px] h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Type: {brandType}</p>
          <p>Price: {price}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
