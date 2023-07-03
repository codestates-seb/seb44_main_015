import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';

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
        <TagWrapper>
          <Tag>#프론트엔드</Tag>
          <Tag>#백엔드</Tag>
          <Tag>#정시출근</Tag>
          <Tag>#꼼꼼함</Tag>
        </TagWrapper>
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

export const TagWrapper = styled.div`
  display: flex;
  width: 296px;
  height: 27px;
  align-items: flex-start;

  gap: 4px;
  flex-shrink: 0;
  margin: ${(props) => props.margin || '65px 40px 24px 24px'};
`;

export const Tag = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${Colors.mainPurple};
  font-size: 13px;
  font-style: normal;
  font-weight: 300;

  border: 1px solid ${Colors.Gray3};
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor || `${Colors.Bgwhite}`};
`;
