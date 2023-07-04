import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

const Tag = ({ name }) => {
  return <TagStyled>{name}</TagStyled>;
};

export default Tag;

export const TagWrapperStyled = styled.ul`
  display: flex;
  flex-shrink: 0;
  width: 296px;
  height: 27px;
  align-items: flex-start;
  gap: 4px;
  margin: ${(props) => props.margin || '65px 40px 0px 24px'};
`;

export const TagStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  color: ${Colors.mainPurple};
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  border: 1px solid ${Colors.Gray3};
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor || `${Colors.Bgwhite}`};
`;

//사용하실때 TagWrapperStyled도 같이 가져가셔야 합니다...!!
//아래 사용예시
{
  /* <TagWrapperStyled>
{sampleTags.map((tag) => (
  <Tag key={tag} name={tag} />
))}
</TagWrapperStyled> */
}
