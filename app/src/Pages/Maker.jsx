import { useState, useEffect } from 'react';
import { Colors } from '../Assets/Theme';
import {
  BackgroundContainerStyled,
  MainContainerStyled,
} from '../Pages/MyPageFreelancer';
import {
  CardListWrapperStyled,
  UpperWrapperStyled,
  TotalWrapperStyled,
} from './NameCardList';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import NameCard from '../Components/Commons/NameCard';
import Header from '../Components/Commons/Layouts/Header';
import axios from '../Api/Axios';

const Maker = () => {
  const [userListInfo, setUserListInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('user');
      setUserListInfo(response.data);
    }
    fetchData();
  }, []);

  const Makers = userListInfo.filter((maker) => maker.email.includes('naver'));

  return (
    <>
      <Header />
      {Makers.length !== 0 ? (
        <BackgroundContainerStyled $backgroundColor={Colors.Bgwhite}>
          <MainContainerStyled>
            <TotalWrapperStyled>
              <UpperWrapperStyled>
                <MiddleHeader midtitle={'💡 개발진 소개'}></MiddleHeader>
              </UpperWrapperStyled>

              <CardListWrapperStyled>
                {Makers &&
                  Makers.map((onecard) => (
                    <NameCard
                      key={onecard.cardCheckId}
                      userInfo={onecard}
                      className={'hide'}
                    ></NameCard>
                  ))}
              </CardListWrapperStyled>
            </TotalWrapperStyled>
          </MainContainerStyled>
        </BackgroundContainerStyled>
      ) : (
        <MiddleHeader midtitle={'로딩중입니다🤓'}></MiddleHeader>
      )}
    </>
  );
};

export default Maker;
