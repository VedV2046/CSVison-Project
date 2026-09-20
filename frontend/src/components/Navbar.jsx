import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/CSVison-Logo.png";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo-container">
                <img src={Logo} className="logo" alt="CSVision Logo" />
                <Link to="/history">History</Link>
            </div>
        </nav>
    )
}

export default Navbar;