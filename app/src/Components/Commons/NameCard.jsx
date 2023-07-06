import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';
import { TagWrapperStyled } from './Tag';
import Tag from './Tag';

const NameCard = () => {
  const sampleTags = ['#프론트엔드', '#백엔드', '#정시출근', '#꼼꼼함'];
  return (
    <>
      <NameCardStyled>
        <UpperWrapperStyled>
          <NameWrapperStyled>김땡땡</NameWrapperStyled>
          <InnerWrapperStyled>
            <PhoneWrapperStyled>010 2222 2222</PhoneWrapperStyled>
            <EmailWrapperStyled>freehaeyo@freehaeyo.com</EmailWrapperStyled>
          </InnerWrapperStyled>
        </UpperWrapperStyled>
        <TagWrapperStyled>
          {sampleTags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </TagWrapperStyled>
      </NameCardStyled>
    </>
  );
};

export default NameCard;

export const NameCardStyled = styled.div`
  position: absolute;
  width: 360px;
  height: 210px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.mainPurple};
  background-color: ${Colors.Bgwhite};
`;

const UpperWrapperStyled = styled.div`
  display: flex;
  width: 158px;
  height: 70px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  margin: 24px 178px 65px 24px;
`;

const NameWrapperStyled = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: ${Colors.mainPurple};
`;

const InnerWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  width: 158px;
  height: 38px;
  margin-top: 8px;
`;
const PhoneWrapperStyled = styled.span`
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${Colors.Gray4};
`;

const EmailWrapperStyled = styled.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${Colors.Gray4};
`;
