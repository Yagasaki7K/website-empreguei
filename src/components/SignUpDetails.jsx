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
        }
        
        @media (prefers-color-scheme: dark) {
            background: var(--bg-dark-alt);

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

                input, textarea, select {
                    width: 300px;
                    padding: 0.3rem;
                }
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
                margin-top: 3rem;
            }

            .content {
                display: flex;
                flex-direction: column;

                label {
                    margin-top: 1rem;
                }

                input, textarea, select {
                    padding: 0.4rem;
                    width: 400px;
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