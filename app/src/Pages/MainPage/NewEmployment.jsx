import { styled } from 'styled-components';
import EmploymentCard from '../../Components/Commons/EmploymentCard';
import FakeEmploymentInfo from '../../Api/FakeEmploymentInfo.json';

const NewEmployment = () => {
  const employmentData = FakeEmploymentInfo.slice(0, 4);

  return (
    <>
      <NewEmploymentContainerStyled>
        <TitleStyled>⚡ 신규 채용</TitleStyled>
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

export default NewEmployment;

const NewEmploymentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;
const TitleStyled = styled.h3`
  color: var(--gray-4, #333);
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
  margin-bottom: 41px;
`;
const EmploymentCardContainerStyled = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 22px;
`;
