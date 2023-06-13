import styled from 'styled-components'

const CardDetails = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .card {
        display: flex;
        flex-direction: row;
        width: 30rem;
        margin: 1.5rem 4.5rem;

        @media (max-width: 1600px) {
            margin: 1.5rem 1.5rem;
        }

        @media (max-width: 1366px) {
            margin: 1.5rem 5rem;
        }

        @media (max-width: 1024px) {
            margin: 1.5rem 1rem;
        }

        @media (max-width: 768px) {
            margin: 1.5rem 1.5rem;
            width: 20rem;
        }   

        @media (max-width: 414px) {
            margin: 1.5rem 2rem;
            width: 21rem;
        }

        box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
        border-radius: 32px;
        padding: 1.5rem 2rem;

        h3 {
            margin-right: 1rem;
            margin-top: -1rem;
            max-width: 12rem;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--font-light);
        }

        p {
            margin-bottom: 1rem;
            font-size: 0.9rem;
            max-width: 12rem;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        :hover {
            box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.35);
            transition: 1s;
            transform: scale(1.02);
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