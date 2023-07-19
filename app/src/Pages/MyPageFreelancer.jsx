import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Messages, Colors } from '../Assets/Theme';
import { EmploymentCardContainerStyled } from './MainPage/NewEmployment';
import NameCard from '../Components/Commons/NameCard';
import Resume from '../Components/Commons/Resume';
import OutlineButton from '../Components/Button/OutlineButton';
import AppliedBox from '../Components/Commons/MyPage/AppliedBox';
import AppliedBoard from '../Components/Commons/MyPage/AppliedBoard';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import EmploymentCard from '../Components/Commons/EmploymentCard';
import Header from '../Components/Commons/Layouts/Header';
import { useHorizontalScroll } from '../Utils/useSideScroll';
import axios from 'axios';
import ZeroCard from '../Components/Commons/MyPage/ZeroCard';

const MyPageFreelancer = () => {
  const scrollRef = useHorizontalScroll();
  const [userInfo, setUserInfo] = useState({});
  const [careerData, setCareerData] = useState([]);
  const [employmentData, setEmploymentData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/user/3',
        ),
        axios.get(
          'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/user/3/bookmark',
        ),
        axios.get(
          'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/user/3/notice',
        ),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          setUserInfo(res1.data);
          setCareerData(res2.data);
          setEmploymentData(res3.data);
        }),
      )
      .catch((err) => console.log(err));
  }, []);

  const { resume } = userInfo;

  return (
    <>
      <Header />
      <BackgroundContainerStyled>
        <MainContainerStyled>
          <TotalWrapperStyled>
            <TitleWrapperStyled>
              <MiddleHeader midtitle={Messages.myPage} />
            </TitleWrapperStyled>
            <LeftSectionStyled>
              <NameCard
                key={userInfo.userId}
                userInfo={userInfo}
                className={'hide'}
              />
              <Resume resume={userInfo.resumeContents} />
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
                info3Number={careerData.length}
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
                number={careerData.length}
                content={
                  careerData.length ? (
                    <ScrollStyled>
                      <EmploymentCardContainerStyled>
                        {careerData.map((employmentInfo) => (
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
      </BackgroundContainerStyled>
    </>
  );
};

export default MyPageFreelancer;

export const BackgroundContainerStyled = styled.div`
  background-color: ${Colors.Gray1};
  padding-top: 40px;
`;

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
  margin: 0 24px;
  //white-space: nowrap;
  overflow-x: scroll;
`;
