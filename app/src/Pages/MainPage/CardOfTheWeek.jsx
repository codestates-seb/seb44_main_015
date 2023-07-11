import { styled } from 'styled-components';
import FakeUserInfo from '../../Api/FakeUserInfo.json';
import { Colors } from '../../Assets/Theme';
import NameCard from '../../Components/Commons/NameCard';

const CardOfTheWeek = () => {
  const userData = FakeUserInfo.slice(0, 4);
  // Nmae카드를 어떻게 쓸건지에 대해.
  return (
    <>
      <CardOfTheWeekStyled>
        <TitleStyled>🏆 금주의 명함</TitleStyled>
        <CardContainerStyled>
          {userDataData.map((UserInfo) => (
            <NameCard key={employmentInfo.id} employmentInfo={employmentInfo} />
          ))}
        </CardContainerStyled>
      </CardOfTheWeekStyled>
    </>
  );
};

export default CardOfTheWeek;

const CardOfTheWeekStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Gray1};
  width: 100%;
`;
const TitleStyled = styled.h3`
  color: var(--gray-4, #333);
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
  margin-bottom: 41px;
  margin-top: 64px;
`;
const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
`;
