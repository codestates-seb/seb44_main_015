import styled from 'styled-components';
import { Colors } from '../Assets/Theme';
import { useState, useEffect } from 'react';
import NameCard from '../Components/Commons/NameCard';
import Resume from '../Components/Commons/Resume';
import Header from '../Components/Commons/Layouts/Header';
import axios from '../Api/Axios';
import { useParams } from 'react-router-dom';
import { MainContainerStyled } from './MyPageFreelancer';
import Footer from '../Components/Commons/Layouts/Footer';

const Profile = () => {
  let { userId } = useParams();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/user/${userId}`);
      setUserInfo(response.data);
    }
    fetchData();
  }, [userId]);

  return (
    <>
      <Header />
      <ProfileBackgroundStyled>
        <MainContainerStyled>
          <CenterSectionStyled>
            <NameCard
              key={userInfo.userId}
              userInfo={userInfo}
              className={'hide'}
            />
            <Resume resume={userInfo.resumeContents} />
          </CenterSectionStyled>
        </MainContainerStyled>
      </ProfileBackgroundStyled>
      <Footer />
    </>
  );
};

export default Profile;

export const CenterSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: auto;
  margin-top: 80px;
`;

export const ProfileBackgroundStyled = styled.div`
  background-color: ${(props) => props.$backgroundColor || `${Colors.Gray1}`};
  padding-top: 40px;
  background-size: cover;
  height: 80vh;
`;
