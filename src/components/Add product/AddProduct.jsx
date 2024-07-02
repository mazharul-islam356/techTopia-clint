const AddProduct = () => {
  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;

    const brandType = form.brandType.value;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const type = form.type.value;
    const shortDescription = form.shortDescription.value;
    const ratting = form.ratting.value;

    const formData = {
      brandType,
      name,
      image,
      price,
      shortDescription,
      ratting,
      type,
    };
    console.log(formData);

    fetch("https://assingment-10.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("innside the post response", data);
      });
  };

  return (
    <div>
      <div className="flex border justify-center">
        <form onSubmit={handleForm}>
          <h1 className="text-3xl font-bold text-center py-4 underline">
            Add Product
          </h1>

          {/* ****01**** */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Brand/Catagory</span>
            </label>
            <select name="type" className="select select-bordered">
              <option disabled selected>
                Pick a catagory
              </option>
              <option>Samsung</option>
              <option>Apple</option>
              <option>Google</option>
              <option>Xiaomi</option>
              <option>Nokia</option>
              <option>OnePlus</option>
            </select>
          </div>

          {/* type */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Brand type</span>
            </label>
            <input
              name="brandType"
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* ****02**** */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image URL:</span>
            </label>
            <input
              name="image"
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* ****03**** */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* ****04**** */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* ****05**** */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              name="shortDescription"
              placeholder=""
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
          </div>
          {/* ****06**** */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Ratting</span>
            </label>
            <input
              name="ratting"
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn btn-wide my-4">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
