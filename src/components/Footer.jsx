import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterDetails>© 2023 - {new Date().getFullYear()} |&nbsp;<a href="/">Empreguei</a>&nbsp;by&nbsp;<a href="https://kalifyinc.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a></FooterDetails>
    )
}

export default Footer

const FooterDetails = styled.div`
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.font};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 0;

    @media (prefers-color-scheme: dark) {
        background: ${({theme}) => theme.bg};
        color: ${({theme}) => theme.font_alt};
    }
`