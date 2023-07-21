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
import { Link } from 'react-router-dom';

const CareerCard = ({ employmentInfo }) => {
  const { duedate, title, name, region } = employmentInfo;

  return (
    <>
      <EmploymentCardStyled>
        <UpperWrapperStyled>
          {duedate === `${Messages.closedTitle}` ? (
            <NoLineTag
              name={Messages.closedTitle}
              fontSize="12px"
              fontWeight="400"
            />
          ) : (
            <NoLineTag
              name={duedate}
              color={Colors.mainPurple}
              backgroundColor={Colors.thirdPurple}
              fontSize="12px"
              fontWeight="400"
            ></NoLineTag>
          )}
          <TitleStyled title={title}>{title}</TitleStyled>
          <CompanyNameStyled name={name}>{name}</CompanyNameStyled>
          <RegionStyled $region={region}>{region}</RegionStyled>
        </UpperWrapperStyled>
        {duedate === `${Messages.closedTitle}` ? (
          <Link to="/namecardlist">
            <DisabledButton content={Messages.showCardIn} width={'200px'} />
          </Link>
        ) : (
          <Link to="/namecardlist">
            <MainButton content={Messages.showCardIn} width={'200px'} />
          </Link>
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
