import React, { useState } from 'react'
import { TextEditor } from "../../components"
import api from '../../utilis/baseUrl'
import './CreatePost.scss'
const CreatePost = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(event.target.files)
    };

    const uploadHandler = async () => {

        try {

            const formData = new FormData();
            formData.append('image', selectedFile);
            const resp = await api.post("/upload", formData)

            console.log('file uploaded succesfully ', resp.data)

        }
        catch (error) {
            console.error('Error uploading file:', error);
        }


    }

    return (
        <div className="text_editor_container">
            <input className='TitleInput' placeholder=" Title"/>
            <TextEditor />
            <input type="file" onChange={handleFileChange}/>
            <button onClick={uploadHandler}>Upload</button>
        </div>
    )
}

export default CreatePost