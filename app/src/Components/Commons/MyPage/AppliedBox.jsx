import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../Assets/ColorTheme';
import WideButton from '../../Buttons/WideButton';

const AppliedBox = ({ title = '북마크한 회사' }) => {
  return (
    <BigCardStyled>
      <NameWrapper>
        {title ? title : '명함 넣은 회사'}
        <NumberWrapper>13</NumberWrapper>
      </NameWrapper>
      <ZeroCardStyled>
        <InfoWrapper>
          <InfoStyled>
            {title ? title : '아직 명함을 넣은 회사'}가 없어요!
          </InfoStyled>
          <InfoStyled style={{ fontWeight: '400' }}>
            채용 중인 회사들을 보시겠어요?
          </InfoStyled>
          <WideButton content={'채용 중인 회사 보기'} />
        </InfoWrapper>
      </ZeroCardStyled>
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
`;

const NameWrapper = styled.div`
  display: flex;
  margin: 24px 518px 24px 24px;
  color: ${(props) => props.backgroundColor || `${Colors.Gray4}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NumberWrapper = styled.div`
  margin-left: 4px;
  color: ${Colors.mainPurple};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ZeroCardStyled = styled.div`
  position: absolute;
  width: 628px;
  height: 320px;
  flex-shrink: 0;
  margin: 0px 24px 32px 24px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  background-color: ${Colors.Bgwhite};
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 261px;
  height: 50px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin: 95px 177px 34px 190px;
`;

const InfoStyled = styled.div`
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || '700'};
  line-height: normal;
`;
