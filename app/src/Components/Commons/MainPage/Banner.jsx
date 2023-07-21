import { Colors } from '../../../Assets/Theme';
import { styled } from 'styled-components';
import BannerImg from '../../../Assets/Icons/BannerImg.png';

const Banner = () => {
  return (
    <>
      <BannerContainerStyled>
        <LeftSideContainerStyled>
          <BannerTextWrapperStyled>
            프리랜서 명함을 만들고, 회사에 넣어보세요
          </BannerTextWrapperStyled>
          <TagContainerStyled>
            <TagStyled>#프리랜서</TagStyled>
            <TagStyled>#명함</TagStyled>
            <TagStyled>#채용</TagStyled>
          </TagContainerStyled>
        </LeftSideContainerStyled>
        <BannerStyled src={BannerImg} alt="배너이미지" />
      </BannerContainerStyled>
    </>
  );
};

export default Banner;

const BannerContainerStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 530px;
  background-color: ${Colors.secondPurple};
`;

const LeftSideContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;

const BannerTextWrapperStyled = styled.div`
  max-width: 400px;
  height: 118px;
  color: ${Colors.Bgwhite};
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 59px;
  margin-top: 175px;
  margin-left: 190px;
  text-align: left;
`;

const TagContainerStyled = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 18px;
  margin-left: 190px;
`;

const TagStyled = styled.li`
  display: flex;
  padding: 8px 12px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.7);
  color: ${Colors.mainPurple};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BannerStyled = styled.img`
  width: 543px;
  height: 448px;
  margin-top: 96px;
  margin-right: 190px;
  margin-left: 105px;
`;
