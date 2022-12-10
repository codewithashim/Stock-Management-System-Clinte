import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Borrowed = () => {
  const borrowedFromTamplet = {
    productName: "",
    quantity: "",
    mrp: "",
    costPrice: "",
    borrowedDate: "",
    borrowedFrom: "",
  };
  const [borrowed, setBorrowed] = useState([borrowedFromTamplet]);
  const addMore = () => {
    setBorrowed([...borrowed, borrowedFromTamplet]);
  };

  const onChange = (event, index) => {
    const updatedProduct = borrowed.map((borrowed, i) =>
      index === i
        ? Object.assign(borrowed, { [event.target.name]: event.target.value })
        : borrowed
    );
    setBorrowed(updatedProduct);
  };

  const removeProduct = (index) => {
    const newReturned = borrowed.filter((borrowed, i) => i !== index);
    setBorrowed(newReturned);
  };

  const hendelSubmit = (event) => {
    event.preventDefault();
    const borrowedStock = Object.assign({}, borrowed);
    console.log(borrowedStock);

    fetch("http://localhost:8000/borrowedStock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(borrowedStock),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          "Succesfuly Returend !",
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
        <h1 className="text-2xl font-bold">Borrowed Stocks</h1>
        <div className="divider"></div>
      </div>
      <div>
        <form onSubmit={hendelSubmit}>
          {borrowed?.map((borrowed, index) => {
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
                    value={borrowed.productName}
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
                    value={borrowed.quantity}
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
                    value={borrowed.mrp}
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
                    value={borrowed.costPrice}
                    placeholder="Cost Price"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Borrowed Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="borrowedDate"
                    onChange={(event) => onChange(event, index)}
                    value={borrowed.borrowedDate}
                    placeholder="Borrowed Date"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Borrowed From</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="borrowedFrom"
                    onChange={(event) => onChange(event, index)}
                    value={borrowed.borrowedFrom}
                    placeholder="Borrowed From"
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
            Borrowed
          </button>
        </div>
      </div>
    </section>
  );
};

export default Borrowed;
