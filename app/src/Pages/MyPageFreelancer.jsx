import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Messages } from '../Assets/Theme';

import NameCard from '../Components/Commons/NameCard';
import Resume from '../Components/Commons/Resume';
import OutlineButton from '../Components/Button/OutlineButton';
import FakeUserInfo from '../Api/FakeUserInfo.json';
import AppliedBox from '../Components/Commons/MyPage/AppliedBox';
import AppliedBoard from '../Components/Commons/MyPage/AppliedBoard';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import { BodyBackgroundStyled } from './LogIn';

const MyPageFreelancer = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(FakeUserInfo[0]);
  }, []);

  const { name, email, phone, stack, resume } = userInfo;

  return (
    <BodyBackgroundStyled>
      <MainContainerStyled>
        <TotalWrapperStyled>
          <TitleWrapperStyled>
            <MiddleHeader midtitle={Messages.myPage} />
          </TitleWrapperStyled>
          <LeftSectionStyled>
            <NameCard
              name={name}
              email={email}
              phone={phone}
              stack={stack}
              className={'hide'}
            />
            <Resume resume={resume} />
            <ButtonWrapperStyled>
              <OutlineButton width={'360px'} content={Messages.cardEditBtn} />
            </ButtonWrapperStyled>
          </LeftSectionStyled>
          <RightSectionStyled>
            <AppliedBoard />
            <AppliedBox number={5} content={Messages.showCareerBtn} />
            <AppliedBox
              number={5}
              title={Messages.bookmarkedTitle}
              message={Messages.bookmarkedMessage}
              content={Messages.showCareerBtn}
            />
          </RightSectionStyled>
        </TotalWrapperStyled>
      </MainContainerStyled>
    </BodyBackgroundStyled>
  );
};

export default MyPageFreelancer;

export const MainContainerStyled = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 1060px;
  margin: 0 auto;
`;

export const LeftSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: auto;
  margin-top: 24px;
`;

export const ButtonWrapperStyled = styled.div`
  position: relative;
  margin-top: 16px;
`;

export const RightSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 676px;
  margin-left: 24px;
  margin-bottom: 120px;
  margin-top: 24px;
`;

export const TitleWrapperStyled = styled.div`
  display: flex;
  width: 1060px;
`;

export const TotalWrapperStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 40px auto 132px;
  width: 1060px;
  height: 100%;
`;
