import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './TextEditor.scss'

const TextEditor = () => {

    const [value, setValue] = useState('');

    const quillOptions = {
        theme: 'bubble', // Specify the theme ('snow' or 'bubble')
        placeholder: 'Type your text here...',
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['link'],
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],

            ],
        },
    };

    return (
        <div className="text_editor">
            <ReactQuill theme="snow" value={value} onChange={setValue}
                modules={quillOptions.modules}
                placeholder={quillOptions.placeholder} >
            </ReactQuill >
        </div>
    )
}

export default TextEditor