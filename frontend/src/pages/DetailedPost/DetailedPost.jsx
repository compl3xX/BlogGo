import React from 'react'
import './DetailedPost.scss'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import api from "../../utilis/baseUrl";
import parse from 'html-react-parser';

const DetailedPost = () => {

    const { slug } = useParams();

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
                </div>
            </div> : <p>Loading...</p>
    )
}

export default DetailedPost