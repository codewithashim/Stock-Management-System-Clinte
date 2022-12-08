import React, { useContext } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/UserContext";
import useToken from "../../Hooks/useToken";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { signUp, updateUserDetails } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }

  const hendelRegister = (data) => {
    console.log(data);
    const { email, password } = data;
    signUp(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Swal.fire(
          "Succesfuly Registration Done !",
          "You clicked the button!",
          "success"
        );
        const profileInfo = {
          displayName: data.fullname,
          photoURL: data.photoURL,
        };
        updateUserDetails(profileInfo)
          .then(() => {
            saveUserInDB(data.email, data.fullname, data.photoURL);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const saveUserInDB = (email, name, photoURL) => {
    const user = { email, name, photoURL };
    console.log(user);
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <section className="p-10">
      <div className="card shadow-xl mx-auto md:w-2/5 p-6 border">
        <div className="cardDetails">
          <h2 className="text-2xl font-bold text-center text-primary">
            Register Now
          </h2>
        </div>
        <form onSubmit={handleSubmit((data) => hendelRegister(data))}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="fullname"
              {...register("fullname", { required: true })}
              placeholder="Your Name"
              className="input input-bordered"
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Name filde is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photoURL"
              {...register("photoURL", { required: true })}
              placeholder="Your Photo"
              className="input input-bordered"
            />
            {errors.photoURL?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                PhotoURL filde is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
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
              type="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                // pattern: {
                //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                //   message:
                //     "Password must be use at least one letter and one number symbol and uppercase letter and lowercase letter",
                // },
              })}
              placeholder="password"
              className="input input-bordered"
            />

            {errors.password?.message && (
              <p role="alert" className="text-red-600 mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Register"
            />
          </div>
          <div className="p-2 text-center">
            <p>
              Already User ?{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
