import styled from 'styled-components'
import Page from "../components/styled/Page"

const SuccessPage = styled(Page)`
color: white;

display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

`
const Message = styled.h1`
background-color: rgba(10, 0, 36, 0.3);
border: 3px solid #ff9577;
padding: 35px;
border-radius: 55px;

`


const Success = () => {
    return (
        <SuccessPage>
        <Message>Thanks for getting in touch!</Message>
        </SuccessPage>
    )
}

export default Success
