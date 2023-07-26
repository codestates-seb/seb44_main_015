import Logo from "../Assets/Icons/Logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Colors } from "../Assets/Theme";
import styled from "styled-components";
import FreelancerSignup from "../Components/Commons/SignUp/FreelancerSignup";

const Signup = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleLogo = () => {
    navigate("/");
  };

  const handleUserTypeSelect = (tag) => {
    setSelectedUserType(tag);
  };

  return (
    <>
      <PageContainerStyled>
        <SignupContainerStyled>
          <LogoWrapperStyled>
            <h2>
              <LogoStyled
                src={Logo}
                alt="프리해요"
                onClick={handleLogo}
              ></LogoStyled>
            </h2>
            <NoticeStyled>
              프리랜서 / 회사 <br></br> 유형을 선택해 주세요
            </NoticeStyled>
            <UserTypeContainerStyled>
              <UserTypeStyled
                onClick={() => handleUserTypeSelect("freelancer")}
                className={selectedUserType === "freelancer" ? "selected" : ""}
              >
                🧑‍💻 프리랜서
              </UserTypeStyled>
              <UserTypeStyled
                onClick={() => handleUserTypeSelect("company")}
                className={selectedUserType === "company" ? "selected" : ""}
              >
                🏢 회사 · 의뢰인
              </UserTypeStyled>
            </UserTypeContainerStyled>
          </LogoWrapperStyled>
          <FreelancerSignup />
        </SignupContainerStyled>
      </PageContainerStyled>
    </>
  );
};

export default Signup;

const PageContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Gray1};
  height: 100vh;
  box-sizing: border-box;
`;

const SignupContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 520px;
  height: 751px;
  padding: 80px 60px;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid var(--gray-2, #bebebe);
  background: #fff;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.thirdPurple};
    border-radius: 16px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${Colors.secondPurple};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${Colors.mainPurple};
  }
`;

const LogoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoStyled = styled.img`
  width: 108px;
  height: 22px;

  &:hover {
    cursor: pointer;
  }
`;

const NoticeStyled = styled.p`
  margin: 16px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.Gray3};
  text-align: center;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 26px;
`;

const UserTypeContainerStyled = styled.div`
  display: flex;
  gap: 10px;
`;

const UserTypeStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 160px;
  padding: 16px;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  background-color: ${Colors.Bgwhite};
  color: ${Colors.Gray3};
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;

  &:hover {
    color: var(--main, #7000ff);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${Colors.thirdPurple};
    border: 1px solid ${Colors.mainPurple};
  }

  &.selected {
    color: var(--main, #7000ff);
    font-size: 16px;
    font-weight: 700;
    background-color: ${Colors.thirdPurple};
    border: 1px solid ${Colors.mainPurple};
  }
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 0.25rem 0 0 0;
`;
