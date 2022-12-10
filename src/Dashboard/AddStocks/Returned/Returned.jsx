import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Returned = () => {
  const returnFromTamplet = {
    productName: "",
    quantity: "",
    mrp: "",
    costPrice: "",
    returnedDate: "",
    returnedBy: "",
  };
  const [returned, setReturned] = useState([returnFromTamplet]);
  const addMore = () => {
    setReturned([...returned, returnFromTamplet]);
  };

  const onChange = (event, index) => {
    const updatedProduct = returned.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [event.target.name]: event.target.value })
        : returned
    );
    setReturned(updatedProduct);
  };

  const removeProduct = (index) => {
    const newReturned = returned.filter((returned, i) => i !== index);
    setReturned(newReturned);
  };

  const hendelSubmit = (event) => {
    event.preventDefault();
    const returnedStock = Object.assign({}, returned);
    console.log(returnedStock);

    fetch("http://localhost:8000/returnedStock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(returnedStock),
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
        <h1 className="text-2xl font-bold">Returned Stocks</h1>
        <div className="divider"></div>
      </div>

      <div>
        <form onSubmit={hendelSubmit}>
          {returned?.map((returned, index) => {
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
                    value={returned.productName}
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
                    value={returned.quantity}
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
                    value={returned.mrp}
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
                    value={returned.costPrice}
                    placeholder="Cost Price"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Returned Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="returnedDate"
                    onChange={(event) => onChange(event, index)}
                    value={returned.returnedDate}
                    placeholder="Returned Date"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Returned By</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="returnedBy"
                    onChange={(event) => onChange(event, index)}
                    value={returned.returnedBy}
                    placeholder="Returned By"
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
            Returned
          </button>
        </div>
      </div>
    </section>
  );
};

export default Returned;
