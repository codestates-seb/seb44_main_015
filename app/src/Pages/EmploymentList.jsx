import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import TagList from '../Components/Commons/EmploymentPage/TagList';
import EmploymentCardList from '../Components/Commons/EmploymentPage/EmploymentCardList';
import { useState } from 'react';
import { styled } from 'styled-components';
import { Colors } from '../Assets/Theme';

const EmploymentList = () => {
  const [selectedTag, setSelectedTag] = useState(null); // 선택한 태그를 상태로 관리

  const handleTagSelect = (tag) => {
    // 선택한 태그를 상태로 업데이트
    setSelectedTag(tag);
  };

  return (
    <>
      <Header />
      <EmploymentListContainerStyled>
        <TagList onSelectTag={handleTagSelect} />
        <EmploymentCardList selectedTag={selectedTag}></EmploymentCardList>
      </EmploymentListContainerStyled>
      <Footer />
    </>
  );
};

export default EmploymentList;

const EmploymentListContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  height: auto;
  box-sizing: border-box;
  background-color: ${Colors.Bgwhite};
  /* overflow-x: auto; */
`;
