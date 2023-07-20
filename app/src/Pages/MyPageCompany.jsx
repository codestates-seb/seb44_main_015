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
  BackgroundContainerStyled,
} from './MyPageFreelancer';
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
import Header from '../Components/Commons/Layouts/Header';
import { useHorizontalScroll } from '../Utils/useSideScroll';
import axios from 'axios';
import { duedate } from '../Utils/Dayjs';

const MyPageCompany = () => {
  const scrollRef = useHorizontalScroll();
  const [companyInfo, setCompanyInfo] = useState({});
  const employmentData = FakeEmploymentInfo.slice(0, 7);
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/company/2',
        ),
        axios.get(
          'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/company/2/notice',
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          setCompanyInfo(res1.data);
          setCareerData(res2.data);
          //console.log(res2.data);
        }),
      )
      .catch((err) => console.log(err));
  }, []);

  const { email, phone, tagNames, intro, name } = companyInfo;
  const openCareer = careerData.filter(
    (career) => duedate(career.deadline) !== '지난 채용',
  );
  const closedCareer = careerData.filter(
    (career) => duedate(career.deadline) === '지난 채용',
  );
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
              <CompanyCard name={name} phone={phone} email={email} />
              <CompanyDetail stack={tagNames} detail={intro} />
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
                info1Number={openCareer.length}
                info2Number={closedCareer.length}
                info3Number={employmentData.length}
              />
              <AppliedBox
                height={'343px'}
                title={Messages.openTitle}
                number={openCareer.length}
                content={
                  openCareer.length ? (
                    <ScrollStyled>
                      <EmploymentCardContainerStyled>
                        {openCareer.map((employmentInfo) => (
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
                number={closedCareer.length}
                content={
                  closedCareer.length ? (
                    <ScrollStyled>
                      <EmploymentCardContainerStyled>
                        {closedCareer.map((employmentInfo) => (
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
      </BackgroundContainerStyled>
    </>
  );
};

export default MyPageCompany;
