import EmploymentCard from '../../Components/Commons/EmploymentCard';
import FakeEmploymentInfo from '../../Api/FakeEmploymentInfo.json';
import { Colors } from '../../Assets/Theme';
import { styled } from 'styled-components';

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

const NewEmploymentContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const TitleStyled = styled.h3`
  margin-bottom: 41px;
  color: ${Colors.Gray4};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
`;

const EmploymentCardContainerStyled = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 22px;
`;
