import MainButton from '../Components/Button/MainButton';
import Logo from '../Assets/Icons/Logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Colors } from '../Assets/Theme';
import styled from 'styled-components';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [erros, setErros] = useState([]);
  const navigate = useNavigate();

  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleLogo = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleUserTypeSelect = (tag) => {
    setSelectedUserType(tag);
  };

  return (
    <>
      <PageContainerStyled>
        <SignupContainerStyled>
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
            />

            <LabelStyled>비밀번호</LabelStyled>
            <InputStyled
              type="password"
              value={password}
              placeholder="비밀번호를 입력해 주세요"
              onChange={(e) => setPassword(e.target.value)}
            />

            <LabelStyled>이름</LabelStyled>
            <InputStyled
              type="text"
              value={name}
              placeholder="이름을 입력해 주세요"
              onChange={(e) => setName(e.target.value)}
            />

            <LabelStyled>휴대폰번호</LabelStyled>
            <InputStyled
              type="text"
              value={phone}
              placeholder="휴대폰 번호를 입력해 주세요"
              onChange={(e) => setPhone(e.target.value)}
            />

            <LabelStyled>마이키워드</LabelStyled>
            <KeywordContainerStyled>
              <KeywordStyled>히히</KeywordStyled>
            </KeywordContainerStyled>
          </FormContainerStyled>
          <MainButton width={'400px'} content={'회원가입'} type={'submit'} />
          <LoginContainerStyled>
            <MemberStyled>이미 회원이신가요?</MemberStyled>
            <LoginStyled onClick={handleLogin}>로그인</LoginStyled>
          </LoginContainerStyled>
        </SignupContainerStyled>
      </PageContainerStyled>
    </>
  );
};

export default Signup;

const PageContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Gray1};
  height: 100vh;
  box-sizing: border-box;
`;

const SignupContainerStyled = styled.div`
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

  overflow-y: auto;
  overflow-x: hidden;
  //스크롤바 디자인 입니다.
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.thirdPurple};
    border-radius: 16px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${Colors.secondPurple};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${Colors.mainPurple};
  }
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

const KeywordContainerStyled = styled.div`
  background-color: skyblue;
`;

const KeywordStyled = styled.div`
  display: flex;
  padding: 8px 12px;
  gap: 8px;
  white-space: nowrap;
  background-color: ${(props) =>
    props.selected ? Colors.Bgwhite : Colors.Gray1};
  border: 1px solid
    ${(props) => (props.selected ? Colors.mainPurple : 'transparent')};
  border-radius: 16px;
  border-radius: 16px;
  color: ${(props) => (props.selected ? Colors.mainPurple : Colors.Gray4)};
  font-size: 14px;
  line-height: 20px;
  font-weight: ${(props) => (props.selected ? '400' : '300')};

  &:hover {
    background-color: ${Colors.Bgwhite};
    border-color: ${Colors.mainPurple};
    color: ${Colors.mainPurple};
    font-weight: 400;
    cursor: pointer;
  }
`;

const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;

const MemberStyled = styled.div`
  border-right: 1px solid var(--gray-2, #bebebe);
  width: 140px;
  color: var(--gray-4, #333);
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
`;

const LoginStyled = styled.div`
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
