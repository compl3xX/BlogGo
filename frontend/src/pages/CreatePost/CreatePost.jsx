import React, { useContext, useState } from 'react'
import { TextEditor } from "../../components"
import api from '../../utilis/baseUrl'
import './CreatePost.scss'
import { AuthContext } from "../../context/AuthContext"

const CreatePost = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const [title, setTitle] = useState("")

    const [content, setContent] = useState("")

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(event.target.files)
    };


    const { activeUser } = useContext(AuthContext)

    let token = "";

    if (JSON.stringify(activeUser) !== "{}") token = localStorage.getItem("token")

    const config = {
        "headers": {
            authorization: `Bearer ${token} `,
        }
    }

    const submitHandler = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('title', title);
        formData.append('content', content);

        try {

            const resp = await api.post("/api/post/newPost", formData, config)

            console.log('file uploaded succesfully ', resp.data)

        }
        catch (error) {
            console.error('Error uploading file:', error);
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="text_editor_container">
                <input className='TitleInput'
                    placeholder=" Title"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <TextEditor value={content} setValue={setContent} />
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Create Post </button>
            </div>
        </form>
    )
}

export default CreatePost