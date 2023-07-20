import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import Banner from '../Components/Commons/MainPage//Banner';
import SecoondBanner from '../Components/Commons/MainPage/SecondBanner';
import NewEmployment from '../Components/Commons/MainPage/NewEmployment';
import CardOfTheWeek from '../Components/Commons/MainPage/CardOfTheWeek';
import { styled } from 'styled-components';
import { Colors } from '../Assets/Theme';

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
  background-color: ${Colors.Bgwhite};
`;
