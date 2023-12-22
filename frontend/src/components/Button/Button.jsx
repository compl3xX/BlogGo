import React from 'react'
import './Button.scss'

const Button = ({ BntText, handel}) => {
    return (
        <button onClick={handel}>{BntText}</button>
    )
}

export default Button