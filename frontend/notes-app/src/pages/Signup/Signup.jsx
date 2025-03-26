import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../../componets/Navbar/Navbar";


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup form submitted");
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center mt-10">
                <div className="bg-white p-6 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Full Name</label>
                            <input 
                                type="text" 
                                className="w-full p-2 border rounded mt-1" 
                                placeholder="Enter your full name" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input 
                                type="email" 
                                className="w-full p-2 border rounded mt-1" 
                                placeholder="Enter your email" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <div className="relative flex items-center">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="w-full p-2 border rounded mt-1 pr-10" 
                                    placeholder="Create a password" 
                                    required 
                                />
                                <button 
                                    type="button" 
                                    className="absolute right-3 text-gray-500 flex items-center" 
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/Signin" className="text-blue-500 hover:underline">
                            Sign in here.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
