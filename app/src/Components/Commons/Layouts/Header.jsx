import { useNavigate } from 'react-router-dom';
import { Colors } from '../../../Assets/Theme';
import { styled } from 'styled-components';
import Logo from '../../../Assets/Icons/Logo.png';
import Search from '../../../Assets/Icons/Search.png';
import Profile from '../../../Assets/Icons/Profile.png';

const Header = () => {
  const navigate = useNavigate();

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

  return (
    <HeaderContainerStyled>
      <h1>
        <LogoStyled onClick={handleLogoClick} src={Logo} alt="프리해요" />
      </h1>
      <NavContainerStyled>
        <NavStyled onClick={handleEmploymentClick}>채용</NavStyled>
        <NavStyled>개발진</NavStyled>
      </NavContainerStyled>
      <SearchStyled src={Search} alt="검색" />
      <AuthContainerStyled>
        <LoginStyled onClick={handleLoginClick}>로그인</LoginStyled>
        <SignupStyled onClick={handleSignupClick}>회원가입</SignupStyled>
        {/* <ProfileStyled src={Profile} alt="프로필" /> */}
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
  width: 40px;
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
  padding-left: 9px;
  border-left: 1px solid ${Colors.Gray3};
`;

const ProfileStyled = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;

// 로그인 상태에 따른 헤더 변화

// const Header = () => {
//   const { isLoggedIn } = useSelector((state) => state.login) || false;
//   const dispatch = useDispatch();

//   // 로그아웃 시 토큰 삭제
//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//   };

//   useEffect(() => {
//     // 새로고침 시 로컬스토리지에서 토큰확인하고 상태변경
//     const storedAccessToken = localStorage.getItem('accessToken');
//     if (storedAccessToken) {
//       dispatch(setLoginStatus({ isLoggedIn: true }));
//     } else {
//       dispatch(setLoginStatus({ isLoggedIn: false }));
//     }
//   }, []);
//   return (
//     <HeaderContainerStyled>
//       <LogoStyled src={Logo} alt="로고" />

//       <NavContainerStyled>
//         <NavStyled>채용</NavStyled>
//         <NavStyled>개발진</NavStyled>
//       </NavContainerStyled>

//       <SearchStyled src={Search} alt="검색" />
//       <AuthContainer>

// {!isLoggedIn ? (
//   <LoginStyled>로그인</LoginStyled>
//   <SignupStyled>회원가입</SignupStyled>
// ) : (
//   <NavContainer>
//     <ProfileStyled src={Profile} alt={프로필} />
//   </NavContainer>
// )}
//       </AuthContainer>
//     </HeaderContainerStyled>
//   );
// };

// export default Header;
