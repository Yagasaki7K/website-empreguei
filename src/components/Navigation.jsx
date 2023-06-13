'use client'
import React, { useState } from 'react'
import styled from 'styled-components'

const Navigation = (isOtherPage) => {
    const [colorScheme, setColorScheme] = useState('dark');

    const handleToggle = () => {
        const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
        setColorScheme(newColorScheme);
        document.documentElement.style.setProperty('--color-scheme', newColorScheme);
    };

    return (
        <NavigationDetails>
            <a href="/"><img src="/logo-white.png" alt="Empreguei" /></a>

            {
                isOtherPage ?
                    (
                        <>
                            <p><a href="/">ver vagas</a></p>
                            <p className="active"><a href="/anunciar">anunciar vagas</a></p>
                        </>
                    ) :
                    (
                        <>
                            <p className="active"><a href="/">ver vagas</a></p>
                            <p><a href="/anunciar">anunciar vagas</a></p>
                        </>
                    )
            }

            {/* <button id="theme-toggle" onClick={handleToggle}>
                {colorScheme === 'light' ? 'dark mode' : 'light mode'}
            </button> */}
        </NavigationDetails>
    )
}

export default Navigation

const NavigationDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;
    height: 80px;
    background: var(--bg-light);
    color: var(--font-dark);

    @media (prefers-color-scheme: dark) {
        background: var(--bg-dark);
        color: var(--font-dark);
    }

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;

    @media (max-width: 768px) {
        padding: 0 2rem;
    }

    @media (max-width: 414px) {
        justify-content: center;
        flex-direction: column;
        height: 250px;
        
        p {
            margin: 1rem;
        }
    }
    
    img {
        width: 325px;
    }

    .active {
        font-weight: bold;
        border-bottom: 1px solid #fff;

        :hover {
            border-bottom: 0;
        }
    }

/* CSS */
    button {
        border-radius: 8px;
        border-style: none;
        box-sizing: border-box;
        background: var(--font-dark);
        color: var(--bg-light);

        @media (prefers-color-scheme: dark) {
            background: var(--font-light);
            color: var(--font-dark-alt);
        }

        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        height: 40px;
        line-height: 20px;
        list-style: none;
        margin: 0;
        outline: none;
        padding: 10px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: color 100ms;
        vertical-align: baseline;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }
`