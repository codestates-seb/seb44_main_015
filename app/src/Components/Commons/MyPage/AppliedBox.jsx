import styled from 'styled-components';
import { Colors, Messages } from '../../../Assets/Theme';

import PlusCareerButton from './PlusCareerButton';

const AppliedBox = ({ title, number, height, content }) => {
  return (
    <BigCardStyled height={height}>
      <NameWrapperStyled>
        {title ? title : `${Messages.cardInTitle}`}
        {title === `${Messages.openTitle}` ? <PlusCareerButton /> : null}
        <NumberWrapperStyled>{number}</NumberWrapperStyled>
      </NameWrapperStyled>
      {content}
    </BigCardStyled>
  );
};

export default AppliedBox;

export const BigCardStyled = styled.div`
  width: 676px;
  height: ${(props) => props.height || '419px'};
  margin-top: 16px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.Gray4};
  background-color: ${Colors.Bgwhite};
`;

const NameWrapperStyled = styled.h3`
  display: flex;
  margin: 24px 518px 24px 24px;
  color: ${(props) => props.$backgroundColor || `${Colors.Gray4}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NumberWrapperStyled = styled.span`
  margin-left: 4px;
  color: ${Colors.mainPurple};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
