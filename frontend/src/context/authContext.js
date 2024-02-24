import { createContext, useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query"
import api from "../utilis/baseUrl";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {


    const [activeUser, setActiveUser] = useState({})

    const [config, setConfig] = useState({
        "headers": {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })

    const { data, isError, error, isFetched } = useQuery({ queryKey: ['auth'], queryFn: () => api.get("/api/user/userprofile", config) })


    useEffect(() => {
        if (isError) {
            localStorage.removeItem("token");
            setActiveUser({})
        }
    }, [isError]);


    useEffect(() => {
        if (data) {
            setActiveUser(data.data.res);
        }
    }, [data]);



    return (
        <AuthContext.Provider value={{ activeUser, setActiveUser, config, setConfig }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider


