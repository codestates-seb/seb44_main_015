import styled from 'styled-components';
import { Colors } from '../../Assets/ColorTheme';

const Tag = () => {
  return (
    <TagWrapperStyled>
      <TagStyled>Tag</TagStyled>
    </TagWrapperStyled>
  );
};

export default Tag;

export const TagWrapperStyled = styled.div`
  display: flex;
  width: 296px;
  height: 27px;
  align-items: flex-start;

  gap: 4px;
  flex-shrink: 0;
  margin: ${(props) => props.margin || '65px 40px 24px 24px'};
`;

export const TagStyled = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${Colors.mainPurple};
  font-size: 13px;
  font-style: normal;
  font-weight: 300;

  border: 1px solid ${Colors.Gray3};
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor || `${Colors.Bgwhite}`};
`;
