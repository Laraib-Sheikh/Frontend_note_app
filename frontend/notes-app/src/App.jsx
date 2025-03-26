
import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";



const routes = [
  <Router>
    <Routes>
      <Route path="/Dashboard" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  </Router>
]

const App = () => {
    return (
        <div>
           {routes}
        </div>
    );
}

export default App;