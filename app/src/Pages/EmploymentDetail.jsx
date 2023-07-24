import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import CompanyDetail from '../Components/Commons/EmploymentDetailPage/CompanyDetail';
// import ApplyToCompany from '../Components/Commons/EmploymentDetailPage/ApplyToCompany';
import { styled } from 'styled-components';
import { Colors } from '../Assets/Theme';

const EmploymentDetail = ({ employmentInfo }) => {
  console.log(employmentInfo, 'K');
  return (
    <>
      <Header />
      <EmploymentDetailContainerStyled>
        <CompanyDetail
          key={employmentData.noticeId}
          employmentInfo={employmentData}
        />
        )) ) : (<p>No employment data available.</p>
        )}
        {/* <ApplyToCompany></ApplyToCompany> */}
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
  min-height: 720px;
  box-sizing: border-box;
  /* overflow-x: auto; */
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Colors.Bgwhite};
`;
