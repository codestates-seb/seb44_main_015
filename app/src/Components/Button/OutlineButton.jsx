import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';

function OutlineButton({content, width}){

    return(
    <ButtonStyled width={width}>
    {content ? `${content}` : "버튼"}
    </ButtonStyled>
    )
}

export default OutlineButton;

const ButtonStyled = styled.button`
    width:${(props) => props.width || '100px'};
    padding: 16px 0px;
    text-align:center;
    background-color:${Colors.Bgwhite};
    color:${Colors.mainPurple};
    border-radius: 16px;
    border:1px solid ${Colors.mainPurple};
    cursor:pointer;
    transition:0.3s;
`

