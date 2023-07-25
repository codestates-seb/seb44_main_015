import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Messages } from '../Assets/Theme';
import {
  BackgroundContainerStyled,
  MainContainerStyled,
} from '../Pages/MyPageFreelancer';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import MainButton from '../Components/Button/MainButton';
import NameCard from '../Components/Commons/NameCard';
import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import axios from '../Api/Axios';
import { useParams } from 'react-router-dom';

const NameCardList = ({}) => {
  let { noticeId } = useParams();
  const [userListInfo, setUserListInfo] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`notice/${noticeId}/card`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setUserListInfo(response.data);
    }
    fetchData();
  }, [noticeId]);

  const cardSendHandler = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <Header />
      {userListInfo.length !== 0 ? (
        <BackgroundContainerStyled>
          <MainContainerStyled>
            <TotalWrapperStyled>
              <UpperWrapperStyled>
                <MiddleHeader midtitle={Messages.cardInList}></MiddleHeader>
                <MainButton
                  onClick={cardSendHandler}
                  content={Messages.selectNameCard}
                  width={'164px'}
                  id={noticeId}
                  clicked={clicked}
                />
              </UpperWrapperStyled>

              <CardListWrapperStyled>
                {userListInfo &&
                  userListInfo.map((onecard) => (
                    <NameCard
                      key={onecard.cardCheckId}
                      userInfo={onecard}
                      className={null}
                      clicked={clicked}
                    ></NameCard>
                  ))}
              </CardListWrapperStyled>
            </TotalWrapperStyled>
          </MainContainerStyled>
        </BackgroundContainerStyled>
      ) : (
        <BackgroundContainerStyled>
          <MainContainerStyled>
            <TotalWrapperStyled>
              <UpperWrapperStyled>
                <MiddleHeader
                  midtitle={'아직 지원자가 없어요🤓'}
                ></MiddleHeader>
              </UpperWrapperStyled>
            </TotalWrapperStyled>
          </MainContainerStyled>
        </BackgroundContainerStyled>
      )}
      <Footer />
    </>
  );
};

export default NameCardList;

export const CardListWrapperStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 754px;
  height: auto;
  gap: 24px;
  padding: 40px 0px;
`;

export const UpperWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 754px;
`;

export const TotalWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 132px;
  width: 754px;
`;
