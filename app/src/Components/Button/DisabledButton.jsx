import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

function DisabledButton({ content, width, backgroundColor, onClick }) {
  return (
    <ButtonStyled
      onClick={onClick}
      width={width}
      $backgroundColor={backgroundColor}
    >
      {content ? `${content}` : '버튼'}
    </ButtonStyled>
  );
}

export default DisabledButton;
const ButtonStyled = styled.button`
  width: ${(props) => props.width || '100px'};
  padding: 16px 0px;
  text-align: center;
  background-color: ${(props) => props.$backgroundColor || `${Colors.Gray1}`};
  font-weight: 700;
  color: ${Colors.Gray3};
  border-radius: 16px;
  border: none;
  cursor: pointer;
  line-height: 24px;
  font-size: 16px;
`;
