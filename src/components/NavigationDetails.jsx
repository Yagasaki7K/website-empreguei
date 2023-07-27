import { styled } from "styled-components"

export const NavigationDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;
    height: 80px;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.font};

    @media (prefers-color-scheme: dark) {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.font_alt};
    }

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;

    @media (max-width: 768px) {
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
    }

`