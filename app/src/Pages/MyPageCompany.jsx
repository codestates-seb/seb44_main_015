import { useState, useEffect } from 'react';
import { Messages } from '../Assets/Theme';
import {
  ButtonWrapperStyled,
  LeftSectionStyled,
  RightSectionStyled,
  MainContainerStyled,
  TitleWrapperStyled,
  TotalWrapperStyled,
  ScrollStyled,
} from './MyPageFreelancer';
import { BodyBackgroundStyled } from './LogIn';
import { EmploymentCardContainerStyled } from './MainPage/NewEmployment';
import CompanyCard from '../Components/Commons/CompanyCard';
import OutlineButton from '../Components/Button/OutlineButton';
import AppliedBox from '../Components/Commons/MyPage/AppliedBox';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import CareerCard from '../Components/Commons/MyPage/CareerCard';
import ZeroCard from '../Components/Commons/MyPage/ZeroCard';
import CompanyDetail from '../Components/Commons/CompanyDetail';
import AppliedBoard from '../Components/Commons/MyPage/AppliedBoard';
import FakeEmploymentInfo from '../Api/FakeEmploymentInfo.json';
import FakeUserInfo from '../Api/FakeUserInfo.json';

const MyPageCompany = () => {
  const [companyInfo, setCompanyInfo] = useState({});
  const employmentData = FakeEmploymentInfo.slice(0, 7);

  useEffect(() => {
    setCompanyInfo(FakeUserInfo[0].company);
  }, []);

  const { name, email, phone, stack, detail } = companyInfo;
  return (
    <BodyBackgroundStyled>
      <MainContainerStyled>
        <TotalWrapperStyled>
          <TitleWrapperStyled>
            <MiddleHeader midtitle={Messages.myPage} />
          </TitleWrapperStyled>

          <LeftSectionStyled>
            <CompanyCard name={name} phone={phone} email={email} />
            <CompanyDetail stack={stack} detail={detail} />
            <ButtonWrapperStyled>
              <OutlineButton
                width={'360px'}
                content={Messages.companyCardEditBtn}
              />
            </ButtonWrapperStyled>
          </LeftSectionStyled>

          <RightSectionStyled height={'902px'}>
            <AppliedBoard
              title={Messages.appliedBoardTitle}
              info1={Messages.openTitle}
              info2={Messages.closedTitle}
              info3={Messages.selectedTitle}
              info1Number={employmentData.length}
              info2Number={employmentData.length}
              info3Number={employmentData.length}
            />
            <AppliedBox
              height={'343px'}
              title={Messages.openTitle}
              number={employmentData.length}
              content={
                employmentData.length ? (
                  <ScrollStyled>
                    <EmploymentCardContainerStyled>
                      {employmentData.map((employmentInfo) => (
                        <CareerCard
                          key={employmentInfo.id}
                          employmentInfo={employmentInfo}
                        />
                      ))}
                    </EmploymentCardContainerStyled>
                  </ScrollStyled>
                ) : (
                  <ZeroCard
                    height={'244px'}
                    message={Messages.noOpenCareerTitle}
                    smallmessage={Messages.careerUpMessage}
                    content={Messages.plusCareerBtn}
                  />
                )
              }
            />
            <AppliedBox
              height={'343px'}
              title={Messages.closedTitle}
              number={employmentData.length} //지난채용으로 변경예정
              content={
                employmentData.length ? (
                  <ScrollStyled>
                    <EmploymentCardContainerStyled>
                      {employmentData.map((employmentInfo) => (
                        <CareerCard
                          key={employmentInfo.id}
                          employmentInfo={employmentInfo}
                        />
                      ))}
                    </EmploymentCardContainerStyled>
                  </ScrollStyled>
                ) : (
                  <ZeroCard
                    height={'244px'}
                    message={Messages.noCareerMessage}
                    smallmessage={' '}
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

export default MyPageCompany;
