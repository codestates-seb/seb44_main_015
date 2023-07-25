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
import Footer from '../Components/Commons/Layouts/Footer';
import MakersList from '../Api/MakerInfo.json';

const Maker = () => {
  const Makers = MakersList.slice();

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
                      key={onecard.name}
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
      <Footer />
    </>
  );
};

export default Maker;
