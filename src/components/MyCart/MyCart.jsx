import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartData = useLoaderData();

  const [cartProduct, setCartProduct] = useState(cartData);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assingment-10.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = cartProduct.filter(
                (cartt) => cartt._id !== _id
              );
              setCartProduct(remaining);
              console.log(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="grid lg:grid-cols-2 lg:ml-14">
      {cartData.map((cart) => (
        <div
          key={cart._id}
          className="card my-10 lg:w-[600px] lg:h-[320px] h-[350px] card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img className="lg:w-[300px] w-64" src={cart.image} alt="" />
          </figure>
          <div className="mt-24 lg:w-[300px] space-y-1">
            <h2 className="card-title pb-4 font-bold">{cart.name}</h2>
            <p>
              <span className="font-semibold">Brand-Type: </span>
              {cart.brandType}
            </p>
            <p>
              <span className="font-semibold">Brand: </span>
              {cart.type}
            </p>
            <p>
              <span className="font-semibold">Ratting: </span>
              {cart.ratting}.
            </p>

            <div className="card-actions mr-8 mt-12 justify-end">
              <p>
                {" "}
                <span className="font-semibold">Price:</span> {cart.price}
              </p>
            </div>
            <button
              onClick={() => handleDelete(cart._id)}
              className="btn btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
