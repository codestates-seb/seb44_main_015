import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Messages } from '../Assets/Theme';
import { BackgroundContainerStyled } from '../Pages/MyPageFreelancer';
import { MainContainerStyled } from '../Pages/MyPageFreelancer';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import MainButton from '../Components/Button/MainButton';
import NameCard from '../Components/Commons/NameCard';
import Header from '../Components/Commons/Layouts/Header';
import axios from '../Api/Axios';
import { useParams } from 'react-router-dom';

const NameCardList = ({ selectedHanlder }) => {
  const [userListInfo, setUserListInfo] = useState([]);
  let { noticeId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`notice/${noticeId}/card`, {
        headers: {
          Authorization: `BearereyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJDT01QQU5ZIl0sImlkIjoyLCJlbWFpbCI6ImdhcmFtQGdtYWlsLmNvbSIsInN1YiI6ImdhcmFtQGdtYWlsLmNvbSIsImlhdCI6MTY4OTgyMzk4MywiZXhwIjoxNjkwMDAzOTgzfQ.P5lpeQ_CdP706T0JE5PrWHeY_1ICvhlCIDxASCZ0wk8`,
        },
      });
      setUserListInfo(response.data);
    }
    fetchData();
  }, [noticeId]);

  return (
    <>
      <Header />
      {userListInfo ? (
        <BackgroundContainerStyled>
          <MainContainerStyled>
            <TotalWrapperStyled>
              <UpperWrapperStyled>
                <MiddleHeader midtitle={Messages.cardInList}></MiddleHeader>
                <MainButton content={Messages.selectNameCard} width={'164px'} />
              </UpperWrapperStyled>

              <CardListWrapperStyled>
                {userListInfo &&
                  userListInfo.map((onecard) => (
                    <NameCard
                      key={onecard.id}
                      userInfo={onecard}
                      className={null}
                    ></NameCard>
                  ))}
              </CardListWrapperStyled>
            </TotalWrapperStyled>
          </MainContainerStyled>
        </BackgroundContainerStyled>
      ) : (
        <div>지원자가 없어요</div>
      )}
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
  height: 100%;
`;
