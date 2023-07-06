import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Colors, Messages } from '../../../Assets/Theme';
import OutlineButton from '../../Button/OutlineButton';
//import axios from '../../../Api/Axios';

const AppliedBox = ({ title, message, number = 0 }) => {
  // const [info, setInfo] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get('/1');
  //     //console.log(response.data);
  //     setInfo(response.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <BigCardStyled>
      <NameWrapperStyled>
        {title ? title : `${Messages.cardInTitle}`}
        <NumberWrapperStyled>{number}</NumberWrapperStyled>
      </NameWrapperStyled>

      {number ? (
        <div>다른 컴포넌트</div>
      ) : (
        <ZeroCardStyled>
          <InfoWrapperStyled>
            <InfoStyled>
              {message ? message : `${Messages.cardInMessage}`}
            </InfoStyled>
            <InfoStyled style={{ fontWeight: '400' }}>
              {Messages.careeringMessage}
            </InfoStyled>
          </InfoWrapperStyled>
          <OutlineButton content={Messages.showCareerBtn} width={'360px'} />
        </ZeroCardStyled>
      )}
    </BigCardStyled>
  );
};

export default AppliedBox;

export const BigCardStyled = styled.div`
  position: absolute;
  width: 676px;
  height: 419px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.Gray4};
  background-color: ${Colors.Bgwhite};
  //
  //margin: 100px;
`;

const NameWrapperStyled = styled.h3`
  display: flex;
  margin: 24px 518px 24px 24px;
  color: ${(props) => props.backgroundColor || `${Colors.Gray4}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NumberWrapperStyled = styled.span`
  margin-left: 4px;
  color: ${Colors.mainPurple};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ZeroCardStyled = styled.div`
  position: absolute;
  width: 628px;
  height: 320px;
  flex-shrink: 0;
  margin: 0px 24px 32px 24px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  background-color: ${Colors.Bgwhite};
`;

const InfoWrapperStyled = styled.div`
  display: flex;
  width: 261px;
  height: 50px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin: 95px 177px 24px 190px;
`;

const InfoStyled = styled.span`
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || '700'};
  line-height: normal;
`;
