import React from 'react'

import './SignIn.scss'
import { Button } from "../../components"

const signInHandler = () => {

}

const SignIn = () => {

    return (
        <div className="sign_in">
            <h2>Login</h2>
            <input placeholder=" Enter username..." />
            <input placeholder=" Enter password..." />
            <Button handel={signInHandler} BntText="Login" />
        </div>
    )
}

export default SignIn