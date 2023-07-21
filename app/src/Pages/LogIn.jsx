import { Colors } from '../Assets/Theme';
import TextArea from '../Components/Commons/TextArea';
import MainButton from '../Components/Button/MainButton';
import {
  BodyBackgroundStyled,
  MainStyled,
  HomeLinkWrapperStyled,
  HomeLinkStyled,
  LogInWrapperStyled,
} from '../Components/Commons/SignUp/Form';
import LogoTag from '../Components/Commons/SignUp/LogoTag';

import styled from 'styled-components';

function LogIn() {
  return (
    <BodyBackgroundStyled>
      <MainStyled>
        <HomeLinkWrapperStyled>
          <HomeLinkStyled>홈으로</HomeLinkStyled>
        </HomeLinkWrapperStyled>
        <LogInWrapperStyled>
          <LogoTag />
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
