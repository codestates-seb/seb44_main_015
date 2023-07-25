import MainButton from '../Components/Button/MainButton';
import Logo from '../Assets/Icons/Logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Colors } from '../Assets/Theme';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleUserTypeSelect = (tag) => {
    setSelectedUserType(tag);
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogo = () => {
    navigate('/');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrors([]);

    let isValid = true;
    // 이메일 유효성 검사
    if (!email) {
      setErrors((prevErrors) => [...prevErrors, 'Email_empty']);
      isValid = false;
    } else if (!email.includes('@')) {
      setErrors((prevErrors) => [...prevErrors, 'Email_invalid']);
      isValid = false;
    }

    // 비밀번호 유효성 검사
    if (!password) {
      setErrors((prevErrors) => [...prevErrors, 'Password_empty']);
      isValid = false;
    }

    if (isValid) {
      try {
        const postData =
          selectedUserType === 'freelancer'
            ? {
                userType: 'user',
                email: email,
                password: password,
              }
            : {
                userType: 'company',
                email: email,
                password: password,
              };

        const response = await axios.post(
          'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/login',
          postData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.data.accessToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('id', response.data.id);
          localStorage.setItem('userType', response.data.userType);

          navigate('/');
        } else {
          setErrors((prevErrors) => [...prevErrors, 'LoginFail']);
          throw new Error(
            '로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.',
          );
        }
      } catch (error) {
        console.error('로그인 요청 중 오류가 발생했습니다.', error);
        setErrors((prevErrors) => [...prevErrors, 'LoginFail']);
      }
    }
  };

  return (
    <>
      <PageContainerStyled>
        <LoginContainerStyled>
          <LogoWrapperStyled>
            <h2>
              <LogoStyled
                src={Logo}
                alt="프리해요"
                onClick={handleLogo}
              ></LogoStyled>
            </h2>
            <NoticeStyled>
              프리랜서/회사 유형을 선택 후<br></br>로그인 해 주세요
            </NoticeStyled>
            <UserTypeContainerStyled>
              <UserTypeStyled
                onClick={() => handleUserTypeSelect('freelancer')}
                className={selectedUserType === 'freelancer' ? 'selected' : ''}
              >
                🧑‍💻 프리랜서
              </UserTypeStyled>
              <UserTypeStyled
                onClick={() => handleUserTypeSelect('company')}
                className={selectedUserType === 'company' ? 'selected' : ''}
              >
                🏢 회사 · 의뢰인
              </UserTypeStyled>
            </UserTypeContainerStyled>
          </LogoWrapperStyled>
          <FormContainerStyled>
            <LabelStyled>이메일</LabelStyled>
            <InputStyled
              type="text"
              value={email}
              placeholder="이메일을 입력해 주세요"
              onChange={(e) => setEmail(e.target.value)}
              error={
                errors.includes('Email_empty') ||
                errors.includes('Email_invalid')
              }
            />
            {errors.includes('Email_empty') && (
              <ErrorMessage>이메일 주소를 입력해 주세요.</ErrorMessage>
            )}
            {errors.includes('Email_invalid') && (
              <ErrorMessage>유효하지 않은 이메일 주소입니다.</ErrorMessage>
            )}
            <LabelStyled>비밀번호</LabelStyled>
            <InputStyled
              type="password"
              value={password}
              placeholder="비밀번호를 입력해 주세요"
              onChange={(e) => setPassword(e.target.value)}
              error={errors.includes('Password_empty')}
            />
            {errors.includes('Password_empty') && (
              <ErrorMessage>비밀번호를 입력해 주세요.</ErrorMessage>
            )}
          </FormContainerStyled>
          {errors.includes('LoginFail') && (
            <LoginFailStyled>
              로그인에 실패하였습니다. 이메일주소와 비밀번호를 확인해 주세요!
            </LoginFailStyled>
          )}
          <MainButton
            width={'400px'}
            content={'로그인'}
            type={'submit'}
            onClick={handleLogin}
          />
          <SignupContainerStyled>
            <NotMemberStyled>아직 회원이 아니신가요?</NotMemberStyled>
            <SignupStyled onClick={handleSignup}>회원가입</SignupStyled>
          </SignupContainerStyled>
        </LoginContainerStyled>
      </PageContainerStyled>
    </>
  );
};

export default Login;

const PageContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Gray1};
  height: 100vh;
  box-sizing: border-box;
`;

const LoginContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 520px;
  height: 751px;
  padding: 80px 60px;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid var(--gray-2, #bebebe);
  background: #fff;
`;

const LogoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoStyled = styled.img`
  width: 108px;
  height: 22px;

  &:hover {
    cursor: pointer;
  }
`;

const NoticeStyled = styled.p`
  margin: 16px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.Gray3};
  text-align: center;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 26px;
`;

const UserTypeContainerStyled = styled.div`
  display: flex;
  gap: 10px;
`;

const UserTypeStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 160px;

  padding: 16px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  background-color: ${Colors.Bgwhite};

  color: ${Colors.Gray3};
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;

  &:hover {
    color: var(--main, #7000ff);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${Colors.thirdPurple};
    border: 1px solid ${Colors.mainPurple};
  }

  &.selected {
    color: var(--main, #7000ff);
    font-size: 16px;
    font-weight: 700;
    background-color: ${Colors.thirdPurple};
    border: 1px solid ${Colors.mainPurple};
  }
`;

const FormContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
`;

const LabelStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 9px;
  color: var(--gray-4, #333);
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
`;

const InputStyled = styled.input`
  width: 400px;
  height: 56px;
  font-size: 18px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 1px solid var(--gray-2, #bebebe);
`;

const SignupContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;

const NotMemberStyled = styled.div`
  border-right: 1px solid var(--gray-2, #bebebe);
  width: 175px;
  color: var(--gray-4, #333);
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
`;

const SignupStyled = styled.div`
  color: var(--main, #7000ff);
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  margin-left: 16px;

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 0.25rem 0 0 0;
`;

const LoginFailStyled = styled(ErrorMessage)`
  margin-bottom: 20px;
`;
