import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Messages } from '../Assets/Theme';

import NameCard from '../Components/Commons/NameCard';
import Resume from '../Components/Commons/Resume';
import OutlineButton from '../Components/Button/OutlineButton';
import FakeUserInfo from '../Api/FakeUserInfo.json';
import AppliedBox from '../Components/Commons/MyPage/AppliedBox';
import AppliedBoard from '../Components/Commons/MyPage/AppliedBoard';

const MyPageFreelancer = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(FakeUserInfo[0]);
  }, []);

  const { name, email, phone, stack, resume } = userInfo;

  return (
    <MainContainerStyled>
      <LeftSectionStyled>
        <NameCard name={name} email={email} phone={phone} stack={stack} />
        <Resume resume={resume} />
        <ButtonWrapperStyled>
          <OutlineButton width={'360px'} content={Messages.cardEditBtn} />
        </ButtonWrapperStyled>
      </LeftSectionStyled>
      <RightSectionStyled>
        <AppliedBoard />
        <AppliedBox content={Messages.showCareerBtn} />
        <AppliedBox
          title={Messages.bookmarkedTitle}
          message={Messages.bookmarkedMessage}
          content={Messages.showCareerBtn}
        />
      </RightSectionStyled>
    </MainContainerStyled>
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
  margin-top: 94px;
`;

export const ButtonWrapperStyled = styled.div`
  position: relative;
  margin-top: 16px;
`;

export const RightSectionStyled = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  width: 676px;
  height: ${(props) => props.height || '1054px'};
  margin-left: 24px;
  margin-bottom: 120px;
  margin-top: 94px;
`;
