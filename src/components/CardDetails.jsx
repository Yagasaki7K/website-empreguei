import styled from 'styled-components'

const CardDetails = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 75%;

        margin: 1rem 10rem;

        @media (max-width: 1024px) {
            margin: 1rem 5rem;
        }

        @media (max-width: 768px) {
            margin: 1rem 3rem;
        }

        .card {
            box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
            border-radius: 32px;
            padding: 2rem;

            h3 {
                margin-top: -1rem;
                max-width: 100%;
                font-size: 1.4rem;
                word-wrap: break-word;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: var(--font-ocean);
            }

            p {
                margin-bottom: 0.2rem;
                font-size: 0.9rem;
                max-width: 100%;
                word-wrap: break-word;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            :hover {
                box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.35);
                transition: 1s;
                transform: scale(1.01);
            }
        }

        
    }
    
    @media (prefers-color-scheme: dark) {
        .card {
            background: var(--bg-dark-alt);
            box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
            border-radius: 32px;

            h3 {
                color: #8BE9FD;
            }
        }
    }
    
`

export default CardDetails