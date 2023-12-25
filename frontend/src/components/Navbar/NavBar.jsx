import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import './NavBar.scss'

const NavBar = () => {

    const { pathname } = useLocation();

    let hidden = false;


    if (pathname === '/signup' || pathname === '/signin') hidden = true

    return (
        <div className="navbar">
            <NavLink to='/home'>
                <h3 >BlogGo</h3>
            </NavLink>
            <NavLink style={{ fontSize: "large" }} to='/createpost'>Create Note</NavLink>
            {hidden && <>
                <NavLink to='/signup'>Register</NavLink>
                <NavLink to='/signin'>Login</NavLink>
            </>}
        </div>
    )
}

export default NavBar