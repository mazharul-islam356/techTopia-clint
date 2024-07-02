import { useLoaderData } from "react-router-dom";
import Services from "./Our-Services/Services";
import Products from "../Products/Products";
import MeetOurTeam from "./MeetOurTeam";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="mt-2">
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
            <h1 className="mb-5 text-5xl font-bold">Tech for the Future</h1>
            <p className="mb-5">
              Using technology to make the world a better place, from education
              and healthcare to sustainability and environmental protection.
            </p>
          </div>
        </div>
      </div>

      <Products data={data}></Products>

      <Services></Services>

      <MeetOurTeam></MeetOurTeam>
    </div>
  );
};

export default Home;
