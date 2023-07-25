import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Colors } from '../../../Assets/Theme';

const TagList = ({ onSelectTag }) => {
  const tagList = [
    '연봉 상위 1%',
    '연봉 상위 10%',
    '업력 5년 이상',
    '재택근무',
    '50인 이상',
    '병역특례',
    '유연근무제',
    '자유로운 휴가',
    '수평적 문화',
    '식사 제공',
    '로고-브랜딩',
    '인쇄-홍보물',
    '패키지-서버',
    '웹-모바일 디자인',
    '마케팅 디자인',
    '산업-제품 디자인',
    '캐릭터-일러스트',
    '게임-웹3.0',
    '캘라그라피-폰트',
    '그래픽 디자인',
    '백엔드',
    '프론트엔드',
    '풀스택',
    'DevOps',
    '데이터',
    'ML/DL',
    '인프라',
    // '퍼블리셔',
    // '영어 번역',
    // '중국어 번역',
    // '일본어 번역',
    // '기타 언어 번역',
    // '영어 통역',
    // '중국어 통역',
    // '일본어 통역',
    // '번역공증대행',
    // '기타 언어 통역',
    // '감수',
  ];

  //번역쪽은 태그 제외했습니다.

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
