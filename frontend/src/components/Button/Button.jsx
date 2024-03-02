import React from 'react'
import './Button.scss'

const Button = ({ BntText, handel}) => {
    return (
        <button className="custom_btn" onClick={handel}>{BntText}</button>
    )
}

export default Button