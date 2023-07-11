import { styled } from 'styled-components';
import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import { Colors } from '../Assets/Theme';
import Banner from '../Assets/Icons/Banner.png';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainPageContainer>
        <BannerContainer>
          <LeftSideContainer>
            <BannerTextWrapper>
              프리랜서 명함을 만들고, 회사에 넣어보세요
            </BannerTextWrapper>
            <TagContainer>
              <TagStyled>#프리랜서</TagStyled>
              <TagStyled>#명함</TagStyled>
              <TagStyled>#채용</TagStyled>
            </TagContainer>
          </LeftSideContainer>
          <BannerStyled src={Banner} alt="배너이미지" />
        </BannerContainer>
      </MainPageContainer>
      <Footer />
    </>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  min-width: 1440px;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Colors.secondPurple};
  width: 100vw;
  height: 530px;
`;
const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;
const BannerTextWrapper = styled.div`
  max-width: 400px;
  height: 118px;
  color: #fff;
  font-family: Noto Sans CJK KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 59px;
  margin-top: 175px;
  margin-left: 190px;
  text-align: left;
`;
const TagContainer = styled.ul`
  display: flex;
  margin-left: 190px;
  gap: 10px;
  margin-top: 18px;
`;

const TagStyled = styled.li`
  display: flex;
  padding: 8px 12px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.7);
  color: var(--main, #7000ff);
  font-family: Noto Sans CJK KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BannerStyled = styled.img`
  margin-top: 96px;
  margin-right: 190px;
  margin-left: 105px;
  width: 543px;
  height: 448px;
`;
