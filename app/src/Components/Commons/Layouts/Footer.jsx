import { styled } from 'styled-components';
import { Colors } from '../../../Assets/ColorTheme';
import Logo from '../../../Assets/Icons/Logo.png';
import GithubLogo from '../../../Assets/Icons/GithubLogo.png';

const Footer = () => {
  return (
    <>
      <FooterContainerStyled>
        <InformationContainerStyled>
          <LogoStyled src={Logo} alt="로고" />
          <EmailStyled>freehaeyo@gmail.com</EmailStyled>
          <TeamIntroductionStyled>
            코드스테이츠 44기 과제 <br />
            그만자고 15나 팀
          </TeamIntroductionStyled>
        </InformationContainerStyled>
        <TermsContainerStyled>
          <TermsStyled>이용 약관</TermsStyled>
          <TermsStyled>개인정보처리방침</TermsStyled>
          <TermsStyled>개발진</TermsStyled>
        </TermsContainerStyled>
        <GithubLinkStyled>
          <GithubLogoStyled src={GithubLogo} alt="깃허브 로고" />
          GitHub
        </GithubLinkStyled>
      </FooterContainerStyled>
    </>
  );
};

export default Footer;

const FooterContainerStyled = styled.footer`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 223px;
  padding: 49.15px 190px 49.15px 190px;
  border-top: 1px solid ${Colors.Gray2};
  overflow-x: auto; // 스크롤 추가
`;

const InformationContainerStyled = styled.div`
  display: flex;
  flex: 2; // 너비를 늘리 때, 어느정도의 변화를 원하는지 논의해야 할 듯.
  flex-direction: column;
  min-width: 127px;
  align-items: flex-start;
`;

const LogoStyled = styled.img`
  width: 93px;
  height: 20px;
  margin-right: 18px;
`;

const EmailStyled = styled.p`
  margin: 8px 0 0 0;
  text-align: left;
  font-size: 12px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TeamIntroductionStyled = styled(EmailStyled)`
  color: ${Colors.Gray2};
`;

const TermsContainerStyled = styled.div`
  display: flex;
  flex: 7; // 너비를 늘리 때, 어느정도의 변화를 원하는지 논의해야 할 듯.
  min-width: 600px;
  align-items: flex-start;
`;

const TermsStyled = styled.a`
  // 나중에 링크를 추가할 수도 있을 것 같아서 a를 사용했습니다.
  margin: 0 20px;
  color: ${Colors.Gray4};
  font-size: 12px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GithubLinkStyled = styled.a`
  display: flex;
  flex-shrink: 0;
  width: 79px;
  height: 26px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 16px;
  background: ${Colors.secondPurple};
  color: #000;
  font-size: 12px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const GithubLogoStyled = styled.img`
  width: 16px;
  height: 16px;
`;
