import { useLoaderData } from "react-router-dom";


const Card = () => {
    const data = useLoaderData()
    console.log(data);
 

  return (
    <div className="ml-10 grid grid-cols-3 gap-3">

        {
            data.map(cardData =>  <div key={data.id} className="card h-72 justify-center items-center mt-4 w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={cardData.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cardData.brand_name}</h2>
              
            </div>
          </div>)
        }

    </div>
  );
};

export default Card;
