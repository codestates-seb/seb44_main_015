import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import CompanyDetail from '../Components/Commons/EmploymentDetailPage/CompanyDetail';
import ApplyToCompany from '../Components/Commons/EmploymentDetailPage/ApplyToCompany';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { Colors } from '../Assets/Theme';
import axios from 'axios';

const EmploymentDetail = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const noticeIdFromState = location.state?.noticeId;

  useEffect(() => {
    const url = `http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/notice/${noticeIdFromState}`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('API 요청 실패:', error);
      });
  }, [noticeIdFromState]);

  return (
    <>
      <Header />
      <EmploymentDetailContainerStyled>
        <CompanyDetail data={data} />
        <ApplyToCompany data={data} />
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
