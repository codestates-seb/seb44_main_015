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
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(FakeUserInfo[0]);
    //console.log(info);
  }, []);

  const { name, email, phone, stack, resume } = info;

  return (
    <div>
      <NameCard name={name} email={email} phone={phone} stack={stack} />
      <Resume resume={resume} />
      <ButtonWrapperStyled>
        <OutlineButton width={'360px'} content={Messages.cardEditBtn} />
      </ButtonWrapperStyled>
      <BoxWrapperStyled>
        <AppliedBoard />
        <AppliedBox />
        <AppliedBox
          title={Messages.bookmarkedTitle}
          message={Messages.bookmarkedMessage}
        />
      </BoxWrapperStyled>
    </div>
  );
};

export default MyPageFreelancer;

export const ButtonWrapperStyled = styled.div`
  position: absolute;
  margin: 537px 890px 716px 190px; //546px
`;

export const BoxWrapperStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  width: 676px;
  height: 1054px;
  margin: 144px 190px 120px 574px; //546px555px
`;
