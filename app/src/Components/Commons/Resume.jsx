import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

const Resume = ({ resume }) => {
  return (
    <CardStyled>
      <CardWrapperStyled>
        <CardTitleStyled>이력</CardTitleStyled>
        <ResumeDetailWrapperStyled>
          {resume &&
            resume.map((oneresume, idx) => (
              <ResumeDetailStyled key={idx}>{oneresume}</ResumeDetailStyled>
            ))}
        </ResumeDetailWrapperStyled>
      </CardWrapperStyled>
    </CardStyled>
  );
};

export default Resume;

export const CardStyled = styled.div`
  width: 360px;
  height: auto;
  margin-top: 16px;
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
  margin: 24px 24px 24px 24px;
`;

export const CardTitleStyled = styled.h3`
  color: ${Colors.Gray3};
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
`;

export const ResumeDetailWrapperStyled = styled.ul`
  width: 300px;
`;

export const ResumeDetailStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 250px;
  padding-left: 2px;
  margin-bottom: 5px;
  text-align: left;
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  &:first-child {
    margin-top: 8px;
  }
  &:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    margin-right: 8px;
    margin-bottom: 2.5px;
    background-color: ${Colors.Gray4};
    border-radius: 100%;
  }
`;
