import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

const NoLineTag = ({ name, ...props }) => {
  return (
    <NoLineTagStyled
      key={name}
      {...props}

      //보라태그 사용할경우 주석만 복사해서 사용하시면 됩니다.
      //<NoLineTag
      // color={Colors.mainPurple}
      // $backgroundColor={Colors.thirdPurple}
      // fontSize="12px"
      // fontWeight="400"
      // />
    >
      {name}
    </NoLineTagStyled>
  );
};

export default NoLineTag;

//Tag사용해야할때 TagWrapperStyled로 감싸야하기때문에 이파일에도 아래 컴포넌트 두겠습니다. 추후삭제예정
export const TagWrapperStyled = styled.div`
  display: flex;
  flex-shrink: 0;
  width: ${(props) => props.width || '296px'}; //184px -> 채용카드안
  height: ${(props) => props.height || '27px'}; //97px -> 채용카드안
  align-items: flex-start;
  gap: 4px;
  margin: ${(props) => props.margin || '65px 40px 0px 24px'};
`;

export const NoLineTagStyled = styled.div`
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
  background-color: ${(props) => props.$backgroundColor || `${Colors.Gray1}`};
`;
