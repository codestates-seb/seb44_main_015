import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';

const Resume = () => {
  return (
    <div>
      <ResumeCardStyled>
        <ResumeWrapper>
          <ResumeTitleStyled>이력</ResumeTitleStyled>
          <ResumeDetailWrapper>
            <ResumeDetail>코드스테이츠 44기</ResumeDetail>
            <ResumeDetail>프리해요 프론트엔드 개발</ResumeDetail>
            <ResumeDetail>그만자고15나 백엔드 개발</ResumeDetail>
          </ResumeDetailWrapper>
        </ResumeWrapper>
      </ResumeCardStyled>
    </div>
  );
};

export default Resume;

export const ResumeCardStyled = styled.div`
  position: absolute;
  width: 360px;
  height: auto;
  margin-top: 240px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.Gray3};
  background-color: ${Colors.Bgwhite};
`;

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 185px;
  height: auto;
  margin: 24px 151px 24px 24px;
`;

export const ResumeTitleStyled = styled.h3`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: ${Colors.Gray3};
`;

const ResumeDetailWrapper = styled.ul`
  width: 185px;
  padding-left: 13px;
`;

const ResumeDetail = styled.li`
  padding-left: 5px;
  padding-bottom: 4px;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${Colors.Gray4};
`;
