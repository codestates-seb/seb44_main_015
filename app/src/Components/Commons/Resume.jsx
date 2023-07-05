import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

const Resume = ({ resume, com1, com2, com3 }) => {
  return (
    <div>
      <CardStyled>
        <CardWrapperStyled>
          <CardTitleStyled>이력</CardTitleStyled>
          <ResumeDetailWrapperStyled>
            {resume.map((oneresume) => (
              <ResumeDetailStyled key={oneresume}>
                {oneresume}
              </ResumeDetailStyled>
            ))}

            <ResumeDetailStyled>{com1}</ResumeDetailStyled>
            <ResumeDetailStyled>{com2}</ResumeDetailStyled>
            <ResumeDetailStyled>{com3}</ResumeDetailStyled>
          </ResumeDetailWrapperStyled>
        </CardWrapperStyled>
      </CardStyled>
    </div>
  );
};

export default Resume;

export const CardStyled = styled.div`
  position: absolute;
  width: 360px;
  height: auto;
  margin-top: 240px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.Gray3};
  background-color: ${Colors.Bgwhite};
`;

export const CardWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 185px;
  height: auto;
  margin: 24px 151px 24px 24px;
`;

export const CardTitleStyled = styled.h3`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: ${Colors.Gray3};
`;

export const ResumeDetailWrapperStyled = styled.ul`
  width: 185px;
  padding-left: 13px;
`;

export const ResumeDetailStyled = styled.li`
  padding-left: 5px;
  padding-bottom: 4px;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${Colors.Gray4};
`;
