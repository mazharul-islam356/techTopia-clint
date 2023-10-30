/* eslint-disable react/prop-types */
const DetailsCard = ({productt}) => {
    console.log(productt);
    const {image,name,shortDescription} = productt || {}



  return (
    <div>
      <div className="hero min-h-screen my-8 rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
              {shortDescription}
            </p>
            <button className="btn btn-info btn-outline">Add product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
