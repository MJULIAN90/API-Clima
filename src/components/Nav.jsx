import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";
//import { About } from "../components/About";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <span className="navbar-brand">Weather App</span>
      </Link>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
