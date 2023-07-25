import { styled } from 'styled-components';
import { Colors, Messages } from '../../../Assets/Theme';
import {
  UpperWrapperStyled,
  TitleStyled,
  CompanyNameStyled,
  RegionStyled,
} from '../EmploymentCard';
import MainButton from '../../Button/MainButton';
import NoLineTag from '../NoLineTag';
import DisabledButton from '../../Button/DisabledButton';
import { duedate } from '../../../Utils/Dayjs';
import { useNavigate } from 'react-router-dom';

const CareerCard = ({ employmentInfo }) => {
  const { deadline, title, companyName, region, noticeId } = employmentInfo;
  const navigate = useNavigate();

  return (
    <>
      <EmploymentCardStyled>
        <UpperWrapperStyled>
          {duedate(deadline) === `${Messages.closedTitle}` ? (
            <NoLineTag
              name={Messages.closedTitle}
              fontSize="12px"
              fontWeight="400"
            />
          ) : (
            <NoLineTag
              name={duedate(deadline)}
              color={Colors.mainPurple}
              $backgroundColor={Colors.thirdPurple}
              fontSize="12px"
              fontWeight="400"
            ></NoLineTag>
          )}
          <TitleStyled
            onClick={() => {
              navigate(`/employmentdetail/${noticeId}`);
            }}
            title={title}
          >
            {title}
          </TitleStyled>
          <CompanyNameStyled name={companyName}>
            {companyName}
          </CompanyNameStyled>
          <RegionStyled $region={region}>
            {region ? region : '서울'}
          </RegionStyled>
        </UpperWrapperStyled>
        {duedate(deadline) === `${Messages.closedTitle}` ? (
          <DisabledButton
            onClick={() => navigate(`/notice/card/${noticeId}`)}
            content={Messages.showCardIn}
            width={'200px'}
          />
        ) : (
          <MainButton
            onClick={() => navigate(`/notice/card/${noticeId}`)}
            content={Messages.showCardIn}
            width={'200px'}
          />
        )}
      </EmploymentCardStyled>
    </>
  );
};

export default CareerCard;

const EmploymentCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 248px;
  height: 244px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${Colors.Gray2};
  box-sizing: border-box;
  background-color: ${Colors.Bgwhite};
`;
