import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import './NavBar.scss'
import avatar from "../../assests/avatar.png"

const NavBar = () => {

    const { pathname } = useLocation();

    let hidden = true;

    if (pathname === '/signup' || pathname === '/signIn' || pathname === '/createpost') hidden = false

    return (
        <div className="navbar">
            <NavLink to='/home'>
                <h3 >BlogGo</h3>
            </NavLink>
            {hidden && <div className="navbar_left">
                <NavLink className="create" to='/createpost'>Create</NavLink>
                <NavLink className="profile"><img src={avatar} /></NavLink>
            </div>}
            {/* {hidden && <>
                <NavLink to='/signup'>Register</NavLink>
                <NavLink to='/signin'>Login</NavLink>
            </>} */}
        </div>
    )
}

export default NavBar