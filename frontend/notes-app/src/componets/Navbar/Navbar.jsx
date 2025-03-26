import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate(); // FIX: useNavigate should be called as a function

    const logout = () => {
        // TODO: Implement logout functionality
        navigate('/Signin');
    };

    return (
        <div className="bg-white flex items-center justify-between px-4 py-2 shadow-md">
            <h2 className="text-xl font-medium text-black">Notes</h2>
            <ProfileInfo onLogout={logout} />
        </div>
    );
};

export default Navbar;
