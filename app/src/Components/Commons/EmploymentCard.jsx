import NoLineTag from './NoLineTag';

import { Colors } from '../../Assets/Theme';
import { styled } from 'styled-components';

const EmploymentCard = ({ employmentInfo }) => {
  const { duedate, title, name, region, stack } = employmentInfo;

  return (
    <>
      <EmploymentCardStyled>
        <UpperWrapperStyled>
          <NoLineTag
            name={duedate}
            color={Colors.mainPurple}
            backgroundColor={Colors.thirdPurple}
            fontSize="12px"
            fontWeight="400"
          ></NoLineTag>
          <TitleStyled title={title}>{title}</TitleStyled>
          <CompanyNameStyled name={name}>{name}</CompanyNameStyled>
          <RegionStyled $region={region}>{region}</RegionStyled>
        </UpperWrapperStyled>
        <TagContainerStyled>
          {stack &&
            stack.map((tag, index) => (
              <NoLineTag
                key={index}
                name={tag}
                color={Colors.Gray4}
                backgroundColor={Colors.Gray1}
                fontSize="12px"
                fontWeight="300"
              />
            ))}
        </TagContainerStyled>
      </EmploymentCardStyled>
    </>
  );
};

export default EmploymentCard;

const EmploymentCardStyled = styled.li`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 248px;
  height: 320px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${Colors.Gray2};
  box-sizing: border-box;
  background-color: ${Colors.Bgwhite};
`;

const UpperWrapperStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const TitleStyled = styled.h3`
  width: 195px;
  height: 30px;
  margin-top: 13px;
  margin-bottom: 16px;
  overflow: hidden; // 내용이 컨테이너를 넘어갈 경우 숨김
  text-overflow: ellipsis; // 텍스트가 넘칠 경우 '...' 으로 표시
  white-space: nowrap; // 텍스트가 길어져도 한 줄에 나타나도록 설정
  color: ${Colors.Gray4};
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CompanyNameStyled = styled.p`
  color: ${Colors.Gray4};
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RegionStyled = styled.address`
  margin-top: 3px;
  color: ${Colors.Gray3};
  font-family: Noto Sans CJK KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagContainerStyled = styled.ul`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 8px 4px;
`;
