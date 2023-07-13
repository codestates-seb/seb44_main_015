import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Messages } from '../Assets/Theme';
import { BodyBackgroundStyled } from './LogIn';
import { EmploymentCardContainerStyled } from './MainPage/NewEmployment';
import NameCard from '../Components/Commons/NameCard';
import Resume from '../Components/Commons/Resume';
import OutlineButton from '../Components/Button/OutlineButton';
import FakeUserInfo from '../Api/FakeUserInfo.json';
import AppliedBox from '../Components/Commons/MyPage/AppliedBox';
import AppliedBoard from '../Components/Commons/MyPage/AppliedBoard';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import EmploymentCard from '../Components/Commons/EmploymentCard';
import FakeEmploymentInfo from '../Api/FakeEmploymentInfo.json';

const MyPageFreelancer = () => {
  const [userInfo, setUserInfo] = useState({});
  const employmentData = FakeEmploymentInfo.slice(0, 5);
  useEffect(() => {
    setUserInfo(FakeUserInfo[0]);
  }, []);

  const { resume } = userInfo;

  return (
    <BodyBackgroundStyled>
      <MainContainerStyled>
        <TotalWrapperStyled>
          <TitleWrapperStyled>
            <MiddleHeader midtitle={Messages.myPage} />
          </TitleWrapperStyled>
          <LeftSectionStyled>
            <NameCard
              key={userInfo.id}
              userInfo={userInfo}
              className={'hide'}
            />
            <Resume resume={resume} />
            <ButtonWrapperStyled>
              <OutlineButton width={'360px'} content={Messages.cardEditBtn} />
            </ButtonWrapperStyled>
          </LeftSectionStyled>
          <RightSectionStyled>
            <AppliedBoard
              title={Messages.appliedBoardTitle}
              info1={Messages.cardInTitle}
              info2={Messages.selectedTitle}
              info3={Messages.bookmarkedTitle}
              info1Number={employmentData.length}
              info2Number={employmentData.length}
              info3Number={employmentData.length}
            />
            <AppliedBox
              title={Messages.cardInTitle}
              number={employmentData.length}
              content={
                employmentData.length ? (
                  <ScrollStyled>
                    <EmploymentCardContainerStyled>
                      {employmentData.map((employmentInfo) => (
                        <EmploymentCard
                          key={employmentInfo.id}
                          employmentInfo={employmentInfo}
                        />
                      ))}
                    </EmploymentCardContainerStyled>
                  </ScrollStyled>
                ) : (
                  <ZeroCard
                    message={Messages.cardInMessage}
                    smallmessage={Messages.careeringMessage}
                    content={Messages.showCareerBtn}
                  />
                )
              }
            />
            <AppliedBox
              title={Messages.bookmarkedTitle}
              number={employmentData.length}
              content={
                employmentData.length ? (
                  <ScrollStyled>
                    <EmploymentCardContainerStyled>
                      {employmentData.map((employmentInfo) => (
                        <EmploymentCard
                          key={employmentInfo.id}
                          employmentInfo={employmentInfo}
                        />
                      ))}
                    </EmploymentCardContainerStyled>
                  </ScrollStyled>
                ) : (
                  <ZeroCard
                    message={Messages.bookmarkedMessage}
                    smallmessage={Messages.careeringMessage}
                    content={Messages.showCareerBtn}
                  />
                )
              }
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

export const ScrollStyled = styled.div`
  overflow: scroll;
  margin: 0 24px;
`;
