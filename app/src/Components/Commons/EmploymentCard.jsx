import { styled } from 'styled-components';
import { NoLineTag } from './NoLineTag';
import { TagWrapperStyled } from './NoLineTag';

const EmploymentCard = () => {
  return (
    <>
      <EmploymentCardStyled>
        <UpperWrapperStyled>
          <TagWrapperStyled>
            <NoLineTag
              color={Colors.mainPurple}
              backgroundColor={Colors.thirdPurple}
              fontSize="12px"
              fontWeight="400"
            />
          </TagWrapperStyled>
          {/* <DdayStyled name={duedate}>{duedate}</DdayStyled>
          <TitleStyled></TitleStyled>
          <NameStyled></NameStyled>
          <RegionStyled></RegionStyled> */}
        </UpperWrapperStyled>
        <ContainerStyled>
          {/* {stack && stack.map((tag) => <Tag key={tag} content={tag} />)} */}
        </ContainerStyled>
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
  background-color: orange;
  padding: 24px;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid var(--gray-2, #bebebe);
`;

const DuedateStyled = styled(NoLineTagStyled)``;

const UpperWrapperStyled = styled.div`
  display: flex;
  /* width: 248px;
  height: 160px; */
  /* flex-direction: column;
  align-items: flex-start;
  gap: 8px; */
  flex-shrink: 0;
  background-color: olivedrab;
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
