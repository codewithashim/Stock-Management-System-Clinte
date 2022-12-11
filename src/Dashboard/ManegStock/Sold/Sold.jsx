import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Sold = () => {
  const soldFromTamplet = {
    productName: "",
    quantity: "",
    mrp: "",
    costPrice: "",
    soldDate: "",
    status: "sold",
  };
  const [sold, setSold] = useState([soldFromTamplet]);

  const addMore = () => {
    setSold([...sold, soldFromTamplet]);
  };

  const removeProduct = (index) => {
    const newSold = sold.filter((sold, i) => i !== index);
    setSold(newSold);
  };

  const onChange = (event, index) => {
    const updatedProduct = sold.map((sold, i) =>
      index === i
        ? Object.assign(sold, { [event.target.name]: event.target.value })
        : sold
    );
    setSold(updatedProduct);
  };

  const hendelSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/soldStock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sold }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Succesfuly Sold !", "You clicked the button!", "success");
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
        <h1 className="text-2xl font-bold">Sold Stocks</h1>
        <div className="divider"></div>
      </div>
      <div>
        <form onSubmit={hendelSubmit}>
          {sold?.map((sold, index) => {
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
                    value={sold.productName}
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
                    value={sold.quantity}
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
                    value={sold.mrp}
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
                    value={sold.costPrice}
                    placeholder="Cost Price"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Sold Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="soldDate"
                    onChange={(event) => onChange(event, index)}
                    value={sold.soldDate}
                    placeholder="Sold Date"
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
            Sold
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sold;
