import React from 'react'
import bgLogo from "../assets/logo-outline.png"
import bgLogoBlue from "../assets/logo-outline-blue.png"
import "../components/FloatingLogo.css"

function FloatingLogo({ isWhite }) {
    return (
        <div className='floatingLogo'>
            <div className='logo-img'>
                <img src={isWhite ? bgLogo : bgLogoBlue} alt='logo' />
            </div>
        </div>
    )
}

export default FloatingLogo
