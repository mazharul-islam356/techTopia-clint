

/* eslint-disable react/prop-types */
const DetailsCard = ({productt}) => {
    console.log(productt);
    const {image,name,shortDescription} = productt || {}
    

  // const [cartData,setCartData] = useState()

    const handleCart = () => {


      fetch("https://assingment-10.vercel.app/cart", {
        // mode:"no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productt),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('innside the post response',data);
        });
 
      // Swal.fire(
      //   'Your product added succecfully to My Cart!',
      //   'Go to your cart',
      //   'success'     
      //   )  

      // console.log(productt); 
  }
  



  return (
    <div>
      <div className="hero min-h-screen my-8 rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-sm lg:-ml-0 -ml-4 p-4 lg:p-0 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
              {shortDescription}
            </p>
            <button onClick={handleCart} className="btn btn-info btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
