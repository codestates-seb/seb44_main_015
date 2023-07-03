import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';

const WideButton = () => {
  return (
    <>
      <WideButtonStyled>명함·이력 수정하기</WideButtonStyled>
    </>
  );
};

export default WideButton;

export const WideButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 56px;
  padding: 16px;

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 10px;
  flex-shrink: 0;
  border: 1px solid ${Colors.mainPurple};
  border-radius: 16px;
  color: ${Colors.mainPurple};
  background-color: ${Colors.Bgwhite};
`;
