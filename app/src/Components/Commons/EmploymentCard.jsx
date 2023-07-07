import { styled } from 'styled-components';
import NoLineTag from './NoLineTag'; // 컴포넌트 자체를 가져오기.
import { TagWrapperStyled } from './NoLineTag'; // 스타일드 컴포넌트를 가져오기.
import { Colors } from '../../Assets/Theme';

const EmploymentCard = () => {
  return (
    <>
      <EmploymentCardStyled>
        <UpperWrapperStyled>
          <NoLineTag
            name="D-300"
            color={Colors.mainPurple}
            backgroundColor={Colors.thirdPurple}
            fontSize="12px"
            fontWeight="400"
          ></NoLineTag>
          <TitleStyled>프론트엔드 리액트 개발자 1명 모집</TitleStyled>
          <CompanyNameStyled>(주)프리해요 코오퍼레이션</CompanyNameStyled>
          <RegionStyled>서울</RegionStyled>
        </UpperWrapperStyled>
        <TagContainerStyled>
          <NoLineTag
            name="50인 이상"
            color={Colors.Gray4}
            backgroundColor={Colors.Gray1}
            fontSize="12px"
            fontWeight="300"
          ></NoLineTag>
          <NoLineTag
            name="수평적 문화"
            color={Colors.Gray4}
            backgroundColor={Colors.Gray1}
            fontSize="12px"
            fontWeight="300"
          ></NoLineTag>
        </TagContainerStyled>
      </EmploymentCardStyled>
    </>
  );
};

export default EmploymentCard;

const EmploymentCardStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 248px;
  height: 320px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid ${Colors.Gray2};
  background-color: ${Colors.Bgwhite};
`;

const UpperWrapperStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const TitleStyled = styled.h1`
  width: 195px;
  height: 30px;
  margin-top: 9px;
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
const CompanyNameStyled = styled.h2`
  color: ${Colors.Gray4};
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RegionStyled = styled.address`
  color: ${Colors.Gray3};
  font-family: Noto Sans CJK KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 8px 4px;
`;
