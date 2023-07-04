import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';
import { ResumeWrapper, ResumeCardStyled, ResumeTitleStyled } from './Resume';
import { TagStyled, TagWrapperStyled } from './Tag';

const CompanyDetail = () => {
  return (
    <>
      <ResumeCardStyled>
        <ResumeWrapper>
          <UpperWrapper>
            <ResumeTitleStyled>회사 소개</ResumeTitleStyled>
            <CompanyDetailWrapper>
              안녕하세요 저희는 프리해요입니다. 반갑습니다. 회사 소개글 적는
              창입니다.
            </CompanyDetailWrapper>
          </UpperWrapper>
          <TagWrapperStyled style={{ margin: '24px 24px 24px 0' }}>
            <TagStyled>#프론트엔드</TagStyled>
            <TagStyled>#백엔드</TagStyled>
            <TagStyled>#정시출근</TagStyled>
            <TagStyled>#꼼꼼함</TagStyled>
          </TagWrapperStyled>
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
  line-height: 1.5;
`;
