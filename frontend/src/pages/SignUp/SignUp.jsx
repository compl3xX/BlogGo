import React, { useState } from 'react'
import api from "../../utilis/baseUrl"
import { useNavigate } from "react-router-dom";
import './SignUp.scss'
import { Button } from "../../components"


const SignUp = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const registerUserHandler = () => {

        api.post('/api/user/signUp', { username, email, password }).then(resp => {
            alert('User is registered Successfully')
            navigate("/home")
            console.log("Success", resp)
        }).catch(err => {
            console.log("Error", err)
        })
    }


    return (
        <div className="sign_up">

            <h2>Register</h2>

            <input placeholder=" Enter Username..."
                type="text"
                onChange={e => setUsername(e.target.value)}
                value={username} />

            <input placeholder=" Enter Email..."
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email} />

            <input placeholder=" Enter Password..."
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password} />

            <Button handel={registerUserHandler} >Register</Button>

        </div>
    )
}

export default SignUp