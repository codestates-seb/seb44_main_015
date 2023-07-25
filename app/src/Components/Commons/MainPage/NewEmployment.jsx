import EmploymentCard from '../../../Components/Commons/EmploymentCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Colors } from '../../../Assets/Theme';
import { styled } from 'styled-components';

const NewEmployment = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/notice/new';

    //swiper 구현하면 4개 이상 불러오도록 할 예정
    const params = {
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
      <NewEmploymentContainerStyled>
        <TitleStyled>⚡ 신규 채용</TitleStyled>
        <EmploymentCardContainerStyled>
          {data &&
            data.map((employmentInfo) => (
              <EmploymentCard
                key={employmentInfo.noticeId}
                employmentInfo={employmentInfo}
              />
            ))}
        </EmploymentCardContainerStyled>
      </NewEmploymentContainerStyled>
    </>
  );
};

export default NewEmployment;

const NewEmploymentContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const TitleStyled = styled.h3`
  margin-bottom: 41px;
  color: ${Colors.Gray4};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
`;

export const EmploymentCardContainerStyled = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 22px;
`;
