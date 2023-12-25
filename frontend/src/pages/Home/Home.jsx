import React from 'react'
import './Home.scss'
import { Post } from "../../components"
const Home = () => {
    return (
        <div className="home">
            <Post />
            <Post />
        </div>
    )
}

export default Home