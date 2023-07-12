import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Colors, Messages } from '../../../Assets/Theme';
import OutlineButton from '../../Button/OutlineButton';
//import axios from '../../../Api/Axios';
import PlusCareerButton from './PlusCareerButton';
import EmploymentCard from '../EmploymentCard';
import FakeEmploymentInfo from '../../../Api/FakeEmploymentInfo.json';
import { EmploymentCardContainerStyled } from '../../../Pages/MainPage/NewEmployment';

const AppliedBox = ({
  title,
  message,
  smallmessage,
  number,
  height,
  zeroheight,
  content,
}) => {
  const employmentData = FakeEmploymentInfo.slice(0, 4);

  return (
    <BigCardStyled height={height}>
      <NameWrapperStyled>
        {title ? title : `${Messages.cardInTitle}`}
        {title === `${Messages.openTitle}` ? <PlusCareerButton /> : null}
        <NumberWrapperStyled>{number}</NumberWrapperStyled>
      </NameWrapperStyled>

      {number ? (
        <ScrollStyled>
          <EmploymentCardContainerStyled>
            {employmentData.map((employmentInfo) => (
              <EmploymentCard
                key={employmentInfo.id}
                employmentInfo={employmentInfo}
              />
            ))}
          </EmploymentCardContainerStyled>
        </ScrollStyled>
      ) : (
        <ZeroCardStyled zeroheight={zeroheight}>
          <InfoWrapperStyled>
            <InfoStyled>
              {message ? message : `${Messages.cardInMessage}`}
            </InfoStyled>
            <InfoStyled fontWeight={'400'}>
              {smallmessage ? smallmessage : Messages.careeringMessage}
            </InfoStyled>
          </InfoWrapperStyled>
          <ButtonWrapperStyled>
            {content ? (
              <OutlineButton content={content} width={'360px'}>
                {Messages.showCareerBtn}
              </OutlineButton>
            ) : null}
          </ButtonWrapperStyled>
        </ZeroCardStyled>
      )}
    </BigCardStyled>
  );
};

export default AppliedBox;

export const ButtonWrapperStyled = styled.div`
  position: absolute;
  margin: 24px 158px 24px 134px;
`;

export const BigCardStyled = styled.div`
  width: 676px;
  height: ${(props) => props.height || '419px'};
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  color: ${Colors.Gray4};
  background-color: ${Colors.Bgwhite};
  margin-top: 16px;
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
  height: ${(props) => props.zeroheight || '320px'};
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
  margin: 95px 177px 0 190px;
`;

const InfoStyled = styled.span`
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || '700'};
  line-height: normal;
`;

// const [info, setInfo] = useState({});

// useEffect(() => {
//   async function fetchData() {
//     const response = await axios.get('/1');
//     //console.log(response.data);
//     setInfo(response.data);
//   }
//   fetchData();
// }, []);

const ScrollStyled = styled.div`
  overflow: scroll;
  margin: 0 24px;
`;
