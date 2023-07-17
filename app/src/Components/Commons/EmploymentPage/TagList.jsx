import { styled } from 'styled-components';
import { Colors } from '../../../Assets/Theme';

const TagList = () => {
  return (
    <>
      <TagListWrapperStyled>
        <TagListContainerStyled>
          <TagStyled>연봉 상위 1%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
          <TagStyled>연봉 상위 5%</TagStyled>
        </TagListContainerStyled>
      </TagListWrapperStyled>
    </>
  );
};

export default TagList;
const TagListWrapperStyled = styled.div`
  display: flex;
  height: 212px;
  width: 100%;
  border-bottom: 1px solid ${Colors.Gray2};
  align-items: center;
`;

const TagListContainerStyled = styled.div`
  min-width: 1440px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 80px 190px 30px 190px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const TagStyled = styled.div`
  display: flex;
  padding: 8px 12px;
  gap: 8px;
  white-space: nowrap;
  background-color: ${Colors.Gray1};
  border: 1px solid transparent;
  border-radius: 16px;
  color: ${Colors.Gray4};
  font-size: 14px;
  line-height: 20px;
  font-weight: 300px;

  &:hover {
    background-color: ${Colors.Bgwhite};
    border-color: ${Colors.mainPurple};
    color: ${Colors.mainPurple};
    font-weight: 400px;
  }
`;
