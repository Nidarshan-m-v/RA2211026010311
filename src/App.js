import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";
import AllUsers from "./pages/AllUsers";

const App = () => {
  return (
    <Router>
      
      <nav className="p-4 bg-gray-900 text-white flex justify-center space-x-6">
        <NavLink to="/" className="hover:text-blue-400 transition" end>Top Users</NavLink>
        <NavLink to="/trending" className="hover:text-blue-400 transition">Trending Posts</NavLink>
        <NavLink to="/feed" className="hover:text-blue-400 transition">Feed</NavLink>
        <NavLink to="/all-users" className="hover:text-blue-400 transition">All Users</NavLink> 
      </nav>

      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/all-users" element={<AllUsers />} /> 
      </Routes>
    </Router>
  );
};

export default App;
