import styled from 'styled-components'

const PageDetails = styled.div`
    .container {
        background: ${({ theme }) => theme.bg_alt};
        width: 75%;
        margin: 2rem auto;
        padding: 1rem;
        border-radius: 8px;
        
        h1 {
            word-wrap: break-word;
            color: ${({ theme }) => theme.font_alt};
        }

        .advice {
            margin: 1rem 0;
            background: #FF5555;
            padding: 1rem;
            font-size: 0.9rem;
            border-radius: 8px;
            color: ${({ theme }) => theme.font_alt};
        }

        .subAdvice {
            border-radius: 8px;
            color: ${({ theme }) => theme.font_ocean};
        }

        @media (prefers-color-scheme: dark) {
            background: ${({ theme }) => theme.bg_alt};

            .advice {}

            h1 {
                color: ${({ theme }) => theme.font_ocean};
                text-transform: uppercase;
            }
        }

        .body {
            p {
                margin: 1rem 0;
            }

            button {
                background: #309E4C;
                box-shadow: 0px 0px 26px rgba(0, 0, 0, 0.15);
                border-radius: 18px;
                border-style: none;
                padding: 0.5rem 2rem;
                color: ${({ theme }) => theme.font_alt};
                cursor: pointer;

                :hover {
                    background: #2A8A44;
                    transition: 1s;
                }
            }

            .linkedin {
                background: #2867B2;
                margin-left: 1rem;
            }
        }
    }
`

export default PageDetails