import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';
import { CardWrapperStyled, CardStyled, CardTitleStyled } from './Resume';
import { TagWrapperStyled } from './Tag';
import Tag from './Tag';

const CompanyDetail = () => {
  const sampleTags = ['#프론트엔드', '#백엔드', '#정시출근', '#꼼꼼함'];
  return (
    <>
      <CardStyled>
        <CardWrapperStyled>
          <UpperWrapperStyled>
            <CardTitleStyled>회사 소개</CardTitleStyled>
            <CompanyDetailWrapperStyled>
              안녕하세요 저희는 프리해요입니다. 반갑습니다. 회사 소개글 적는
              창입니다.
            </CompanyDetailWrapperStyled>
          </UpperWrapperStyled>
          <TagWrapperStyled style={{ margin: '24px 24px 24px 0' }}>
            {sampleTags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
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
  line-height: 1.5;
`;
