import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Return = () => {
  const lendFromTamplet = {
    productName: "",
    quantity: "",
    mrp: "",
    costPrice: "",
    returnDate: "",
  };
  const [returnProduct, setReturnProduct] = useState([lendFromTamplet]);

  const addMore = () => {
    setReturnProduct([...returnProduct, lendFromTamplet]);
  };

  const removeProduct = (index) => {
    const newReturnProduct = returnProduct.filter(
      (returnProduct, i) => i !== index
    );
    setReturnProduct(newReturnProduct);
  };

  const onChange = (event, index) => {
    const updatedProduct = returnProduct.map((returnProduct, i) =>
      index === i
        ? Object.assign(returnProduct, {
            [event.target.name]: event.target.value,
          })
        : returnProduct
    );
    setReturnProduct(updatedProduct);
  };

  const hendelSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold">Lend Stocks</h1>
        <div className="divider"></div>
      </div>

      <div>
        <form onSubmit={hendelSubmit}>
          {returnProduct?.map((returnProduct, index) => {
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
                    value={returnProduct.productName}
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
                    value={returnProduct.quantity}
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
                    value={returnProduct.mrp}
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
                    value={returnProduct.costPrice}
                    placeholder="Cost Price"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Return Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="returnDate"
                    onChange={(event) => onChange(event, index)}
                    value={returnProduct.returnDate}
                    placeholder="Return Date"
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
            Lend
          </button>
        </div>
      </div>
    </section>
  );
};

export default Return;
