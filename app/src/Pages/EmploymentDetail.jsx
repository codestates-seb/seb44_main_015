import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import CompanyDetailfromEmploy from '../Components/Commons/EmploymentDetailPage/CompanyDetail';
import ApplyToCompany from '../Components/Commons/EmploymentDetailPage/ApplyToCompany';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { Colors } from '../Assets/Theme';
import { useParams } from 'react-router-dom';
import axios from '../Api/Axios';

const EmploymentDetail = () => {
  let { noticeId } = useParams();
  const location = useLocation();
  const noticeIdFromState = location.state?.noticeId;
  const [userInfo, setUserInfo] = useState({});
  const [careerData, setCareerData] = useState({});
  const userId = localStorage.getItem('id');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `notice/${noticeIdFromState ? noticeIdFromState : noticeId}`,
      );
      setCareerData(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`user/${userId}`);
      setUserInfo(response.data);
    }
    fetchData();
  }, []);

  const cardSendHandler = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <Header />
      <EmploymentDetailContainerStyled>
        <CompanyDetailfromEmploy data={careerData} />
        <ApplyToCompany detail={careerData} data={userInfo} />
      </EmploymentDetailContainerStyled>
      <Footer />
    </>
  );
};

export default EmploymentDetail;

const EmploymentDetailContainerStyled = styled.main`
  display: flex;
  min-width: 1440px;
  height: auto;
  min-height: 720px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Colors.Bgwhite};
`;
