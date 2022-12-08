import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../Assects/notFound.gif";

const NotFound = () => {
  return (
    <section className="p-6 flex justify-center items-center flex-col">
      <img src={NotFoundImg} alt="404 Not Found" className="mt-4" />

      <div>
        <Link to="/" className="btn btn-primary btn-sm">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
