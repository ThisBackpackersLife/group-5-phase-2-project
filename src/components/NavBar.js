import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12ps",
    margin: "0 6px 6px",
    background: "purple",
    textDecoration: "none",
    color: "yellow",
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
                to="/movielist"
                exact
                style={ linkStyles }
                activeStyle={{
                    background: "purple"
                }}
            >
                Movie List
            </NavLink>
        </div>
    )
}

export default NavBar;