import { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/Searchbar";

const Navbar = () => {
    const navigate = useNavigate(); // FIX: useNavigate should be called as a function
    const [searchQuery, setSearchQuery] = useState('')

    const logout = () => {
        // TODO: Implement logout functionality
        navigate('/Signin');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // TODO: Implement search functionality
    }

    const onClearSearch = () => {
        setSearchQuery('')
    }
    return (
        <div className="bg-white flex items-center justify-between px-4 py-2 shadow-md">
            <h2 className="text-xl font-medium text-black">Notes</h2>
            <SearchBar 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
            />
            <ProfileInfo onLogout={logout} />
        </div>
    );
};

export default Navbar;
