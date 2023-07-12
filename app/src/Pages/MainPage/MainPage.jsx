import { styled } from 'styled-components';
import Header from '../../Components/Commons/Layouts/Header';
import Footer from '../../Components/Commons/Layouts/Footer';

import Banner from './Banner';
import SecoondBanner from './SecondBanner';
import NewEmployment from './NewEmployment';
import CardOfTheWeek from './CardOfTheWeek';

const MainPage = () => {
  return (
    <>
      <MainPageContainerStyled>
        <Header />
        <Banner />
        <SecoondBanner />
        <NewEmployment />
        <CardOfTheWeek />
        <Footer />
      </MainPageContainerStyled>
    </>
  );
};

export default MainPage;

const MainPageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 1440px;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  height: auto;
`;
