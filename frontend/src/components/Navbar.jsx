import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/CSVison-Logo.png";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo-container">
                <img src={Logo} className="logo" alt="CSVision Logo" />
            </div>
        </nav>
    )
}

export default Navbar;