import React from "react";
import swal from "sweetalert";
const AddCoffee = () => {
  const handleAddcoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    //send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal({
            title: "success!",
            text: "Coffee Added Successfully!",
            icon: "success",
            button: "OK",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24 max-w-5xl m-auto ">
      <h3 className="text-3xl font-extrabold text-center">Add New Coffee</h3>
      <p className="text-center">
        Sure! What kind of coffee text are you looking for? A description for a
        menu, a poem, or something else? Let me know the style or context you
        have in mind!
      </p>
      <form onSubmit={handleAddcoffee}>
        <div className="md:flex mb-8">
          <div className="md:w-1/2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Coffee name here"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className=" md:w-1/2 md:ml-4">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        {/* new row form */}

        <div className="md:flex mb-8">
          <div className="md:w-1/2 ">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="md:w-1/2 md:ml-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Supplier Name</span>
              </div>
              <input
                type="text"
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className=" md:flex mb-8 ">
          <div className="md:w-1/2 ">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className=" md:w-1/2 md:ml-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
