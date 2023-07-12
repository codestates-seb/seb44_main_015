import Header from '../../Components/Commons/Layouts/Header';
import Footer from '../../Components/Commons/Layouts/Footer';
import Banner from './Banner';
import SecoondBanner from './SecondBanner';
import NewEmployment from './NewEmployment';
import CardOfTheWeek from './CardOfTheWeek';
import { styled } from 'styled-components';

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
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  height: auto;
  box-sizing: border-box;
  overflow-x: auto;
`;
