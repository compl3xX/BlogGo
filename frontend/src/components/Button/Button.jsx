import React from 'react'
import './Button.scss'

const Button = ({ children, handel, type }) => {
    return (
        <button type={type} className="custom_btn" onClick={handel}>{children}</button>
    )
}

export default Button