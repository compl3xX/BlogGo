import { useState } from 'react'
import { Button } from "../../components"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './SignIn.scss'


const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const signInHandler = async (e) => {

        e.preventDefault();

        //send username,password and get token
        try {

            const { data } = await axios.post('http://localhost:4000/api/user/signIn', { username, password })
            localStorage.setItem('token', data.token)
            navigate('/home')

            console.log(data)

        }
        catch (err) {
            setError(err.response.data.error)
            console.log(err.response.data.error)
        }

    }

    return (
        <div className="sign_in_container">

            <div className="sign_in_fields">
                {error && <div className="error">{error}</div>}
                <h1>Login</h1>
                <input placeholder=" Enter username..."
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input placeholder=" Enter password..."
                    onChange={(e) => setPassword(e.target.value)}
                    value={password }
                />
                <Button handel={signInHandler} BntText="Login" />
            </div>
        </div>
    )
}

export default SignIn