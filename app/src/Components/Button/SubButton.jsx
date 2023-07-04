import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color:#D0ABFF;
    color:#ffffff;
    width:${(props) => props.width || '100px'};
    padding: 16px 0px;
    border-radius: 16px;
    border:none;
    cursor:pointer;
    transition:0.3s;
`

function SubButton({content, width}){

    return(
    <ButtonStyled width={width}>
    {content ? `${content}` : "버튼"}
    </ButtonStyled>
    )
}

export default SubButton;
