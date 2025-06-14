import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import backgroundImage from "../../Assets/back.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const mutation = useMutation(
    async (loginData) => {
      setLoading(true);
      const response = await api.post("http://localhost:7000/api/users/login", loginData);
      return response.data;
    },
    {
      onSuccess: (data) => {
        setLoading(false);
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("orgId", data.user.orgId);
        navigate("/projects");
      },
      onError: (error) => {
        setLoading(false);
        setError(error.response?.data?.message || "Login failed. Please check your credentials.");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    mutation.mutate({ email, password });
  };

  const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303..." />
    </svg>
  );

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
      
      {/* 🔹 Blurred Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* 🔹 Login Card (Not Blurred) */}
      <div className="relative z-10 w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden flex">

        {/* Left Panel with Illustration */}
        <div className="w-1/2 hidden lg:flex flex-col justify-between items-center bg-black/50 text-white p-8">
          <h2 className="text-2xl font-bold">NEO TEMPLATES</h2>
          <img
            src="https://images.unsplash.com/photo-1589421226462-9593206b12a3?q=80&w=2952&auto=format&fit=crop"
            alt="Login Illustration"
            className="max-w-sm rounded-md"
          />
        </div>

        {/* Right Panel with Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white">
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h1 className="text-3xl font-bold text-gray-800 mb-8">Log In</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-blue-400"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-sm text-gray-400">or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <button className="w-full mt-6 flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
            <GoogleIcon />
            <span className="font-medium text-gray-700">Sign up with Google</span>
          </button>

          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-blue-600 hover:underline">
              Create account
            </Link>
          </p>

          <p className="text-center text-xs text-gray-400 mt-10">
            © Neo Template 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
