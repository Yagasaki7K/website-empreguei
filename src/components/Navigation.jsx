'use client'
import React from 'react'
import NavigationDetails from './NavigationDetails'

const Navigation = () => {
    return (
        <NavigationDetails>
            <a href="#"><img src="/logo-white.png" alt="Empreguei" /></a>

            <p className="active"><a href="#">ver vagas</a></p>
            <p><a href="#">anunciar vagas</a></p>

            <button>light mode</button>
        </NavigationDetails>
    )
}

export default Navigation