import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import TagList from '../Components/Commons/EmploymentPage/TagList';
import EmploymentCardList from '../Components/Commons/EmploymentPage/EmploymentCardList';
import { styled } from 'styled-components';

const EmploymentList = () => {
  return (
    <>
      <Header />
      <EmploymentListContainerStyled>
        <TagList />
        <EmploymentCardList></EmploymentCardList>
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
  /* overflow-x: auto; */
`;
