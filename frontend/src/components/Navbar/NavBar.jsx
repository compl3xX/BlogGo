import React from 'react'
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <div>
            <NavLink to='/'>SignUp</NavLink>
            <NavLink to='/signIn'>SignIn</NavLink>
        </div>
    )
}

export default NavBar