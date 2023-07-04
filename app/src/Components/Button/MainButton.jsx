import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color:#7000FF;
  color:#ffffff;
  width:${(props) => props.width || '100px'};
  padding: 16px 0px;
  border-radius: 16px;
  border:none;
  cursor:pointer;
  transition:0.3s;
  &:hover{
    background-color:#D0ABFF;
  }
  &:focus{
    background-color:#4E00B1;
  }
`

function MainButton({content, width}){

  return(
    <ButtonStyled width={width}>
    {content ? `${content}` : "버튼"}
    </ButtonStyled>
  )
}

export default MainButton;
