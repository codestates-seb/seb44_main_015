import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';
import { TagWrapperStyled } from './Tag';
import Tag from './Tag';
import SelectedButton from '../Button/SelectedButton';
import { exceptBar } from '../../Utils/exceptBar';
import { useNavigate, useParams } from 'react-router-dom';

const NameCard = ({ userInfo, ...props }) => {
  const navigate = useNavigate();
  const {
    name,
    phone,
    email,
    tagNames,
    userName,
    userEmail,
    userPhone,
    cardCheckId,
    checked,
    cardId,
    userId,
  } = userInfo;

  const showCardHandler = () => {
    if (cardId || userId !== undefined) {
      navigate(`/user/${cardId ? cardId : userId}`);
    } else {
      alert('열람이 불가한 명함입니다!');
    }
  };

  return (
    <>
      <NameCardStyled>
        <FormerWrapperStyled>
          <UpperWrapperStyled>
            <NameWrapperStyled
              onClick={showCardHandler}
              name={name ? name : userName}
            >
              {name ? name : userName}
            </NameWrapperStyled>
            <InnerWrapperStyled>
              <PhoneWrapperStyled
                $phone={phone ? exceptBar(phone) : exceptBar(userPhone)}
              >
                {phone ? exceptBar(phone) : exceptBar(userPhone)}
              </PhoneWrapperStyled>
              <EmailWrapperStyled $email={email ? email : userEmail}>
                {email ? email : userEmail}
              </EmailWrapperStyled>
            </InnerWrapperStyled>
          </UpperWrapperStyled>
          <SelectedButton id={cardCheckId} checked={checked} {...props} />
        </FormerWrapperStyled>
        <TagWrapperStyled $margin={'0px 40px 0px 24px'}>
          {tagNames &&
            tagNames.map((tag, idx) => <Tag key={idx} children={tag} />)}
        </TagWrapperStyled>
      </NameCardStyled>
    </>
  );
};

export default NameCard;

export const NameCardStyled = styled.div`
  width: 360px;
  height: 210px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.mainPurple};
  background-color: ${Colors.Bgwhite};
  box-sizing: border-box;
  &:hover {
    border: 2px solid ${Colors.secondPurple};
    background-color: ${Colors.Gray1};
  }
`;

export const UpperWrapperStyled = styled.div`
  display: flex;
  width: 158px;
  height: 70px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  margin: 24px 106px 60px 24px;
`;

export const NameWrapperStyled = styled.p`
  color: ${Colors.mainPurple};
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  line-height: normal;
  cursor: pointer;
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
