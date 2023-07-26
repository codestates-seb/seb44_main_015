import React from "react";
import Header from "../Components/Commons/Layouts/Header";
import Footer from "../Components/Commons/Layouts/Footer";
import { styled } from "styled-components";
import { Colors } from "../Assets/Theme";
import MainButton from "../Components/Button/MainButton";
import { useState, useEffect } from "react";
import axios from "../Api/Axios";
import {
  LowerContainerStyled,
  EmploymentCardContainerStyled,
} from "../Components/Commons/SearchPage/EmploymentCardList";
import EmploymentCard from "../Components/Commons/EmploymentCard";

const Surfing = () => {
  const [surfvalue, setSurfvalue] = useState();
  const [careerData, setCareerData] = useState([]);

  const surfHandler = (e) => {
    setSurfvalue(e.target.value);
  };

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      clicksurfHandler;
    }
  };
  const clicksurfHandler = () => {
    if (surfvalue) {
      async function fetchData() {
        const response = await axios.get(
          `notice/search?keyword=${surfvalue}&sort=relevance&limit=10`
        );
        setCareerData(response.data);
      }
      fetchData();
    }
  };

  console.log(careerData);

  return (
    <>
      <Header />
      <SurfContainerStyled>
        <UpperContainerStyled>
          <TextareaStyled
            type="search"
            onChange={surfHandler}
            $surfvalue={surfvalue}
            onKeyPress={onSubmitSearch}
          />
          <MainButton content={"검색"} onClick={clicksurfHandler} />
        </UpperContainerStyled>
        <LowerContainerStyled>
          {careerData.length !== 0 ? (
            <EmploymentCardContainerStyled>
              {careerData &&
                careerData.map((employmentInfo) => (
                  <EmploymentCard
                    key={employmentInfo.noticeId}
                    employmentInfo={employmentInfo}
                  />
                ))}
            </EmploymentCardContainerStyled>
          ) : (
            <EmploymentCardContainerStyled>
              {"검색어를 입력하세요"}
            </EmploymentCardContainerStyled>
          )}
        </LowerContainerStyled>
      </SurfContainerStyled>
      <Footer />
    </>
  );
};

export default Surfing;

const SurfContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  height: auto;
  box-sizing: border-box;
  background-color: ${Colors.Bgwhite};
`;
const UpperContainerStyled = styled.section`
  display: flex;
  margin-top: 90px;
  padding: 40px 190px 40px 190px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const TextareaStyled = styled.textarea`
  width: ${(props) => props.width || "700px"};
  height: 60px;
  padding: 16px;
  margin-right: 10px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  box-sizing: border-box;
  background-color: ${Colors.Bgwhite};
  color: ${Colors.Gray4};
  font-size: 16px;
  line-height: 24px;
  resize: none;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  &::placeholder {
    color: ${Colors.Gray2};
  }
`;
