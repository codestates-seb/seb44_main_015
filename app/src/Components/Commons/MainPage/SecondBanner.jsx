import { Colors } from '../../../Assets/Theme';
import { styled } from 'styled-components';
import SecondBannerImg from '../../../Assets/Icons/SecondBannerImg.png';
import { useNavigate } from 'react-router-dom';

const SecondBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      <SecondBannerStyled>
        <TitleStyled>프리해요, 누가 만들었을까요?</TitleStyled>
        <TextStyled
          onClick={() => {
            navigate('/maker');
          }}
        >
          개발진 보러가기
        </TextStyled>
      </SecondBannerStyled>
    </>
  );
};

export default SecondBanner;

const SecondBannerStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 1060px;
  height: 106px;
  margin-top: 80px;
  margin-bottom: 64px;
  box-sizing: border-box;
  background-image: url(${SecondBannerImg});
`;

const TitleStyled = styled.p`
  margin-top: 23px;
  margin-left: 24px;
  color: ${Colors.Gray4};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TextStyled = styled(TitleStyled)`
  font-size: 16px;
  font-weight: 500;
  margin-top: 0px;
  cursor: pointer;
`;
