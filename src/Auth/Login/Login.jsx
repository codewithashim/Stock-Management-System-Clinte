import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import LoginImg from "../../Assects/login.svg";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <img src={LoginImg} alt="login" />
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs italic">
                      {" "}
                      Email Fild is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    {...register("password", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-xs italic">
                      Password is required
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-2xl">
                    Are you new user? <Link to="/register">Register</Link>
                  </span>
                </div>
                <div className="form-control mt-3">
                  <button className="btn btn-primary btn-sm" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
