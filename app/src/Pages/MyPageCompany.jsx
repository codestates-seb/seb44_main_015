import { useState, useEffect } from 'react';
import { Messages } from '../Assets/Theme';
import FakeUserInfo from '../Api/FakeUserInfo.json';
import CompanyCard from '../Components/Commons/CompanyCard';
import CompanyDetail from '../Components/Commons/CompanyDetail';
import {
  ButtonWrapperStyled,
  LeftSectionStyled,
  RightSectionStyled,
  MainContainerStyled,
  TitleWrapperStyled,
  TotalWrapperStyled,
} from './MyPageFreelancer';
import OutlineButton from '../Components/Button/OutlineButton';
import AppliedBox from '../Components/Commons/MyPage/AppliedBox';
import CareerBoard from '../Components/Commons/MyPage/CareerBoard';
import MiddleHeader from '../Components/Commons/MiddleHeader';
import { BodyBackgroundStyled } from './LogIn';

const MyPageCompany = () => {
  const [companyInfo, setCompanyInfo] = useState({});

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
            <CareerBoard />
            <AppliedBox
              height={'343px'}
              zeroheight={'244px'}
              title={Messages.openTitle}
              message={Messages.noOpenCareerTitle}
              smallmessage={Messages.careerUpMessage}
              content={Messages.plusCareerBtn}
            />
            <AppliedBox
              height={'343px'}
              zeroheight={'244px'}
              title={Messages.closedTitle}
              message={Messages.noCareerMessage}
              smallmessage={' '}
            />
          </RightSectionStyled>
        </TotalWrapperStyled>
      </MainContainerStyled>
    </BodyBackgroundStyled>
  );
};

export default MyPageCompany;
