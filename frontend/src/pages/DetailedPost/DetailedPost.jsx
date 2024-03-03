import { useContext, useState } from 'react'
import './DetailedPost.scss'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import api from "../../utilis/baseUrl";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import ReactQuill from "react-quill";
import Comments from "../Comments/Comments";

const DetailedPost = () => {


    const [cmtOpen, setCmtOpen] = useState(false)

    const { slug } = useParams();

    const { activeUser } = useContext(AuthContext)

    const { data, isFetched, refetch, isFetchedAfterMount } = useQuery({
        queryKey: ['post', activeUser._id],
        queryFn: () => api.get(`/api/post/${slug}?id=${activeUser._id}`),
        select: (data) => ({ postDetail: data.data.data, userLiked: data.data.userLiked })
    })


    const { postDetail, userLiked } = data ?? {};

    const handelLike = async () => {
        await api.post(`/api/post/${slug}/like`, { id: activeUser._id })
        refetch()
    }

    console.log(postDetail)


    return (
        isFetchedAfterMount ?
            <>
                {cmtOpen&&<Comments isOpen={cmtOpen} onClose={setCmtOpen} />}
                < div className="detailed_post_container" >
                    <div className="detailed_post">
                        <h2>{postDetail?.title}</h2>
                        <section>
                            <div className="post_author">
                                <span>Author: {postDetail?.author.username}</span>
                                <span>{new Date(postDetail?.createdAt).toDateString()}</span>
                            </div>
                            <img src={postDetail?.bannerImg} />

                            <ReactQuill
                                theme="bubble"
                                value={postDetail?.content}
                                readOnly={true}
                            >
                            </ReactQuill >

                        </section>
                        <div className="likes_comments">
                            <div className="post_likes">
                                <button className="icon_button" onClick={handelLike}>{userLiked ? <AiFillLike /> : <AiOutlineLike />}</button>
                                <span className="like_count">{postDetail?.likeCount}</span>
                            </div>
                            <div>
                                <button className="icon_button" onClick={() => { setCmtOpen(prev => !prev) }}><FaRegCommentAlt /></button>
                            </div>
                        </div>
                    </div>
                </div >
            </> : <p>Loading...</p>
    )
}

export default DetailedPost