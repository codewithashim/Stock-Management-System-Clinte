import React, { useState } from "react";
import Swal from "sweetalert2";

import { FaTrashAlt } from "react-icons/fa";

const Purchased = () => {
  const purchesFromTamplet = {
    productName: "",
    quantity: "",
    mrp: "",
    costPrice: "",
    purchasedDate: "",
    purchasedFrom: "",
  };
  const [purches, setPurches] = useState([purchesFromTamplet]);
  const addMore = () => {
    setPurches([...purches, purchesFromTamplet]);
  };

  const removeProduct = (index) => {
    const newPurches = purches.filter((purches, i) => i !== index);
    setPurches(newPurches);
  };

  const onChange = (event, index) => {
    const updatedProduct = purches.map((purches, i) =>
      index === i
        ? Object.assign(purches, { [event.target.name]: event.target.value })
        : purches
    );
    setPurches(updatedProduct);
  };

  const hendelSubmit = (event) => {
    event.preventDefault();
    const purchesStock = Object.assign({}, purches);
    console.log(purchesStock);

    fetch("http://localhost:8000/purchesdStock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchesStock),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          "Succesfuly Purchesed From Factory !",
          "You clicked the button!",
          "success"
        );
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <section className="p-4">
      <div>
        <h1 className="text-2xl font-bold">Purchased Stocks</h1>
        <div className="divider"></div>
      </div>
      <div>
        <form onSubmit={hendelSubmit}>
          {purches?.map((purches, index) => {
            return (
              <section
                key={index}
                className="grid gap-4 md:grid-cols-2 card border p-4 w-3/4 m-4"
              >
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="productName"
                    onChange={(event) => onChange(event, index)}
                    value={purches.productName}
                    placeholder="Product Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="quantity"
                    onChange={(event) => onChange(event, index)}
                    value={purches.quantity}
                    placeholder="Quantity"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">MRP</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="mrp"
                    onChange={(event) => onChange(event, index)}
                    value={purches.mrp}
                    placeholder="Product MRP"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Cost Price</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="costPrice"
                    onChange={(event) => onChange(event, index)}
                    value={purches.costPrice}
                    placeholder="Cost Price"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Purchased Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="purchasedDate"
                    onChange={(event) => onChange(event, index)}
                    value={purches.purchasedDate}
                    placeholder="Purchased Date"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Purchased From</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="purchasedFrom"
                    onChange={(event) => onChange(event, index)}
                    value={purches.purchasedFrom}
                    placeholder="Purchased From"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="flex">
                  <button
                    className="btn btn-error"
                    onClick={() => removeProduct(index)}
                  >
                    <FaTrashAlt className="text-2xl mr-2"></FaTrashAlt>
                    Delete
                  </button>
                </div>
              </section>
            );
          })}
        </form>

        <div className="pt-2 ">
          <button className="btn btn-primary mx-4" onClick={() => addMore()}>
            Add More
          </button>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={hendelSubmit}
          >
            Purches
          </button>
        </div>
      </div>
    </section>
  );
};

export default Purchased;
