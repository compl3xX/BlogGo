import React, { useContext } from 'react'
import './UserProfile.scss'
import { useQuery } from "@tanstack/react-query"
import api from "../../utilis/baseUrl"
import { AuthContext } from "../../context/AuthContext"
import Button from "../../components/Button/Button"


const UserProfile = () => {

    const { config } = useContext(AuthContext)

    const { data, isFetched } = useQuery({ queryKey: ['userProfileData'], queryFn: () => api.get('/api/user/userprofile', config) })

    const userInfo = isFetched == true ? data.data.res : {}

    console.log(userInfo)

    return (
        <>
            <div className="container">
                <div className="userInfo_container">
                    <p>Username<span>{userInfo.username}</span></p>
                    <p>Email<span>{userInfo.email}</span></p>
                    <p>Account Created<span>{new Date(userInfo.updatedAt).toDateString()}</span></p>
                </div>
                <div className="btn_container">
                    <Button>Edit Profile</Button>
                    <Button>Change Password</Button>
                </div>
            </div>

        </>
    )
}

export default UserProfile