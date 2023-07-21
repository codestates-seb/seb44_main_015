import styled from 'styled-components';
import {
  NameWrapperStyled,
  InnerWrapperStyled,
  PhoneWrapperStyled,
  EmailWrapperStyled,
} from './NameCard';
import { CardWrapperStyled, CardTitleStyled } from './Resume';
import { Colors } from '../../Assets/Theme';
import { exceptBar } from '../../Utils/exceptBar';

const CompanyCard = ({ name, phone, email }) => {
  return (
    <>
      <CompanyCardStyled>
        <CardWrapperStyled>
          <CardTitleStyled>회사 정보</CardTitleStyled>
        </CardWrapperStyled>
        <UpperWrapperStyled>
          <NameWrapperStyled name={name}>{name}</NameWrapperStyled>
          <InnerWrapperStyled>
            <PhoneWrapperStyled $phone={exceptBar(phone)}>
              {exceptBar(phone)}
            </PhoneWrapperStyled>
            <EmailWrapperStyled $email={email}>{email}</EmailWrapperStyled>
          </InnerWrapperStyled>
        </UpperWrapperStyled>
      </CompanyCardStyled>
    </>
  );
};
export default CompanyCard;

export const CompanyCardStyled = styled.div`
  width: 360px;
  height: 150px;
  color: ${Colors.Gray3};
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  background-color: ${Colors.Bgwhite};
  box-sizing: border-box;
  &:hover {
    border: 2px solid ${Colors.secondPurple};
    background-color: ${Colors.Gray1};
    cursor: pointer;
  }
`;

export const UpperWrapperStyled = styled.div`
  display: flex;
  width: 158px;
  height: 70px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  margin: 18px 178px 65px 24px;
`;
