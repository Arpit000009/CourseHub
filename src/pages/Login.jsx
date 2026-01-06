import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
const Login = () => {
  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  let { email, password, role } = formData;

  let handleChange = (e) => {
    let name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      let res = await axios.get(
        `http://localhost:3000/users?email=${email}&password=${password}&role=${role}`
      );
      if (res.status == 200) {
        toast.success("SucessFully Logged In");
        navigate("/");
      }
    }
    setFormData({
      email: "",
      password: "",
      role: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-amber-600">
          Welcome Back
        </h2>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Role */}
        <div>
          Role : Admin
          <input
            type="radio"
            name="role"
            value="admin"
            id=""
            onChange={handleChange}
          />
          User:
          <input
            type="radio"
            value="user"
            name="role"
            onChange={handleChange}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
