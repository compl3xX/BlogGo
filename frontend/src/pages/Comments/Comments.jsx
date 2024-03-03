import React from 'react'
import './Comments.scss'

const Comments = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`side-page ${isOpen ? 'open' : ''}`}>
                <div className="side-page-content">
                    {/* Content of the side page */}
                    <h1>Comments</h1>
                </div>
            </div>
            <div className="backdrop" onClick={() => { onClose(false) }}></div>
        </>
    )
}

export default Comments