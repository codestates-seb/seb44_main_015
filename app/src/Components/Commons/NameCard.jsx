import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';
import { TagWrapperStyled } from './Tag';
import Tag from './Tag';

const NameCard = ({ name, phone, email, stack }) => {
  return (
    <>
      <NameCardStyled>
        <UpperWrapperStyled>
          <NameWrapperStyled name={name}>{name}</NameWrapperStyled>
          <InnerWrapperStyled>
            <PhoneWrapperStyled $phone={phone}>{phone}</PhoneWrapperStyled>
            <EmailWrapperStyled $email={email}>{email}</EmailWrapperStyled>
          </InnerWrapperStyled>
        </UpperWrapperStyled>
        <TagWrapperStyled>
          {stack && stack.map((tag) => <Tag key={tag} children={tag} />)}
        </TagWrapperStyled>
      </NameCardStyled>
    </>
  );
};

export default NameCard;

export const NameCardStyled = styled.div`
  position: absolute;
  width: 360px;
  height: 210px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.mainPurple};
  background-color: ${Colors.Bgwhite};
`;

export const UpperWrapperStyled = styled.div`
  display: flex;
  width: 158px;
  height: 70px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  margin: 24px 178px 65px 24px;
`;

export const NameWrapperStyled = styled.span`
  color: ${Colors.mainPurple};
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  line-height: normal;
`;

export const InnerWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  width: 158px;
  height: 38px;
  margin-top: 8px;
`;
export const PhoneWrapperStyled = styled.span`
  color: ${Colors.Gray4};
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const EmailWrapperStyled = styled.div`
  color: ${Colors.Gray4};
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
