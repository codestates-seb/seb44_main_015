import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import CompanyDetailfromEmploy from '../Components/Commons/EmploymentDetailPage/CompanyDetail';
import ApplyToCompany from '../Components/Commons/EmploymentDetailPage/ApplyToCompany';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { Colors } from '../Assets/Theme';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmploymentDetail = () => {
  let { noticeId } = useParams();
  const location = useLocation();
  const noticeIdFromState = location.state?.noticeId;
  const [userInfo, setUserInfo] = useState({});
  const [careerData, setCareerData] = useState({});
  const userId = localStorage.getItem('id');

  useEffect(() => {
    axios
      .all([
        axios.get(
          `http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/notice/${
            noticeIdFromState ? noticeIdFromState : noticeId
          }`,
        ),
        axios.get(
          `http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/user/${userId}`,
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          setCareerData(res1.data);
          setUserInfo(res2.data);
        }),
      )
      .catch((err) => console.log(err));
  }, []);

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
