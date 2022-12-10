import React from "react";
import heroBg from "../../../Assects/hero.gif";

const Home = () => {
  return (
    <section
      className="h-full w-full"
      style={{
        backgroundImage: `url(${heroBg})`,
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="flex flex-col h-full justify-center p-6">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to <br /> Stock Management
        </h1>
      </div>
    </section>
  );
};

export default Home;
