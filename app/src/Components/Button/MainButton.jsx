import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';

function MainButton({content, width}){

  return(
    <ButtonStyled width={width}>
    {content ? `${content}` : "버튼"}
    </ButtonStyled>
  )
}

export default MainButton;

const ButtonStyled = styled.button`
  width:${(props) => props.width || '100px'};
  padding: 16px 0px;
  text-align:center;
  background-color:${Colors.mainPurple};
  color:${Colors.Bgwhite};
  font-weight: 700;
  border-radius: 16px;
  border:none;
  cursor:pointer;
  transition:0.3s;
  &:hover{
    background-color:${Colors.secondPurple};
  }
  &:focus{
    background-color:#4E00B1;
  }
`
