import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";

// Import the local background image from your Assets folder
import localBackgroundImage from "../../Assets/back.png";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "6842b313007a415846befdf7", // Default role ID
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { setUser: setAuthUser, setToken } = useContext(AuthContext);

  const mutation = useMutation(
    async (userData) => {
      const response = await api.post('http://localhost:7000/api/users/signup', { user: userData });
      return response.data;
    },
    {
      onSuccess: (data) => {
        setIsSubmitting(false);
        setSuccessMessage("Signup successful! Please check your email to verify your account.");
      },
      onError: (error) => {
        setIsSubmitting(false);
        setError(error.response?.data?.message || "An unknown error occurred during signup.");
      },
    }
  );

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!user.name || !user.email || !user.password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!validateEmail(user.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (user.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (user.password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!acceptTerms) {
      setError("You must accept the Terms & Conditions.");
      return;
    }
    
    setIsSubmitting(true);
    mutation.mutate(user);
  };
  
  const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20c0-1.341-.138-2.65-.389-3.917z"></path>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.657-3.657-11.303-8H6.393c3.56,8.023,12.04,14,21.607,14L24,44z"></path>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.372,44,30.038,44,24C44,22.659,43.862,21.34,43.611,20.083z"></path>
    </svg>
  );

  return (
    // The main container now uses your local background image
    <div className='flex items-center justify-center min-h-screen w-full p-4 bg-cover bg-center' 
         style={{backgroundImage: `url(${localBackgroundImage})`}}>

        {/* This overlay creates the blur effect over the background image */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>

        {/* The modal is set to 'relative' to appear on top of the blurred overlay */}
        <div className="relative w-full max-w-4xl flex bg-white shadow-2xl rounded-xl overflow-hidden">
        
            {/* Left Side with Image */}
            <div className="w-1/2 hidden lg:block" style={{
                backgroundImage: "url('https://i.imgur.com/xO433vD.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-white tracking-wide">NEO TEMPLATES</h2>
                </div>
            </div>

            {/* Right Side with Form */}
            <div className="w-full lg:w-1/2 p-8 overflow-y-auto" style={{maxHeight: '90vh'}}>
                <button onClick={() => navigate('/')} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

                <h1 className="text-3xl font-bold text-gray-800 mb-6">Create an Account</h1>
                
                {successMessage ? (
                    <div className="text-center p-4">
                        <h3 className="text-xl font-semibold text-green-600">Success!</h3>
                        <p className="mt-2 text-gray-700">{successMessage}</p>
                        <button onClick={() => navigate('/login')} className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                            Proceed to Login
                        </button>
                    </div>
                ) : (
                    <>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Form fields remain the same */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type='text' name="name" value={user.name} onChange={handleInputChange} placeholder='Enter your full name' required
                                    className='mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type='email' name="email" value={user.email} onChange={handleInputChange} placeholder='Enter your email' required
                                    className='mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type='password' name="password" value={user.password} onChange={handleInputChange} placeholder='Create a password' required
                                    className='mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm your password' required
                                    className='mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" name="terms" type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-medium text-gray-700">I accept the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a></label>
                                </div>
                            </div>

                            {error && <p className='text-red-500 text-sm font-medium'>{error}</p>}

                            <button type='submit' disabled={isSubmitting}
                            className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-blue-400'
                            >
                            {isSubmitting ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        <div className="mt-4 flex items-center justify-center">
                            <div className="border-t border-gray-300 flex-grow"></div>
                            <span className="mx-4 text-sm text-gray-400">or</span>
                            <div className="border-t border-gray-300 flex-grow"></div>
                        </div>
                        
                        <button className="w-full mt-4 flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                            <GoogleIcon />
                            <span className="font-medium text-gray-700">Sign up with Google</span>
                        </button>

                        <p className='text-center mt-6 text-sm text-gray-600'>
                            Already have an account?{" "}
                            <Link to='/login' className='font-medium text-blue-600 hover:underline'>
                            Log in
                            </Link>
                        </p>
                    </>
                )}
            </div>
        </div>
    </div>
  );
};

export default Signup;