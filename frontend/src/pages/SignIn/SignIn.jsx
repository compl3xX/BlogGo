import React from 'react'

const signInHandler = () => {
       
}

const SignIn = () => {

    return (
        <div>
            <input placeholder="Enter username..." />
            <input placeholder="Enter password..." />
            <button onClick={signInHandler}>Sign In</button>
        </div>
    )
}

export default SignIn