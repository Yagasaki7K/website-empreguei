import styled from 'styled-components'

const NavigationDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;
    height: 80px;
    background: #1e73c2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;

    img {
        width: 325px;
    }

    p { 
        a {
            :hover {
                transition: 1s;
                border-bottom: 1px solid #fff;
            }
        }
    }

    .active {
        font-weight: bold;
    }

    @media (prefers-color-scheme: dark) {
        background: #282a36;
    }
`

export default NavigationDetails