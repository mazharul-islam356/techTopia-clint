
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const [productt,setProductt] = useState()

    const {id} = useParams()
    console.log(id)

    const detailsData = useLoaderData()
    console.log(detailsData);

useEffect(()=>{
    const findProducts = detailsData.find((product)=>product._id === id)
    setProductt(findProducts)
},[id,detailsData])


console.log(productt);






    return (
        <div>
            this is details

            
        </div>
    );
};

export default Details;