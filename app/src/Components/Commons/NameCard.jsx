import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';
import { TagStyled, TagWrapperStyled } from './Tag';

const NameCard = () => {
  return (
    <>
      <CardStyled>
        <UpperWrapper>
          <NameWrapper>김땡땡</NameWrapper>
          <PhoneEmailWrapper>
            <PhoneNumberWrapper>010 2222 2222</PhoneNumberWrapper>
            <EmailWrapper>freehaeyo@freehaeyo.com</EmailWrapper>
          </PhoneEmailWrapper>
        </UpperWrapper>
        <TagWrapperStyled>
          <TagStyled>#프론트엔드</TagStyled>
          <TagStyled>#백엔드</TagStyled>
          <TagStyled>#정시출근</TagStyled>
          <TagStyled>#꼼꼼함</TagStyled>
        </TagWrapperStyled>
      </CardStyled>
    </>
  );
};

export default NameCard;

export const CardStyled = styled.div`
  position: absolute;
  width: 360px;
  height: 210px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.mainPurple};
  background-color: ${Colors.Bgwhite};
`;

const UpperWrapper = styled.div`
  display: flex;
  width: 158px;
  height: 70px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  margin: 24px 178px 65px 24px;
`;

const NameWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: ${Colors.mainPurple};
`;

const PhoneEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  width: 158px;
  height: 38px;
  margin-top: 8px;
`;
const PhoneNumberWrapper = styled.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${Colors.Gray4};
`;

const EmailWrapper = styled.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${Colors.Gray4};
`;
