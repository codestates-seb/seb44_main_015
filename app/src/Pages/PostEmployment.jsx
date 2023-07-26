import Footer from "../Components/Commons/Layouts/Footer";
import Header from "../Components/Commons/Layouts/Header";
import { Colors } from "../Assets/Theme";

import styled from "styled-components";

const PostEmployment = () => {
  return (
    <>
      <Header />
      <PageContainerStyled>
        <PostContainerStyled>dd</PostContainerStyled>
        <CompanyContainerStyled></CompanyContainerStyled>
      </PageContainerStyled>
      <Footer />
    </>
  );
};

export default PostEmployment;

const PageContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  min-width: 1440px;
  padding: 50px 190px 0 190px;
  box-sizing: border-box;
  background-color: ${Colors.Gray1};
`;

const PostContainerStyled = styled.div`
  width: 680px;
  height: 74vh;
  background-color: red;
`;

const CompanyContainerStyled = styled.div`
  width: 360px;
  height: 74vh;
  background-color: blue;
`;
