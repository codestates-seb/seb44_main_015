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
    <main>
      <LeftSectionStyled>
        <NameCard name={name} email={email} phone={phone} stack={stack} />
        <Resume resume={resume} />
        <ButtonWrapperStyled>
          <OutlineButton width={'360px'} content={Messages.cardEditBtn} />
        </ButtonWrapperStyled>
      </LeftSectionStyled>
      <RightSectionStyled>
        <AppliedBoard />
        <AppliedBox />
        <AppliedBox
          title={Messages.bookmarkedTitle}
          message={Messages.bookmarkedMessage}
        />
      </RightSectionStyled>
    </main> //main태그 변경예정
  );
};

export default MyPageFreelancer;

export const LeftSectionStyled = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
`;

export const ButtonWrapperStyled = styled.div`
  position: absolute;
  margin: 580px 890px 716px 190px; //537px 890px 716px 190px;freelancer페이지마진
`;

export const RightSectionStyled = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  width: 676px;
  height: ${(props) => props.height || '1054px'};
  margin: 144px 190px 120px 574px;
`;
