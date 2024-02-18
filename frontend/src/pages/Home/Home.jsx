import './Home.scss'
import { Post } from "../../components"
import api from "../../utilis/baseUrl"
import { useQuery } from "@tanstack/react-query"
const Home = () => {

    const { data, error, isLoading } = useQuery({ queryKey: ['posts'], queryFn: () => api.get("/api/post/viewPosts") })


    if (isLoading) {
        return <p>Loading...</p>
    }

    let posts;

    if (!isLoading) {
        posts = data.data.data
    }


    return (
        <div className="home">
            {posts.map(post => <Post key={post._id} post={post} />)}
        </div>
    )
}

export default Home