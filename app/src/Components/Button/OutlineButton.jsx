import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color:#ffffff;
    color:#7000FF;
    width:${(props) => props.width || '100px'};
    padding: 16px 0px;
    border-radius: 16px;
    border:1px solid #7000FF;
    cursor:pointer;
    transition:0.3s;
`

function OutlineButton({content, width}){

    return(
    <ButtonStyled width={width}>
    {content ? `${content}` : "버튼"}
    </ButtonStyled>
    )
}

export default OutlineButton;
