import React, { useState } from 'react'
import { TextEditor } from "../../components"
import api from '../../utilis/baseUrl'
import './CreatePost.scss'
const CreatePost = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const [title, setTitle] = useState("")

    const [content, setContent] = useState("")

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(event.target.files)
    };

    const config = {
        "headers": {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDA5ZTdjNjllNDNmNGUzNTRmYjQ5YiIsInVzZXJuYW1lIjoicmlzaHUiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE3MDgyNzc3MzAsImV4cCI6MTcwODM2NDEzMH0.i-57p2_j7DgjT6FiYcEqlClbN1Xjo0jAs3NFKk0ITNg`,
        }
    }

    const submitHandler = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('title', title);
        formData.append('content', content);

        try {

            const resp = await api.post("/api/post/newPost", formData,config)

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