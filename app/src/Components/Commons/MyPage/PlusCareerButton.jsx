import styled from 'styled-components';
import { Colors, Messages } from '../../../Assets/Theme';

const PlusCareerButton = () => {
  return (
    <PlusCareerButtonStyled onClick={() => alert('서비스 준비중입니다!')}>
      {Messages.plusCareerBtn}
    </PlusCareerButtonStyled>
  );
};

export default PlusCareerButton;

export const PlusCareerButtonStyled = styled.button`
  position: absolute;
  margin-left: 510px;
  width: 120px;
  height: 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background-color: ${Colors.Bgwhite};
  color: ${Colors.mainPurple};
  cursor: pointer;
  transition: 0.3s;
`;
