import EmploymentCard from '../EmploymentCard';
import FakeEmploymentInfo from '../../../Api/FakeEmploymentInfo.json';
import { styled } from 'styled-components';

const EmploymentCardList = () => {
  const employmentData = FakeEmploymentInfo;

  return (
    <>
      <NewEmploymentContainerStyled>
        <EmploymentCardContainerStyled>
          {employmentData.map((employmentInfo) => (
            <EmploymentCard
              key={employmentInfo.id}
              employmentInfo={employmentInfo}
            />
          ))}
        </EmploymentCardContainerStyled>
      </NewEmploymentContainerStyled>
    </>
  );
};

export default EmploymentCardList;

const NewEmploymentContainerStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 40px 190px 40px 190px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const EmploymentCardContainerStyled = styled.ul`
  display: flex;
  flex-wrap: wrap; // 너비를 벗어나면 밑으로 내려가게 함
  flex-direction: row;
  gap: 22px;
`;
