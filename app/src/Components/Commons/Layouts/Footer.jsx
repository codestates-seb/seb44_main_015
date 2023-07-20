import { Colors } from '../../../Assets/Theme';
import { styled } from 'styled-components';
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
  position: relative;
  bottom: 0;

  display: flex;
  width: 100%;
  height: 223px;
  min-width: 1440px;
  padding: 49.15px 190px;
  border-top: 1px solid ${Colors.Gray2};
  box-sizing: border-box;
  z-index: 1;
  background-color: ${Colors.Bgwhite};
`;

const InformationContainerStyled = styled.div`
  display: flex;
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
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TeamIntroductionStyled = styled(EmailStyled)`
  color: ${Colors.Gray3};
`;

const TermsContainerStyled = styled.ul`
  display: flex;
  flex: 6;
  min-width: 600px;
  align-items: flex-start;
`;

const TermsStyled = styled.li`
  margin: 0 20px;
  color: ${Colors.Gray4};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
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
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GithubLogoStyled = styled.img`
  width: 16px;
  height: 16px;
`;
