import styled from 'styled-components';
import { Colors, Messages } from '../../../Assets/Theme';
import OutlineButton from '../../Button/OutlineButton';
import { useNavigate } from 'react-router-dom';

const ZeroCard = ({ height, message, smallmessage, content }) => {
  const navigate = useNavigate();
  return (
    <ZeroCardStyled height={height}>
      <InfoWrapperStyled>
        <InfoStyled>
          {message ? message : `${Messages.cardInMessage}`}
        </InfoStyled>
        <InfoStyled fontWeight={'400'}>
          {smallmessage ? smallmessage : `${Messages.careeringMessage}`}
        </InfoStyled>
      </InfoWrapperStyled>
      <ButtonWrapperStyled>
        {content ? (
          <OutlineButton
            onClick={() => {
              navigate('/employmentlist');
            }}
            content={content}
            width={'360px'}
          >
            {Messages.showCareerBtn}
          </OutlineButton>
        ) : null}
      </ButtonWrapperStyled>
    </ZeroCardStyled>
  );
};

export default ZeroCard;

export const ZeroCardStyled = styled.div`
  width: 628px;
  height: ${(props) => props.height || '320px'};
  flex-shrink: 0;
  margin: 0px 24px 32px 24px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  background-color: ${Colors.Bgwhite};
`;

export const InfoWrapperStyled = styled.div`
  display: flex;
  width: 261px;
  height: 50px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin: 95px 177px 0 190px;
`;

export const InfoStyled = styled.span`
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || '700'};
  line-height: normal;
`;
export const ButtonWrapperStyled = styled.div`
  margin: 24px 158px 24px 134px;
`;
