import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

function OutlineButton({ content, width, onClick, id }) {
  return (
    <ButtonStyled id={id} onClick={onClick} width={width}>
      {content ? `${content}` : '버튼'}
    </ButtonStyled>
  );
}

export default OutlineButton;

const ButtonStyled = styled.button`
  width: ${(props) => props.width || '100px'};
  padding: 16px 0px;
  text-align: center;
  background-color: ${Colors.Bgwhite};
  color: ${Colors.mainPurple};
  border-radius: 16px;
  border: 1px solid ${Colors.mainPurple};
  cursor: pointer;
  transition: 0.3s;
  line-height: 24px;
  font-size: 16px;
`;
