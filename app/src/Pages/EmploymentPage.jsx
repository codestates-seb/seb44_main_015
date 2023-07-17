import Header from '../Components/Commons/Layouts/Header';
import Footer from '../Components/Commons/Layouts/Footer';
import TagList from '../Components/Commons/EmploymentPage/TagList';
import EmploymentCardList from '../Components/Commons/EmploymentPage/EmploymentCardList';
import { styled } from 'styled-components';

const EmploymentPage = () => {
  return (
    <>
      <Header />
      <EmploymentPageContainerStyled>
        <TagList />
        <EmploymentCardList></EmploymentCardList>
      </EmploymentPageContainerStyled>
      <Footer />
    </>
  );
};

export default EmploymentPage;

const EmploymentPageContainerStyled = styled.div`
  display: flex;
  min-width: 1080px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-x: auto;
`;
