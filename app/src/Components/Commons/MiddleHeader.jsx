import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

const MiddleHeader = ({ midtitle }) => {
  return <MidHeaderStyled>{midtitle}</MidHeaderStyled>;
};

export default MiddleHeader;

export const MidHeaderStyled = styled.h2`
  color: ${Colors.Gray4};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 10px;
`;
