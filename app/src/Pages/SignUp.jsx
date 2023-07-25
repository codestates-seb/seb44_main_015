import MainButton from '../Components/Button/MainButton';
import OutlineButton from '../Components/Button/OutlineButton';
import Logo from '../Assets/Icons/Logo.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Colors } from '../Assets/Theme';
import styled from 'styled-components';

const Signup = () => {
  const tagList = [
    '신입',
    '1~3년차',
    '4~7년차',
    '7~10년차',
    '10년차+',
    '빠른손',
    '성실함',
    '꼼꼼함',
    '체계적',
    '참신함',
    '정시출근',
    '소통왕',
    '열정왕',
    '책임감',
    '외향적',
  ];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const [selectedUserType, setSelectedUserType] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const [addedResumes, setAddedResumes] = useState([]);
  const [resumeContent, setResumeContent] = useState('');

  const handleLogo = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleUserTypeSelect = (tag) => {
    setSelectedUserType(tag);
  };

  const handleAddResume = async (e) => {
    e.preventDefault();

    setErrors([]);

    if (resumeContent.trim() !== '') {
      setAddedResumes((prev) => [...prev, resumeContent]);
      setResumeContent('');
    } else {
      setErrors((prevErrors) => [...prevErrors, 'Empty']);
    }
  };

  const handleRemoveResume = (index) => {
    setAddedResumes((prevResumes) => {
      const updatedResumes = [...prevResumes];
      updatedResumes.splice(index, 1);
      return updatedResumes;
    });
  };

  const handleResumeChange = (e) => {
    const content = e.target.value;
    setResumeContent(content);
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
              프리랜서 / 회사 <br></br> 유형을 선택해 주세요
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
            <TagContainerStyled>
              {tagList.map((tag, index) => (
                <TagStyled key={index}>{tag}</TagStyled>
              ))}
            </TagContainerStyled>
            <LabelStyled>이력</LabelStyled>
            <InputStyled
              type="text"
              value={resumeContent}
              placeholder="이력을 입력해 주세요"
              onChange={handleResumeChange}
            />
            {errors.includes('Empty') && (
              <ErrorMessage>공백은 입력할 수 없습니다.</ErrorMessage>
            )}
          </FormContainerStyled>
          <ResumeContainerStyled>
            {addedResumes.map((resume, index) => (
              <div key={index}>
                <ResumeWrapperStyled>
                  <ResumeStyled>{resume}</ResumeStyled>
                  <RemoveButtonStyled onClick={handleRemoveResume}>
                    ✖
                  </RemoveButtonStyled>
                </ResumeWrapperStyled>
              </div>
            ))}
            <OutlineButton
              width={'400px'}
              content={'+ 이력 추가하기'}
              onClick={handleAddResume}
            ></OutlineButton>
          </ResumeContainerStyled>

          <MainButton width={'400px'} content={'회원가입'} />
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
  margin-bottom: 14px;
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

const TagContainerStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const TagStyled = styled.div`
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

const ResumeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

const ResumeWrapperStyled = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ResumeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.mainPurple};
  max-width: 350px;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; // 텍스트가 길어져도 한 줄에 나타나도록 설정

  padding: 4px 8px;
  border: 1px solid ${Colors.mainPurple};
  border-radius: 16px;
  background-color: ${Colors.Bgwhite};
`;

const RemoveButtonStyled = styled.div`
  margin-top: 4px;
  font-size: 25px;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 0.25rem 0 0 0;
`;
