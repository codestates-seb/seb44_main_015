import styled from 'styled-components';
import { Colors } from '../../../Assets/Theme';

const AppliedBoard = ({
  title,
  info1,
  info2,
  info3,
  info1Number,
  info2Number,
  info3Number,
}) => {
  return (
    <BigCardStyled>
      <NameWrapperStyled>{title}</NameWrapperStyled>
      <ListWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>{info1Number}</NumberStyled>
          <InfoStyled>{info1}</InfoStyled>
        </BoxWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>{info2Number}</NumberStyled>
          <InfoStyled>{info2}</InfoStyled>
        </BoxWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>{info3Number}</NumberStyled>
          <InfoStyled>{info3}</InfoStyled>
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

export const NameWrapperStyled = styled.h3`
  display: flex;
  margin: 24px 518px 24px 24px;
  color: ${(props) => props.$backgroundColor || `${Colors.Gray4}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ListWrapperStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 410px;
  height: 83px;
  margin: 35px 133px 31px 133px;
`;

export const BoxWrapperStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NumberStyled = styled.span`
  color: ${Colors.Gray4};
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InfoStyled = styled.span`
  color: ${Colors.Gray4};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
