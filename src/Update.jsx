import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdatecoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const UpdateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(UpdateCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24 max-w-5xl m-auto ">
      <h3 className="text-3xl font-extrabold text-center">Update Coffee</h3>

      <form onSubmit={handleUpdatecoffee}>
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
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={taste}
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
                defaultValue={supplier}
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
                defaultValue={details}
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
                defaultValue={category}
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
                defaultValue={photo}
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default Update;
