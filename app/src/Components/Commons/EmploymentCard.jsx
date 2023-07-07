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
            name="D-300"
            color={Colors.mainPurple}
            backgroundColor={Colors.thirdPurple}
            fontSize="12px"
            fontWeight="400"
          ></NoLineTag>
          <NoLineTag
            name="D-300"
            color={Colors.mainPurple}
            backgroundColor={Colors.thirdPurple}
            fontSize="12px"
            fontWeight="400"
          ></NoLineTag>
          <NoLineTag
            name="D-300"
            color={Colors.mainPurple}
            backgroundColor={Colors.thirdPurple}
            fontSize="12px"
            fontWeight="400"
          ></NoLineTag>
          <NoLineTag
            name="D-300"
            color={Colors.mainPurple}
            backgroundColor={Colors.thirdPurple}
            fontSize="12px"
            fontWeight="400"
          ></NoLineTag>
          <NoLineTag
            name="D-300"
            color={Colors.mainPurple}
            backgroundColor={Colors.thirdPurple}
            fontSize="12px"
            fontWeight="400"
          ></NoLineTag>

          {/* {stack && stack.map((tag) => <Tag key={tag} content={tag} />)} */}
        </TagContainerStyled>
      </EmploymentCardStyled>
    </>
  );
};

export default EmploymentCard;

const EmploymentCardStyled = styled.div`
  position: absolute;
  width: 248px;
  height: 320px;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;

  /* background-color: orange; */
  padding: 24px;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid var(--gray-2, #bebebe);
`;

const UpperWrapperStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-shrink: 0;
  background-color: olivedrab;
`;

const TitleStyled = styled.h1`
  color: var(--gray-4, #333);
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 195px;
  height: 30px;
  overflow: hidden; // 내용이 컨테이너를 넘어갈 경우 숨김
  text-overflow: ellipsis; // 텍스트가 넘칠 경우 '...' 으로 표시
  white-space: nowrap; // 텍스트가 길어져도 한 줄에 나타나도록 설정
  margin-top: 9px;
  margin-bottom: 16px;
`;
const CompanyNameStyled = styled.h2`
  color: var(--gray-4, #333);
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RegionStyled = styled.address`
  color: var(--gray-3, #999);
  font-family: Noto Sans CJK KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagContainerStyled = styled.div`
  display: flex;
  /* width: 248px;
  height: 160px; */
  /* flex-direction: column;
  align-items: flex-start;
  gap: 8px; */
  flex-shrink: 0;
  background-color: skyblue;
`;

//   const NameWrapperStyled = styled.span`
//     color: ${Colors.mainPurple};
//     font-style: normal;
//     font-size: 16px;
//     font-weight: 500;
//     line-height: normal;
//     line-height: normal;
//   `;

//   const InnerWrapperStyled = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     flex: 1;
//     width: 158px;
//     height: 38px;
//     margin-top: 8px;
//   `;
//   const PhoneWrapperStyled = styled.span`
//     color: ${Colors.Gray4};
//     font-size: 13px;
//     font-style: normal;
//     font-weight: 300;
//     line-height: normal;
//   `;

//   const EmailWrapperStyled = styled.div`
//     color: ${Colors.Gray4};
//     font-size: 13px;
//     font-style: normal;
//     font-weight: 300;
//     line-height: normal;
//   `;
