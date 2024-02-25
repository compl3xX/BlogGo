import { useContext, useEffect, useState } from 'react'
import { Button } from "../../components"
import { useNavigate } from "react-router-dom";
import api from "../../utilis/baseUrl"
import './SignIn.scss'
import { AuthContext } from "../../context/AuthContext";



const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const { activeUser, setActiveUser } = useContext(AuthContext)

    useEffect(() => {
        if (JSON.stringify(activeUser) !== "{}") navigate("/home")
    }, [activeUser])



    const signInHandler = async (e) => {

        e.preventDefault();

        //send username,password and get token

        try {
            const { data } = await api.post('/api/user/signIn', { username, password })
            console.log(data.userInfo)
            localStorage.setItem('token', data.token)
            setActiveUser(data.userInfo)
            navigate('/home')
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
                <input type="password" placeholder=" Enter password..."
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <Button handel={signInHandler} BntText="Login" />
            </div>
        </div>
    )
}

export default SignIn