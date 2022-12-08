import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoginImg from "../../Assects/login.svg";
import { AuthContext } from "../../Context/UserContext";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const { signIn } = useContext(AuthContext);

  const from = location?.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const hendelLogin = (data) => {
    signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoginUserEmail(data.email);

        Swal.fire(
          "Succesfuly Login Done !",
          "You clicked the button!",
          "success"
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <>
      <section className="p-6">
        <div className="hero min-h-screen ">
          <div className="hero-content grid md:grid-cols-2 gap-4">
            <div className="text-center lg:text-left">
              <div>
                <img
                  src={LoginImg}
                  alt="login"
                  style={{
                    width: "80%",
                  }}
                />
              </div>
            </div>
            <div className="card flex-shrink-0 w-2/3  shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(hendelLogin)}>
                <div className="card-body">
                  <div>
                    <h1 className="text-5xl font-bold text-center mb-2">
                      Login now!
                    </h1>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                    {errors.email?.type === "required" && (
                      <p role="alert" className="text-red-600 mt-1">
                        Email filde is required
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    {errors.password?.type === "required" && (
                      <p role="alert" className="text-red-600 mt-1">
                        Password filde is required
                      </p>
                    )}
                    <label className="label">
                      <Link className="label-text-alt link link-hover text-primary">
                        Forgot password?
                      </Link>
                    </label>
                  </div>
                  <div>
                    <h3>
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="link link-hover text-primary"
                      >
                        Register
                      </Link>
                    </h3>
                  </div>
                  <div className="form-control mt-3">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
