import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';
import { TagWrapperStyled } from './Tag';
import Tag from './Tag';
import SelectedButton from '../Button/SelectedButton';

const NameCard = ({ name, phone, email, stack, className }) => {

  return (
    <>
      <NameCardStyled>
        <FormerWrapperStyled>
          <UpperWrapperStyled>
            <NameWrapperStyled name={name}>{name}</NameWrapperStyled>
            <InnerWrapperStyled>
              <PhoneWrapperStyled $phone={phone}>{phone}</PhoneWrapperStyled>
              <EmailWrapperStyled $email={email}>{email}</EmailWrapperStyled>
            </InnerWrapperStyled>
          </UpperWrapperStyled>
          <SelectedButton className={className} />
        </FormerWrapperStyled>

        <TagWrapperStyled margin={'0 40px 0px 24px'}>
          {stack && stack.map((tag) => <Tag key={tag} children={tag} />)}
        </TagWrapperStyled>
      </NameCardStyled>
    </>
  );
};

export default NameCard;

export const NameCardStyled = styled.ul`
  width: 360px;
  height: 210px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.mainPurple};
  background-color: ${Colors.Bgwhite};
`;

export const UpperWrapperStyled = styled.li`
  display: flex;
  width: 158px;
  height: 70px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  margin: 24px 106px 65px 24px;
`;

export const NameWrapperStyled = styled.p`
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
export const PhoneWrapperStyled = styled.p`
  color: ${Colors.Gray4};
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const EmailWrapperStyled = styled.p`
  color: ${Colors.Gray4};
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const FormerWrapperStyled = styled.div`
  display: flex;
`;
