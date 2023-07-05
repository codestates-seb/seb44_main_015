import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

const Resume = ({ resume }) => {
  return (
    <div>
      <CardStyled>
        <CardWrapperStyled>
          <CardTitleStyled>이력</CardTitleStyled>
          {resume &&
            resume.map((oneresume) => (
              <ResumeDetailStyled key={oneresume}>
                {oneresume}
              </ResumeDetailStyled>
            ))}
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
  margin: 370px 890px 788px 190px;
  color: ${Colors.Gray3};
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  background-color: ${Colors.Bgwhite};
`;

export const CardWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;
  height: auto;
  margin: 24px 24px 24px 24px; //151px
`;

export const CardTitleStyled = styled.h3`
  padding-bottom: 8px;
  color: ${Colors.Gray3};
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  gap: 8px;
`;

export const ResumeDetailWrapperStyled = styled.ul`
  width: 185px; //185
  padding-left: 13px; //13px
`;

export const ResumeDetailStyled = styled.li`
  width: 250px; //185
  padding-left: 3px; //13px
  //padding-left: 5px;
  padding-bottom: 5px;
  text-align: left;
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  //gap: 4px;
  //background-color: pink;
`;
