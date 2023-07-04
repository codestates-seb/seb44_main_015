import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color:${(props) => props.backgroundColor || '#f2f2f2'};
    color:#999999;
    width:${(props) => props.width || '100px'};
    padding: 16px 0px;
    border-radius: 16px;
    border:none;
    cursor:pointer;
`

function DisabledButton({content, width, backgroundColor}){

    return(
    <ButtonStyled width={width} backgroundColor={backgroundColor}>
    {content ? `${content}` : "버튼"}
    </ButtonStyled>
    )
}

export default DisabledButton;
