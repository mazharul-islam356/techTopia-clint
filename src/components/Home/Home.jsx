import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import Services from "./Our-Services/Services";



const Home = () => {
 
  
    const data = useLoaderData()
     console.log(data);
   
    
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/7bmJpK1/modern-stationary-collection-arrangement.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

    <Card></Card>

    <Services></Services>

    </div>
  );
};

export default Home;
