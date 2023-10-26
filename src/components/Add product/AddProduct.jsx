const AddProduct = () => {
  const handleForm = e => {
    e.preventDefault()
    const form = e.target;

    const name = form.name.value
    const image = form.image.value
    const price = form.price.value
    const type = form.type.value
    const shortDescription = form.shortDescription.value
    const ratting = form.ratting.value

    const formData = { name,image,price,shortDescription,ratting,type }
    console.log(formData);
  }

  return (
    <div>
      <div className="flex border justify-center">
        <form onSubmit={handleForm}>
          {/* ****01**** */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Brand/Catagory</span>
            </label>
            <select
            name="type"
            className="select select-bordered">
              <option disabled selected>
                Pick category
              </option>
              <option>Samsung</option>
              <option>Apple</option>
              <option>Google</option>
              <option>Xaomi</option>
              <option>Nokia</option>
              <option>OnePlus</option>
            </select>
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
              <span className="label-text">Name</span>
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
