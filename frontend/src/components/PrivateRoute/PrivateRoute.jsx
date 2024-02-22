import {  Navigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"


const PrivateRoute = ({ children }) => {

    const { activeUser } = useContext(AuthContext)

    console.log(activeUser)

    if (JSON.stringify(activeUser) === "{}") {
        return <Navigate to="/signin" replace={true} />
    }

    return (
        children
    )
}

export default PrivateRoute