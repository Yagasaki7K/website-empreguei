import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterDetails>© 2015 - {new Date().getFullYear()} |&nbsp;<a href="/">Empreguei</a>&nbsp;by&nbsp;<a href="https://kalifyinc.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a></FooterDetails>
    )
}

export default Footer

const FooterDetails = styled.div`
    background: var(--bg-light);
    color: var(--font-dark);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 0;

    @media (prefers-color-scheme: dark) {
        background: var(--bg-dark);
        color: var(--font-dark-alt);
    }
`