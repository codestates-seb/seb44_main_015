import styled from 'styled-components';
import { TagWrapperStyled } from './Tag';
import Tag from './Tag';
import SelectedButton from '../Button/SelectedButton';
import {
  NameCardStyled,
  UpperWrapperStyled,
  NameWrapperStyled,
  InnerWrapperStyled,
  PhoneWrapperStyled,
  EmailWrapperStyled,
} from './NameCard';

const SelectedNameCard = ({ name, phone, email, stack }) => {
  return (
    <>
      <NameCardStyled>
        <FormerWrapperStyled>
          <UpperWrapperStyled margin={'24px 106px 65px 24px'}>
            <NameWrapperStyled name={name}>{name}</NameWrapperStyled>
            <InnerWrapperStyled>
              <PhoneWrapperStyled $phone={phone}>{phone}</PhoneWrapperStyled>
              <EmailWrapperStyled $email={email}>{email}</EmailWrapperStyled>
            </InnerWrapperStyled>
          </UpperWrapperStyled>
          <SelectedButton />
        </FormerWrapperStyled>

        <TagWrapperStyled margin={'0 40px 0px 24px'}>
          {stack && stack.map((tag) => <Tag key={tag} children={tag} />)}
        </TagWrapperStyled>
      </NameCardStyled>
    </>
  );
};

export default SelectedNameCard;

const FormerWrapperStyled = styled.div`
  display: flex;
`;
