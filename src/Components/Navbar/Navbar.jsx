import React from "react";
import "./Navbar.css";
import logo from "./gllogo.jpg";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className="logo-container">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div>GlobalLogic</div>
                </div>
                <div className="links-container">
                    <div
                        className="accordian"
                        onMouseEnter={props.accordianClick}
                        onMouseLeave={props.accordianClick}
                    >
                        <div className="Link">About</div>

                        <div className="arrow-btn">
                            <i
                                className={
                                    props.accordian
                                        ? "fa-solid fa-angle-up"
                                        : "fa-solid fa-angle-down"
                                }
                            ></i>
                        </div>
                    </div>
                    <NavLink to="/home" className="link1">
                        <div >Home</div>
                    </NavLink>
                    <NavLink to="/admin"  className="link2">
                        <div>Admin</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
