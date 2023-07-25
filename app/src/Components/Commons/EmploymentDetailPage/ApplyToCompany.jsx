import NameCard from '../NameCard';
import MainButton from '../../Button/MainButton';
import OutlineButton from '../../Button/OutlineButton';
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import axios from '../../../Api/Axios';

const ApplyToCompany = ({ data, detail }) => {
  const [savedNoticeId, setSavedNoticeId] = useState(null);
  const [savedNoticeIdforbook, setSavedNoticeIdforbook] = useState(null);
  const cardInHandler = (e) => {
    setSavedNoticeId(e.target.id);
  };
  const bookmarkHandler = (e) => {
    setSavedNoticeIdforbook(e.target.id);
  };
  const userId = localStorage.getItem('id');
  const userType = localStorage.getItem('userType');

  useEffect(() => {
    async function fetchData() {
      if (setSavedNoticeIdforbook && userId) {
        try {
          const response = await axios.post(
            `/notice/${savedNoticeIdforbook}/bookmark`,
            {
              noticeId: Number(`${savedNoticeIdforbook}`),
              userId: userId,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            },
          );
          if (response.status === 201) {
            alert('북마크 완료!');
            return;
          } else {
            return;
          }
        } catch (error) {
          console.log(error);
          alert('이미 북마크한 채용입니다.');
        }
      }
    }
    fetchData();
  }, [bookmarkHandler, setSavedNoticeIdforbook]);

  useEffect(() => {
    async function fetchData() {
      if (savedNoticeId && userId) {
        try {
          const response = await axios.post(
            `/notice/${savedNoticeId}/card`,
            {
              noticeId: Number(`${savedNoticeId}`),
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            },
          );
          if (response.status === 201) {
            alert('명함넣기 완료!');
            return;
          } else {
            return;
          }
        } catch (error) {
          console.log(error);
          alert('이미 명함 넣은 채용입니다.');
        }
      }
    }
    fetchData();
  }, [cardInHandler, setSavedNoticeId]);

  return (
    <>
      <RightContainerStyled>
        {userType === 'user' ? (
          <>
            <NameCardWrapperStyled>
              <NameCard key={data.userId} userInfo={data} className={'hide'} />
            </NameCardWrapperStyled>
            <BottonContainerStyled>
              <MainButton
                width={'360px'}
                content={'명함 넣기'}
                onClick={cardInHandler}
                id={detail.noticeId}
              />
              <OutlineButton
                onClick={bookmarkHandler}
                width={'360px'}
                content={'북마크 하기'}
                id={detail.noticeId}
              />
            </BottonContainerStyled>
          </>
        ) : null}
        {detail && (
          <TextConatinerStyled>
            <CompanyNameStyled $companyName={detail.companyName}>
              {detail.companyName}
            </CompanyNameStyled>
            {detail.companyPhone && (
              <TextStyled $companyPhone={detail.companyPhone}>
                {detail.companyPhone}
              </TextStyled>
            )}
            {detail.companyEmail && (
              <TextStyled $companyEmail={detail.companyEmail}>
                {detail.companyEmail}
              </TextStyled>
            )}
          </TextConatinerStyled>
        )}
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
