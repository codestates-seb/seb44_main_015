import EmploymentCard from '../EmploymentCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const EmploymentCardList = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/notice';

    axios
      .get(url)
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
      <LowerContainerStyled>
        <EmploymentCardContainerStyled>
          {data &&
            data.map((employmentInfo) => (
              <EmploymentCard
                key={employmentInfo.id}
                employmentInfo={employmentInfo}
              />
            ))}
        </EmploymentCardContainerStyled>
      </LowerContainerStyled>
    </>
  );
};

export default EmploymentCardList;

const LowerContainerStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 40px 190px 40px 190px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const EmploymentCardContainerStyled = styled.ul`
  display: flex;
  flex-wrap: wrap; // 너비를 벗어나면 밑으로 내려가게 함
  flex-direction: row;
  gap: 22px;
`;
