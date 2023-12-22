import React from 'react'
import { NavLink } from "react-router-dom"
import './NavBar.scss'
const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to='/'>Register</NavLink>
            <NavLink to='/signIn'>Login</NavLink>
        </div>
    )
}

export default NavBar