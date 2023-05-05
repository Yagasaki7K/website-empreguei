import styled from 'styled-components'

const SlideDetails = styled.div`
    background: url('/background-slide.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 250px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    text-transform: uppercase;
    
    p {
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: bold;
    }
`

export default SlideDetails