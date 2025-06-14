import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";
import loginlogo from "../../Assets/login-logo.png";
import backgroundImage from "../../Assets/back.png";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }

    if (password.length < 8) {
      return setErrorMessage("Password should have more than 8 characters");
    }

    try {
      const res = await api.post(`/users/reset-password/${token}`, { password });
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage("Error resetting password");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
      
      {/* 🔹 Background Image (Blurred) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* 🔹 Reset Password Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden flex">

        {/* Left Panel */}
        <div className="w-1/2 hidden lg:flex flex-col justify-between items-center bg-black/50 text-white p-8">
          <h2 className="text-2xl font-bold">NEO TEMPLATES</h2>
          <img
            src="https://images.unsplash.com/photo-1589421226462-9593206b12a3?q=80&w=2952&auto=format&fit=crop"
            alt="Illustration"
            className="max-w-sm rounded-md"
          />
        </div>

        {/* Right Panel - Reset Password Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <img src={loginlogo} alt="Neo" className="w-40" />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
            Reset Password
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Create a new password to secure your account and get back on track.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Reset Password
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-10">
            © 2024 NEO India, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
