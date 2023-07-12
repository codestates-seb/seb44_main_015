import NameCard from '../../Components/Commons/NameCard';
import FakeUserInfo from '../../Api/FakeUserInfo.json';
import { Colors } from '../../Assets/Theme';
import { styled } from 'styled-components';

const CardOfTheWeek = () => {
  const userData = FakeUserInfo.slice(0, 4);
  // Nmae카드를 어떻게 쓸건지에 대해.
  return (
    <>
      <CardOfTheWeekStyled>
        <TitleStyled>🏆 금주의 명함</TitleStyled>
        <CardContainerStyled>
          {userData.map((userInfo) => (
            <NameCard key={userInfo.id} userInfo={userInfo} />
          ))}
        </CardContainerStyled>
      </CardOfTheWeekStyled>
    </>
  );
};

export default CardOfTheWeek;

const CardOfTheWeekStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${Colors.Gray1};
`;

const TitleStyled = styled.h3`
  margin-bottom: 41px;
  margin-top: 64px;
  color: ${Colors.Gray4};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
`;

const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 746px;
  gap: 22px;
  margin-bottom: 90px;
`;
