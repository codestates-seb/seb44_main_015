import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

const NoLineTag = ({ name }) => {
  return (
    <NoLineTagStyled
    //아래는 보라태그 쓸경우 설정할 프롭스들입니다. 회색태그 쓸경우 하기 프롭 주석이나 삭제처리해주세요.
    // color={Colors.mainPurple}
    // backgroundColor={Colors.thirdPurple}
    // fontSize="12px"
    // fontWeight="400"
    >
      {name}
    </NoLineTagStyled>
  );
};

export default NoLineTag;

export const TagWrapperStyled = styled.ul`
  display: flex;
  flex-shrink: 0;
  width: ${(props) => props.width || '296px'}; //184px -> 채용카드안
  height: ${(props) => props.height || '27px'}; //97px -> 채용카드안
  align-items: flex-start;
  gap: 4px;
  margin: ${(props) => props.margin || '65px 40px 0px 24px'};
`;

export const NoLineTagStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  color: ${(props) => props.color || `${Colors.Gray4}`};
  font-size: ${(props) => props.fontSize || '13px'};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || '300'};
  line-height: normal;
  border: 1px solid transparent;
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor || `${Colors.Gray1}`};
`;
