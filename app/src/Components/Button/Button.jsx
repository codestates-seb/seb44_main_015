import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color:${(props) => props.backgroundColor || '#7000FF'};
  color:${(props) => props.color || '#FFFFFF'};
  width:${(props) => props.width || '100px'};
  padding: 16px 0px;
  border-radius: 16px;
  border:${(props) => props.border || 'none'};
  cursor:pointer;
  transition:0.3s;
  &:hover{
    background-color:${(props) => props.hoverBackgroundColor || '#D0ABFF'};
  }
  &:focus{
    background-color:${(props) => props.focusBackgroundColor || '#4E00B1'};
  }
`

function Button({content}){

  return(
    <ButtonStyled>{content ? `${content}` : "버튼"}</ButtonStyled>
  )
}

export default Button;
