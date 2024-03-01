import React, { useContext } from 'react'
import './DetailedPost.scss'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import api from "../../utilis/baseUrl";
import parse from 'html-react-parser';
import { AuthContext } from "../../context/AuthContext";

const DetailedPost = () => {

    const { slug } = useParams();

    const { activeUser } = useContext(AuthContext)

    const { data, isFetched } = useQuery({ queryKey: ['post'], queryFn: () => api.get(`/api/post/${slug}`) })

    let postDetail = isFetched === true ? data.data.data : {};

    console.log(postDetail)

    return (
        isFetched ?
            <div className="detailed_post_container">
                <div className="detailed_post">
                    <h2>{postDetail.title}</h2>
                    <section>
                        <div className="post_author">
                            <span>Author: {postDetail.author.username}</span>
                            <span>{new Date(postDetail.createdAt).toDateString()}</span>
                        </div>
                        <img src={postDetail.bannerImg} />
                        <p>{parse(postDetail.content)}</p>
                    </section>
                    <button onClick={async () => { await api.post(`/api/post/${slug}/like`, { id: activeUser._id }) }}>Like</button>
                </div>
            </div> : <p>Loading...</p>
    )
}

export default DetailedPost