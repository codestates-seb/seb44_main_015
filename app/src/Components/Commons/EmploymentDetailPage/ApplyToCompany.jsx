import NameCard from '../NameCard';
import FakeUserInfo from '../../../Api/FakeUserInfo.json';
import { styled } from 'styled-components';

const ApplyToCompany = () => {
  const userData = FakeUserInfo.slice(0, 1);

  return (
    <>
      <RightContainerStyled>
        {userData.map((userInfo) => (
          <NameCard key={userInfo.id} userInfo={userInfo} className="hide" />
        ))}
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
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
