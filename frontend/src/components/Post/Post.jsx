import React from 'react'
import './Post.scss'
import DOMPurify from 'dompurify';
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    console.log(post)

    const navigate = useNavigate()

    const sanitizedValue = DOMPurify.sanitize(post.content, { ALLOWED_TAGS: [] })

    const date = post.publishDate.substr(0, 10);


    const clickHandler = () => {
        navigate(`/post/${post.slug}`)
    }

    return (
        <div className="post" onClick={clickHandler}>
            <img src={post.bannerImg} alt="post_img" />
            <div className="post_text">
                <h2>{post.title}</h2>
                <p>{sanitizedValue}</p>
                <span>{date}</span>
            </div>
        </div>
    )
}

export default Post