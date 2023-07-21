import { Colors } from '../../../Assets/Theme';
import styled from 'styled-components';

export const BodyBackgroundStyled = styled.div`
  background-color: ${Colors.Gray1};
  height: 100%;
`;

export const MainStyled = styled.main`
  padding: 0 0 24px;
  text-align: right;
`;

export const HomeLinkWrapperStyled = styled.div`
  padding: 8px 0 8px;
`;

export const HomeLinkStyled = styled.a`
  text-align: right;
  line-height: 36px;
  font-size: 14px;
  color: ${Colors.Gray3};
  font-weight: 400;
  cursor: pointer;
`;

export const LogInWrapperStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 132px;
  padding: 80px 60px 80px;
  width: 520px;
  height: 100%;
  text-align: left;
  background-color: ${Colors.Bgwhite};
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  box-sizing: border-box;
`;
