import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/fetcher";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axiosInstance.post("/register", data).then(() => {
      navigate("/login");
    });
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md border border-gray-500">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-600 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+$/i,
            })}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="w-full p-2 border rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <p>
          Already have an account?{" "}
          <a
            className="text-[#0573F0] cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </a>
        </p>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
