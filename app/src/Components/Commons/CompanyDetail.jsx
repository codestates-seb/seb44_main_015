import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';
import { CardWrapperStyled, CardStyled, CardTitleStyled } from './Resume';
import { TagWrapperStyled } from './Tag';
import Tag from './Tag';

const CompanyDetail = ({ detail, stack }) => {
  return (
    <>
      <CardStyled>
        <CardWrapperStyled>
          <UpperWrapperStyled>
            <CardTitleStyled>회사 소개</CardTitleStyled>
            <CompanyDetailWrapperStyled>{detail}</CompanyDetailWrapperStyled>
          </UpperWrapperStyled>
          <TagWrapperStyled $margin={'24px 24px 24px 0'}>
            {stack && stack.map((tag) => <Tag key={tag} children={tag} />)}
          </TagWrapperStyled>
        </CardWrapperStyled>
      </CardStyled>
    </>
  );
};

export default CompanyDetail;

const UpperWrapperStyled = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const CompanyDetailWrapperStyled = styled.p`
  width: 312px;
  height: auto;
  margin-top: 8px;
  text-align: left;
  color: ${Colors.Gray4};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
