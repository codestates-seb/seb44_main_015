import NoLineTag from './NoLineTag';
import { useNavigate } from 'react-router-dom';
import { Colors } from '../../Assets/Theme';
import { styled } from 'styled-components';
import { duedate } from '../../Utils/Dayjs';

const calculateDday = (deadline) => {
  const targetDate = new Date(deadline);
  const currentDate = new Date();
  const timeDiff = targetDate - currentDate;
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  return daysDiff;
};

const EmploymentCard = ({ employmentInfo }) => {
  const {
    noticeId,
    state,
    deadline,
    title,
    content,
    companyIntro,
    companyPhone,
    companyEmail,
    companyPerson,
    companyAddress,
    companyName,
    tagNames,
  } = employmentInfo;

  const dDay = calculateDday(deadline);
  const tagColor = dDay >= 0 ? Colors.mainPurple : Colors.Gray4;
  const tagBackground = dDay >= 0 ? Colors.thirdPurple : Colors.Gray1;
  const navigate = useNavigate();

  const cityFromAddress = (address) => {
    if (address) {
      const city = address.split(' ')[0]; // 공백(' ')을 기준으로 주소를 나누고 첫 번째 요소를 가져옴
      return city;
    }
  };

  const handleCardClick = () => {
    navigate(`/employmentdetail/${noticeId}`, { state: { noticeId } });
  };

  return (
    <>
      <EmploymentCardStyled onClick={handleCardClick}>
        <UpperWrapperStyled>
          <NoLineTag
            name={dDay >= 0 ? `D-${Math.ceil(dDay)}` : '지난 채용'}
            color={tagColor}
            $backgroundColor={tagBackground}
            fontSize="12px"
            fontWeight="400"
          ></NoLineTag>

          <TitleStyled title={title}>{title}</TitleStyled>
          <CompanyNameStyled $companyName={companyName}>
            {companyName}
          </CompanyNameStyled>
          <RegionStyled $region={companyAddress}>
            {cityFromAddress(companyAddress)}
          </RegionStyled>
        </UpperWrapperStyled>
        <TagContainerStyled>
          {tagNames &&
            tagNames.map((tag, index) => (
              <NoLineTag
                key={index}
                name={tag}
                color={Colors.Gray4}
                $backgroundColor={Colors.Gray1}
                fontSize="12px"
                fontWeight="300"
              />
            ))}
        </TagContainerStyled>
      </EmploymentCardStyled>
    </>
  );
};

export default EmploymentCard;

const EmploymentCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 248px;
  height: 320px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${Colors.Gray2};
  box-sizing: border-box;
  background-color: ${Colors.Bgwhite};

  &:hover {
    border: 2px solid ${Colors.secondPurple};
    cursor: pointer;
  }
`;

export const UpperWrapperStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const TitleStyled = styled.h3`
  width: 195px;
  height: 30px;
  margin-top: 13px;
  margin-bottom: 16px;
  overflow: hidden; // 내용이 컨테이너를 넘어갈 경우 숨김
  text-overflow: ellipsis; // 텍스트가 넘칠 경우 '...' 으로 표시
  white-space: nowrap; // 텍스트가 길어져도 한 줄에 나타나도록 설정
  color: ${Colors.Gray4};
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const CompanyNameStyled = styled.p`
  color: ${Colors.Gray4};
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RegionStyled = styled.address`
  margin-top: 3px;
  color: ${Colors.Gray3};
  font-family: Noto Sans CJK KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagContainerStyled = styled.ul`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 8px 4px;
`;
