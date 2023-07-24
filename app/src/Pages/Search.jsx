import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import TagList from '../Components/Commons/SearchPage/TagList';
import EmploymentCardList from '../Components/Commons/SearchPage/EmploymentCardList';
import { useState } from 'react';
import { styled } from 'styled-components';
import { Colors } from '../Assets/Theme';

const EmploymentList = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagSelect = (tag) => {
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
`;
