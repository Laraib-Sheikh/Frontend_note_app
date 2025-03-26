import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../../componets/Navbar/Navbar";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border rounded mt-1" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700">Password</label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="w-full p-2 border rounded mt-1 pr-10" 
                                placeholder="Enter your password" 
                            />
                            <button 
                                type="button" 
                                className="absolute inset-y-0 right-2 flex items-center text-gray-500" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign In</button>
                </form>
                <p className="mt-4 text-sm text-gray-600">Not Registered Yet? {" "} 
                    <Link to='/Signup' className="text-blue-500 hover:underline">
                        Don't have an account?
                    </Link>
                </p>
            </div>
            </div>
           
        </div>
    );
};

export default Signin;
