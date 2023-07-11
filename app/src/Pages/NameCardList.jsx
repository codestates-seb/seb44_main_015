import styled from 'styled-components';
import FakeUserInfo from '../Api/FakeUserInfo.json';
import { useState, useEffect } from 'react';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import { MainContainerStyled } from '../Pages/MyPageFreelancer';
import { Messages } from '../Assets/Theme';
import MainButton from '../Components/Button/MainButton';
import SelectedNameCard from '../Components/Commons/SelectedNameCard';

const NameCardList = () => {
  const [userListInfo, setUserListInfo] = useState([]);

  useEffect(() => {
    setUserListInfo(FakeUserInfo);
  }, []);

  return (
    <>
      <UpperWrapperStyled>
        <MiddleHeader midtitle={Messages.cardInList}></MiddleHeader>
        <MainButton content={Messages.selectNameCard} width={'164px'} />
      </UpperWrapperStyled>
      <MainContainerStyled>
        <CardListWrapperStyled>
          {userListInfo &&
            userListInfo.map((onecard, idx) => (
              <SelectedNameCard
                key={idx}
                name={onecard.name}
                email={onecard.email}
                phone={onecard.phone}
                stack={onecard.stack}
              />
            ))}
        </CardListWrapperStyled>
      </MainContainerStyled>
    </>
  );
};

export default NameCardList;

export const CardListWrapperStyled = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 754px;
  height: auto;
  gap: 24px;
`;

export const UpperWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 754px;
  margin: 40px 343px 40px 343px;
`;
