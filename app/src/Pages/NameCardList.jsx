import styled from 'styled-components';
import FakeUserInfo from '../Api/FakeUserInfo.json';
import { useState, useEffect } from 'react';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import { MainContainerStyled } from '../Pages/MyPageFreelancer';
import { Messages } from '../Assets/Theme';
import MainButton from '../Components/Button/MainButton';
import NameCard from '../Components/Commons/NameCard';
import { BodyBackgroundStyled } from './LogIn';

const NameCardList = () => {
  const [userListInfo, setUserListInfo] = useState([]);

  useEffect(() => {
    setUserListInfo(FakeUserInfo);
  }, []);

  return (
    <BodyBackgroundStyled>
      <MainContainerStyled>
        <TotalWrapperStyled>
          <UpperWrapperStyled>
            <MiddleHeader midtitle={Messages.cardInList}></MiddleHeader>
            <MainButton content={Messages.selectNameCard} width={'164px'} />
          </UpperWrapperStyled>

          <CardListWrapperStyled>
            {userListInfo &&
              userListInfo.map((onecard, idx) => (
                <NameCard
                  key={idx}
                  name={onecard.name}
                  email={onecard.email}
                  phone={onecard.phone}
                  stack={onecard.stack}
                  className={null}
                ></NameCard>
              ))}
          </CardListWrapperStyled>
        </TotalWrapperStyled>
      </MainContainerStyled>
    </BodyBackgroundStyled>
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
