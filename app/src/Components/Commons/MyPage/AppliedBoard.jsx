import styled from 'styled-components';
import { Colors, Messages } from '../../../Assets/Theme';

const AppliedBoard = () => {
  return (
    <BigCardStyled>
      <NameWrapperStyled>{Messages.appliedBoardTitle}</NameWrapperStyled>
      <ListWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>0</NumberStyled>
          <InfoStyled>{Messages.cardInTitle}</InfoStyled>
        </BoxWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>0</NumberStyled>
          <InfoStyled>{Messages.selectedTitle}</InfoStyled>
        </BoxWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>0</NumberStyled>
          <InfoStyled>{Messages.bookmarkedTitle}</InfoStyled>
        </BoxWrapperStyled>
      </ListWrapperStyled>
    </BigCardStyled>
  );
};

export default AppliedBoard;

export const BigCardStyled = styled.div`
  width: 676px;
  height: 184px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.Gray4};
  background-color: ${Colors.Bgwhite};
`;

const NameWrapperStyled = styled.h3`
  display: flex;
  margin: 24px 518px 24px 24px;
  color: ${(props) => props.backgroundColor || `${Colors.Gray4}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ListWrapperStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 410px;
  height: 83px;
  margin: 35px 133px 31px 133px;
`;

const BoxWrapperStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberStyled = styled.span`
  color: ${Colors.Gray4};
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InfoStyled = styled.span`
  color: ${Colors.Gray4};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
