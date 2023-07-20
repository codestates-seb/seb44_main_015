import NameCard from '../NameCard';
import FakeUserInfo from '../../../Api/FakeUserInfo.json';
import FakeEmploymentInfo from '../../../Api/FakeEmploymentInfo.json';
import MainButton from '../../Button/MainButton';
import OutlineButton from '../../Button/OutlineButton';
import { styled } from 'styled-components';

const ApplyToCompany = () => {
  const userData = FakeUserInfo.slice(0, 1);
  const employmentData = FakeEmploymentInfo.slice(0, 1);

  return (
    <>
      <RightContainerStyled>
        <NameCardWrapperStyled>
          {userData.map((userInfo) => (
            <NameCard key={userInfo.id} userInfo={userInfo} className="hide" />
          ))}
        </NameCardWrapperStyled>
        <BottonContainerStyled>
          <MainButton width={'360px'} content={'명함 넣기'} />
          <OutlineButton width={'360px'} content={'북마크 하기'} />
        </BottonContainerStyled>
        <TextConatinerStyled>
          <CompanyNameStyled>{employmentData[0].name}</CompanyNameStyled>
          <TextStyled>{employmentData[0].number}</TextStyled>
          <TextStyled>{employmentData[0].email}</TextStyled>
        </TextConatinerStyled>
      </RightContainerStyled>
    </>
  );
};

export default ApplyToCompany;

const RightContainerStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 90px 190px 40px 0;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const NameCardWrapperStyled = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const BottonContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

const TextConatinerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 120px;
  margin-top: 37px;
  padding: 27px 0 0 25px;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid var(--gray-2, #bebebe);
`;

const CompanyNameStyled = styled.div`
  color: var(--gray-4, #333);
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  margin-bottom: 8px;
`;

const TextStyled = styled(CompanyNameStyled)`
  font-size: 13px;
  font-weight: 300;
  line-height: 19px;
  margin-bottom: 0px;
`;
