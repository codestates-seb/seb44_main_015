import { Colors } from '../Assets/Theme';
import Tag from '../Components/Commons/Tag';
import TextArea from '../Components/Commons/TextArea';
import MainButton from '../Components/Button/MainButton';

import { useState, useEffect } from 'react';

import styled from 'styled-components';

import Logo from '../Assets/Icons/Logo.png';

function LogIn() {
  const [focusTag, setFocusTag] = useState('freelancer');

  const handleFocusTag = (tag) => () => {
    setFocusTag(tag);
  };

  return (
    <BodyBackgroundStyled>
      <MainStyled>
        <HomeLinkWrapperStyled>
          <HomeLinkStyled>홈으로</HomeLinkStyled>
        </HomeLinkWrapperStyled>
        <LogInWrapperStyled>
          <LogoWrapperStyled>
            <h2>
              <LogoStyled src={Logo} alt="프리해요"></LogoStyled>
            </h2>
            <NoticeStyled>
              프리랜서/회사 유형을 선택 후<br></br>로그인 해 주세요
            </NoticeStyled>
          </LogoWrapperStyled>
          <TagWrapperStyled>
            <Tag
              children={'🧑‍💻 프리랜서'}
              className={
                focusTag === 'freelancer'
                  ? 'mediumSelected'
                  : 'mediumUnSelected'
              }
              onClick={handleFocusTag('freelancer')}
            />
            <Tag
              children={'🏢 회사 · 의뢰인'}
              className={
                focusTag === 'company' ? 'mediumSelected' : 'mediumUnSelected'
              }
              onClick={handleFocusTag('company')}
            />
          </TagWrapperStyled>
          <TextAreaWrapperStyled>
            <li>
              <TextArea
                title={'이메일'}
                placeholder={'이메일을 입력해주세요'}
                errorMessage={'일치하는 회원 정보가 없습니다'}
                className={'hide'}
              />
            </li>
            <li>
              <TextArea
                title={'비밀번호'}
                placeholder={'비밀번호를 입력해주세요'}
              />
            </li>
          </TextAreaWrapperStyled>
          <MainButton width={'100%'} content={'로그인'} />
          <SignUpWrapperStyled>
            <SignUpNoticeStyled>아직 회원이 아니신가요?</SignUpNoticeStyled>
            <SignUpStyled>회원가입</SignUpStyled>
          </SignUpWrapperStyled>
        </LogInWrapperStyled>
      </MainStyled>
    </BodyBackgroundStyled>
  );
}

export default LogIn;

export const BodyBackgroundStyled = styled.div`
  background-color: ${Colors.Gray1};
  height: 100%;
`;

const MainStyled = styled.main`
  padding: 0 0 24px;
  text-align: right;
`;

const HomeLinkWrapperStyled = styled.div`
  padding: 8px 0 8px;
`;

const HomeLinkStyled = styled.a`
  text-align: right;
  lineheight: 36px;
  font-size: 14px;
  color: ${Colors.Gray3};
  font-weight: 400;
  cursor: pointer;
`;

const LogInWrapperStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 132px;
  padding: 80px 60px 80px;
  width: 520px;
  height: 100%;
  text-align: left;
  background-color: ${Colors.Bgwhite};
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  box-sizing: border-box;
`;

const LogoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoStyled = styled.img`
  width: 108px;
  height: 22px;
`;

const NoticeStyled = styled.p`
  margin: 16px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.Gray3};
  text-align: center;
  line-height: 24px;
`;

const TagWrapperStyled = styled.ul`
  display: flex;
  width: 100%;
  margin: 24px 0 40px;
  gap: 16px;
`;

const TextAreaWrapperStyled = styled.ul`
  margin-bottom: 56px;
  & > li:first-child {
    margin-bottom: 10px;
  }
`;
const SignUpWrapperStyled = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
`;

const SignUpNoticeStyled = styled.p`
  color: ${Colors.Gray4};
  line-height: 24px;
  &:after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 24px;
    margin: 0 16px 0;
    background-color: ${Colors.Gray2};
    vertical-align: middle;
  }
`;

const SignUpStyled = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: ${Colors.mainPurple};
  cursor: pointer;
`;
