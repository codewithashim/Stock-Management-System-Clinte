import React from "react";
import { useQuery } from "@tanstack/react-query";
import BorrowedProducts from "../AddStocks/Borrowed/BorrowedProducts/BorrowedProducts";

const StockOverVews = () => {
  const { data: allAddedStock = [], isLoading, refetch } = useQuery({
    queryKey: ["allAddedStock"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/allProduct`);
      const data = await res.json();
      return data;
    },
  });

  console.log(allAddedStock);
  const allBrrowedStock = allAddedStock[0]?.borrowedStocks;
  const allPurchesdStocks = allAddedStock[0]?.purchesdStocks;
  const allReturnedStocks = allAddedStock[0]?.returnedStocks;
  // console.log(allAddedStock[0]?.borrowedStocks);

  return (
    <section className="p-4">
      <div className="text-center font-bold text-2xl">
        <h1>All Stock Overview</h1>
        <div className="divider"></div>
      </div>
      <div className="flex justify-center items-center gap-6">
        {/* =========1======== */}
        <div>
          <div className="grid p-4 h-20 rounded bg-primary text-primary-content place-content-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Purchased Stocks
              </h2>
              <p>Total : {allPurchesdStocks?.length}</p>
            </div>

            <div>
              <BorrowedProducts></BorrowedProducts>
            </div>
          </div>
        </div>

        {/* ========2====== */}

        <div>
          <div className="grid p-4 h-20 rounded bg-primary text-primary-content place-content-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Borrowed Stocks
              </h2>
              <p>Total : {allBrrowedStock?.length}</p>
            </div>

            <div></div>
          </div>
        </div>

        {/* ========3====== */}

        <div>
          <div className="grid p-4 h-20 rounded bg-primary text-primary-content place-content-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Returned Stocks
              </h2>
              <p>Total : {allReturnedStocks?.length}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockOverVews;
