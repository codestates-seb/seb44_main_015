import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';
import { ResumeWrapper, ResumeTitle, ResumeCardStyled } from './Resume';
import { Tag, TagWrapper } from './NameCard';

const CompanyDetail = () => {
  return (
    <>
      <ResumeCardStyled>
        <ResumeWrapper>
          <UpperWrapper>
            <ResumeTitle>회사 소개</ResumeTitle>
            <CompanyDetailWrapper>
              안녕하세요 저희는 프리해요입니다. 반갑습니다. 회사 소개글 적는
              창입니다.
            </CompanyDetailWrapper>
          </UpperWrapper>
          <TagWrapper style={{ margin: '24px 24px 24px 0' }}>
            <Tag>#프론트엔드</Tag>
            <Tag>#백엔드</Tag>
            <Tag>#정시출근</Tag>
            <Tag>#꼼꼼함</Tag>
          </TagWrapper>
        </ResumeWrapper>
      </ResumeCardStyled>
    </>
  );
};

export default CompanyDetail;

const UpperWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const CompanyDetailWrapper = styled.div`
  width: 312px;
  height: auto;
  margin-top: 8px;
  text-align: left;
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
