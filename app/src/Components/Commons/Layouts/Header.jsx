import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Colors } from '../../../Assets/Theme';
import { styled } from 'styled-components';
import Logo from '../../../Assets/Icons/Logo.png';
import Search from '../../../Assets/Icons/Search.png';
import Profile from '../../../Assets/Icons/Profile.png';

const Header = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 로그인 상태를 확인
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken); // 로그인 상태를 갱신
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };
  const handleEmploymentClick = () => {
    navigate('/employmentlist');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleSignupClick = () => {
    navigate('/signup');
  };
  const handleMakerClick = () => {
    navigate('/maker');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('userType');

    navigate('/');
  };

  const handleMypageClick = () => {
    if (isLoggedIn !== false) {
      if (localStorage.getItem('userType') === 'user') {
        navigate(`/mypageuser/${localStorage.getItem('id')}`);
      } else {
        navigate(`/mypagecompany/${localStorage.getItem('id')}`);
      }
    } else {
      alert('회원가입해주세요!');
    }
  };

  return (
    <HeaderContainerStyled>
      <h1>
        <LogoStyled onClick={handleLogoClick} src={Logo} alt="프리해요" />
      </h1>
      <NavContainerStyled>
        <NavStyled onClick={handleEmploymentClick}>채용</NavStyled>
        <NavStyled onClick={handleMakerClick}>개발진</NavStyled>
      </NavContainerStyled>
      <SearchStyled onClick={handleSearchClick} src={Search} alt="검색" />
      <AuthContainerStyled>
        {isLoggedIn ? (
          <>
            <ProfileStyled
              src={Profile}
              alt="프로필"
              $isLoggedIn={isLoggedIn}
              onClick={handleMypageClick}
            />
            <LogoutStyled onClick={handleLogoutClick}>로그아웃</LogoutStyled>
          </>
        ) : (
          <>
            <LoginStyled onClick={handleLoginClick}>로그인</LoginStyled>
            <SignupStyled onClick={handleSignupClick}>회원가입</SignupStyled>
          </>
        )}
      </AuthContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Header;

const HeaderContainerStyled = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 50px;
  min-width: 1440px;
  padding: 14px 190px;
  border-bottom: 1px solid ${Colors.Gray2};
  box-sizing: border-box;
  background-color: ${Colors.Bgwhite};
`;

const LogoStyled = styled.img`
  width: 93px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const NavContainerStyled = styled.ul`
  display: flex;
  flex: 6;
  align-items: center;
  min-width: 500px;
  height: 50px;
  gap: 10px;
  margin: 12px 8px 8px 72px;
  box-sizing: border-box;
`;

const NavStyled = styled.li`
  margin-right: 10px;
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  &:hover {
    color: ${Colors.mainPurple};
    font-weight: 700;
    cursor: pointer;
  }
`;

const SearchStyled = styled.img`
  width: 31px;
  height: 31px;
  &:hover {
    cursor: pointer;
  }
`;

const AuthContainerStyled = styled.div`
  display: flex;
`;

const LoginStyled = styled.p`
  width: 45px;
  margin-left: 32px;
  color: ${Colors.Gray4};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: ${Colors.mainPurple};
    font-weight: 700;
    cursor: pointer;
  }
`;

const SignupStyled = styled(LoginStyled)`
  width: 56px;
  margin-left: 9px;
  padding-left: 18px;
  border-left: 1px solid ${Colors.Gray3};
`;

const ProfileStyled = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;
  cursor: pointer;
`;

const LogoutStyled = styled(LoginStyled)`
  width: 80px;
  margin-top: 4px;
  padding-left: 12px;
  margin-left: 12px;
  border-left: 1px solid ${Colors.Gray3};
`;
