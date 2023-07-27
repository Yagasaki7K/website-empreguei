import styled from 'styled-components'

const SignUpDetails = styled.div`
    background: ${({theme}) => theme.bg};

    @media (prefers-color-scheme: dark) {
        background: ${({theme}) => theme.bg};
    }

    .container {
        background: ${({theme}) => theme.bg_alt};
        width: 75%;
        margin: 0rem auto;
        padding: 2rem 1rem;
        border-radius: 8px;

        h1 {
            word-wrap: break-word;
            color: ${({theme}) => theme.font};

            @media (max-width: 768px) {
                margin-top: -2rem;
                margin-left: -3rem;
                width: 20rem;
            }
        }
        
        @media (prefers-color-scheme: dark) {
            background: ${({theme}) => theme.bg_alt};

            @media (max-width: 1080px) {
                background: ${({theme}) => theme.bg_dark};
            }

            h1 {
                color: ${({theme}) => theme.font_ocean};
                text-transform: uppercase;
            }
        }

        form {
            display: flex;
            flex-direction: row;
            justify-content: center;

            @media (max-width: 768px) {
                flex-direction: column;
                margin-left: 10%;
            }

            .leftForm {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-right: 8rem;
            }

            .rightForm {
                display: flex;
                flex-direction: column;
                margin-top: 3.5rem;

                @media (max-width: 768px) {
                    margin-top: 0rem;
                }
            }

            .content {
                display: flex;
                flex-direction: column;

                @media (max-width: 768px) {
                    width: 20rem;
                    label {
                        margin-left: -3rem;
                    }

                    input, textarea, select {
                        margin-left: -3rem;
                        width: 200%;
                    }
                }

                label {
                    margin-top: 1rem;
                }

                input, textarea, select {
                    padding: 0.4rem;
                    width: 100%;
                    border-radius: 8px;
                    border-style: none;
                    background: ${({theme}) => theme.bg};
                    color: ${({theme}) => theme.font_alt};

                    @media (prefers-color-scheme: dark) {
                        background: ${({theme}) => theme.bg_form};
                        color: ${({theme}) => theme.font_form};
                    }

                    :focus {
                        outline: none;
                    }
                }
            }

            .content-button {
                button {
                    margin: 1rem 2.6rem;
                    padding: 0.8rem;
                    border-radius: 8px;
                    border-style: none;
                    color: ${({theme}) => theme.font_alt};
                    font-style: normal;
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-align: center;
                    cursor: pointer;

                    :hover {
                        opacity: 0.8;
                        transition: 1s;
                        cursor: pointer;
                    }

                    @media (max-width: 768px) {
                        margin: 1rem 0.2rem -1rem 0.2rem;
                    }
                }

                .yellow {
                    background: ${({theme}) => theme.bg_yellow};
                }

                .green {
                    background: ${({theme}) => theme.bg_green};
                }
            }
        }
    }
`

export default SignUpDetails