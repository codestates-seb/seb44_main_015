import NameCard from '../../Commons/NameCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Colors } from '../../../Assets/Theme';
import { styled } from 'styled-components';

const CardOfTheWeek = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/card/weekly';

    const params = {
      sort: 'view',
      limit: 4,
    };

    axios
      .get(url, { params })
      .then((response) => {
        setData(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error('API 요청 실패:', error);
        // setLoading(false);
      });
  }, []);

  return (
    <>
      <CardOfTheWeekStyled>
        <TitleStyled>🏆 금주의 명함</TitleStyled>
        <CardContainerStyled>
          {data &&
            data.map((userInfo) => (
              <NameCard
                key={userInfo.cardId}
                userInfo={userInfo}
                className="hide"
              />
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
  width: 748px;
  gap: 22px;
  margin-bottom: 90px;
`;
