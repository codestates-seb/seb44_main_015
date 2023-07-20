import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import CompanyDetail from '../Components/Commons/EmploymentDetailPage/CompanyDetail';
import ApplyToCompany from '../Components/Commons/EmploymentDetailPage/ApplyToCompany';
import FakeEmploymentInfo from '../Api/FakeEmploymentInfo.json';
import { styled } from 'styled-components';

const EmploymentDetail = () => {
  const employmentData = FakeEmploymentInfo.slice(0, 1);

  return (
    <>
      <Header />
      <EmploymentDetailContainerStyled>
        {employmentData.map((employmentInfo) => (
          <CompanyDetail
            key={employmentInfo.id}
            employmentInfo={employmentInfo}
          />
        ))}
        <ApplyToCompany></ApplyToCompany>
      </EmploymentDetailContainerStyled>

      <Footer />
    </>
  );
};

export default EmploymentDetail;

const EmploymentDetailContainerStyled = styled.div`
  display: flex;
  min-width: 1440px;
  height: auto;
  box-sizing: border-box;
  /* overflow-x: auto; */
  flex-direction: row;
  justify-content: space-between;
`;
