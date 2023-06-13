import styled from 'styled-components'

const SignUpDetails = styled.div`
    background: var(--bg-light);

    @media (prefers-color-scheme: dark) {
        background: var(--bg-dark);
    }

    .container {
        background: var(--bg-light-alt);
        width: 75%;
        margin: 0rem auto;
        padding: 2rem 1rem;
        border-radius: 8px;

        h1 {
            word-wrap: break-word;
            color: var(--font-light);

            @media (max-width: 768px) {
                margin-top: -2rem;
                margin-left: -3rem;
                width: 20rem;
            }
        }
        
        @media (prefers-color-scheme: dark) {
            background: var(--bg-dark-alt);

            @media (max-width: 1080px) {
                background: var(--bg-dark);
            }

            h1 {
                color: var(--font-ocean);
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
                    background: var(--bg-light);
                    color: var(--font-dark-alt);

                    @media (prefers-color-scheme: dark) {
                        background: var(--bg-form);
                        color: var(--font-form);
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
                    color: var(--font-dark-alt);
                    font-style: normal;
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-align: center;

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
                    background: var(--bg-yellow);
                }

                .green {
                    background: var(--bg-green);
                }
            }
        }
    }
`

export default SignUpDetails