import React from 'react'
import './Post.scss'
import DOMPurify from 'dompurify';

const Post = ({ post }) => {

    console.log(post)

    const sanitizedValue = DOMPurify.sanitize(post.content, { ALLOWED_TAGS: [] })

    const date = post.publishDate.substr(0, 10);

    return (
        <div className="post">
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