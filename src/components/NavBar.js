import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "24px",
    margin: "0 12px 12px",
    background: "purple",
    textDecoration: "none",
    color: "orange",
}

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={ linkStyles }
                activeStyle={{
                    background: "purple",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/watchlist"
                exact
                style={ linkStyles }
                activeStyle={{
                    background: "purple"
                }}
            >
                Watch List
            </NavLink>
            <NavLink
                to="/about"
                exact
                style={ linkStyles }
                activeStyle={{
                    background: "purple"
                }}
            >
                About
            </NavLink>
        </div>
    )
}

export default NavBar;