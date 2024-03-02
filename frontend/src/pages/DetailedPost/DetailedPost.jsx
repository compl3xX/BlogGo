import { useContext } from 'react'
import './DetailedPost.scss'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import api from "../../utilis/baseUrl";
import parse from 'html-react-parser';
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import ReactQuill from "react-quill";

const DetailedPost = () => {

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


    return (
        isFetchedAfterMount ?
            <div className="detailed_post_container">
                <div className="detailed_post">
                    <h2>{postDetail?.title}</h2>
                    <section>
                        <div className="post_author">
                            <span>Author: {postDetail?.author.username}</span>
                            <span>{new Date(postDetail?.createdAt).toDateString()}</span>
                        </div>
                        <img src={postDetail?.bannerImg} />
                        {/* <p>{parse(postDetail?.content)}</p> */}
                        <p>
                            <ReactQuill
                                theme="bubble"
                                value={postDetail?.content}
                                readOnly={true}
                            >
                            </ReactQuill >
                        </p>
                    </section>
                    <div>
                        <div className="post_likes">
                            <button className="icon_button" onClick={handelLike}>{userLiked ? <AiFillLike /> : <AiOutlineLike />}</button>
                            <span className="like_count">{postDetail?.likeCount}</span>
                        </div>
                    </div>
                </div>
            </div> : <p>Loading...</p>
    )
}

export default DetailedPost