import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Colors } from '../../../Assets/Theme';

const TagList = ({ onSelectTag }) => {
  const tagList = [
    '연봉 상위 1%',
    '연봉 상위 5%',
    '연봉 상위 10%',
    '백엔드',
    '프론트엔드',
    '브랜딩',
    '데이터',
  ];

  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    onSelectTag(tag);
  };

  return (
    <>
      <UpperContainerStyled>
        <TagContainerStyled>
          {tagList.map((tag, index) => (
            <TagStyled
              key={index}
              selected={tag === selectedTag}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </TagStyled>
          ))}
        </TagContainerStyled>
      </UpperContainerStyled>
    </>
  );
};

export default TagList;

const UpperContainerStyled = styled.div`
  display: flex;
  height: 212px;
  width: 100%;
  border-bottom: 1px solid ${Colors.Gray2};
  align-items: center;
`;

const TagContainerStyled = styled.div`
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
  background-color: ${(props) =>
    props.selected ? Colors.Bgwhite : Colors.Gray1};
  border: 1px solid
    ${(props) => (props.selected ? Colors.mainPurple : 'transparent')};
  border-radius: 16px;
  border-radius: 16px;
  color: ${(props) => (props.selected ? Colors.mainPurple : Colors.Gray4)};
  font-size: 14px;
  line-height: 20px;
  font-weight: ${(props) => (props.selected ? '400' : '300')};

  &:hover {
    background-color: ${Colors.Bgwhite};
    border-color: ${Colors.mainPurple};
    color: ${Colors.mainPurple};
    font-weight: 400;
    cursor: pointer;
  }
`;
