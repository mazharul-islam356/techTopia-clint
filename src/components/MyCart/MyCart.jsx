import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const cartData = useLoaderData();
  console.log(cartData);

  return (
    <div className="grid grid-cols-2 ml-14">
     {
        cartData.map(cart=> <div key={cart._id} className="card my-10 w-[600px] h-[300px] card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[300px]"
            src={cart.image}
            alt="Movie"
          />
        </figure>
        <div className="mt-24 w-[300px] space-y-1">
          <h2 className="card-title pb-4 font-bold">{cart.name}</h2>
          <p><span className="font-semibold">Brand-Type: </span>{cart.brandType}</p>
          <p><span className="font-semibold">Brand: </span>{cart.type}</p>
          <p><span className="font-semibold">Ratting: </span>{cart.ratting}.</p>

          <div className="card-actions mr-8 mt-12 justify-end">
            <p> <span className="font-semibold">Price:</span> {cart.price}</p>
          </div>
        </div>
      </div>)
     }
    </div>
  );
};

export default MyCart;
