import MainButton from "../../Button/MainButton";
import OutlineButton from "../../Button/OutlineButton";
import Delete from "../../../Assets/Icons/delete.png";
import Unchecked from "../../../Assets/Icons/checkbox_unchecked.png";
import Checked from "../../../Assets/Icons/checkbox_checked.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Colors } from "../../../Assets/Theme";
import styled from "styled-components";

const CompanySignup = () => {
  const tagList = [
    "연봉 상위 1%",
    "연봉 상위 10%",
    "업력 5년 이상",
    "재택근무",
    "로고-브랜딩",
    "인쇄-홍보물",
    "패키지-서버",
    "웹-모바일 디자인",
    "백엔드",
    "프론트엔드",
    "데이터",
    "풀스택",
    "DevOps",
    "인프라",
    "퍼블리셔",
    "ML/DL",
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [person, setPerson] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [intro, setIntro] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [checked, setChecked] = useState(false);

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // 정보를 받아오거나 초기화 등의 상황에서 phone 상태값을 적절한 형식으로 변환합니다.
    // 예: 서버에서 정보를 받아와서 휴대폰 번호를 세팅할 때, 하이픈(-)을 추가하여 표시합니다.
    const formattedPhoneNumber = formatPhoneNumber(phone);
    setPhone(formattedPhoneNumber);
  }, [phone]);

  const handlePhoneChange = (e) => {
    // 전화번호 입력 시 하이픈(-)을 제거하고 저장합니다.
    const phoneNumber = e.target.value.replace(/-/g, "");
    setPhone(phoneNumber);
  };

  const formatPhoneNumber = (number) => {
    // 전화번호를 하이픈(-)으로 분리하여 표시합니다.
    if (number.length === 11) {
      return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }
    return number;
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleTagSelect = (tag) => {
    // 이미 선택한 태그인지 확인
    if (selectedTags.includes(tag)) {
      // 이미 선택한 태그이면 선택 해제
      setSelectedTags((prevTags) =>
        prevTags.filter((prevTag) => prevTag !== tag)
      );
    } else {
      // 선택하지 않은 태그이면 선택 추가
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors([]);

    let isValid = true;

    // 이메일 유효성 검사
    if (!email) {
      setErrors((prevErrors) => [...prevErrors, "Email_empty"]);
      isValid = false;
    } else if (!email.includes("@")) {
      setErrors((prevErrors) => [...prevErrors, "Email_invalid"]);
      isValid = false;
    }

    //비밀번호 유효성 검사
    if (!password) {
      setErrors((prevErrors) => [...prevErrors, "Password_empty"]);
      isValid = false;
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]*$/.test(password)) {
      setErrors((prevErrors) => [...prevErrors, "Password_invalid"]);
      isValid = false;
    } else if (password.length < 8) {
      setErrors((prevErrors) => [...prevErrors, "Password_short"]);
      isValid = false;
    }

    //기업이름 유효성 검사
    if (!name) {
      setErrors((prevErrors) => [...prevErrors, "Name_empty"]);
      isValid = false;
    }

    //휴대폰번호 유효성 검사
    if (!phone) {
      setErrors((prevErrors) => [...prevErrors, "Phone_empty"]);
      isValid = false;
    } else if (!/^\d{3}-\d{4}-\d{4}$/.test(phone)) {
      setErrors((prevErrors) => [...prevErrors, "Phone_invalid"]);
      isValid = false;
    }

    //대표자명 유효성 검사
    if (!person) {
      setErrors((prevErrors) => [...prevErrors, "Person_empty"]);
      isValid = false;
    }

    //주소 유효성 검사
    if (!address) {
      setErrors((prevErrors) => [...prevErrors, "Address_empty"]);
      isValid = false;
    } else if (address.length < 5) {
      setErrors((prevErrors) => [...prevErrors, "Address_short"]);
      isValid = false;
    }

    //회사소개 유효성 검사
    if (!intro) {
      setErrors((prevErrors) => [...prevErrors, "Intro_empty"]);
      isValid = false;
    }

    if (isValid) {
      try {
        // POST 요청으로 보낼 데이터 생성
        const dataToSend = {
          email: email,
          password: password,
          phone: formatPhoneNumber(phone),
          name: name,
          person: person,
          intro: intro,
          address: address,
          tagNames: selectedTags,
        };

        // 서버로 POST 요청 보내기
        const response = await axios.post(
          "http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/company/signup",
          dataToSend
        );

        // 응답 처리 (예: 회원가입 성공 시 다음 페이지로 이동)
        console.log("회원가입 성공!", response);
        // 여기에서 다음 페이지로 이동하거나, 다른 처리를 하시면 됩니다.
      } catch (error) {
        console.error("회원가입 실패!", error);
        setErrors((prevErrors) => [...prevErrors, "SignupFail"]);
      }
    }
  };

  return (
    <>
      <FormContainerStyled>
        <LabelStyled>이메일</LabelStyled>
        <InputStyled
          type="text"
          value={email}
          placeholder="이메일을 입력해 주세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.includes("Email_empty") && (
          <ErrorMessage>이메일 주소를 입력해 주세요.</ErrorMessage>
        )}
        {errors.includes("Email_invalid") && (
          <ErrorMessage>유효하지 않은 이메일 주소입니다.</ErrorMessage>
        )}

        <LabelStyled>비밀번호</LabelStyled>
        <InputStyled
          type="password"
          value={password}
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.includes("Password_empty") && (
          <ErrorMessage>비밀번호를 입력해 주세요.</ErrorMessage>
        )}
        {errors.includes("Password_invalid") && (
          <ErrorMessage>
            최소한 하나의 대문자(A-Z), 소문자(a-z), 숫자, 특수문자를 포함해야
            합니다.
          </ErrorMessage>
        )}
        {errors.includes("Password_short") && (
          <ErrorMessage>
            비밀번호는 최소한 8자 이상이 되어야 합니다.
          </ErrorMessage>
        )}

        <LabelStyled>회사·의뢰인 이름</LabelStyled>
        <InputStyled
          type="text"
          value={name}
          placeholder="회사·의뢰인 이름을 입력해 주세요"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.includes("Name_empty") && (
          <ErrorMessage>회사·의뢰인 이름을 입력해 주세요.</ErrorMessage>
        )}

        <LabelStyled>대표자명</LabelStyled>
        <InputStyled
          type="text"
          value={person}
          placeholder="대표자명을 입력해 주세요"
          onChange={(e) => setPerson(e.target.value)}
        />
        {errors.includes("Person_empty") && (
          <ErrorMessage>대표자명을 입력해 주세요.</ErrorMessage>
        )}

        <LabelStyled>주소</LabelStyled>
        <InputStyled
          type="text"
          value={address}
          placeholder="주소를 정확히 입력해 주세요"
          onChange={(e) => setAddress(e.target.value)}
        />
        {errors.includes("Address_empty") && (
          <ErrorMessage>주소를 입력해 주세요.</ErrorMessage>
        )}
        {errors.includes("Address_short") && (
          <ErrorMessage>조금 더 상세한 주소를 입력해 주세요.</ErrorMessage>
        )}

        <LabelStyled>연락처</LabelStyled>
        <InputStyled
          type="text"
          value={phone}
          placeholder="연락 가능한 휴대폰 번호를 입력해 주세요"
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.includes("Phone_empty") && (
          <ErrorMessage>휴대폰 번호를 입력해 주세요.</ErrorMessage>
        )}
        {errors.includes("Phone_invalid") && (
          <ErrorMessage>휴대폰 번호 11자리를 모두 입력해 주세요.</ErrorMessage>
        )}

        <LabelStyled>회사 키워드</LabelStyled>
        <TagContainerStyled>
          {tagList.map((tag, index) => (
            <TagStyled
              key={index}
              selected={selectedTags.includes(tag)}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </TagStyled>
          ))}
        </TagContainerStyled>
        <LabelStyled>회사 소개</LabelStyled>
        <IntroStyled
          // type="text"
          value={intro}
          placeholder="회사 소개를 입력해 주세요"
          onChange={(e) => setIntro(e.target.value)}
        />
        {errors.includes("Intro_empty") && (
          <ErrorMessage>회사 소개를 입력해 주세요.</ErrorMessage>
        )}
      </FormContainerStyled>
      <ApprovementWrapperStyled>
        <CheckboxStyled
          src={checked ? Checked : Unchecked}
          onClick={handleChecked}
        ></CheckboxStyled>
        <WarningStyled>
          본 서비스는 학습용 프로젝트로 모든 개인 정보는 서비스 테스트 외에
          타용도로 절대 사용되지 않습니다. 또한, 일정 기간 후 파기 예정입니다.
          개인 정보 기입에 동의하시면 동의 버튼을 눌러주세요.
        </WarningStyled>
      </ApprovementWrapperStyled>
      {errors.includes("SignupFail") && (
        <SignupFailStyled>
          회원가입에 실패하였습니다. 입력 정보를 다시 확인해 주세요!
        </SignupFailStyled>
      )}
      <MainButton
        width={"400px"}
        content={"회원가입"}
        disabled={!checked}
        onClick={handleSignup}
      />
      <LoginContainerStyled>
        <MemberStyled>이미 회원이신가요?</MemberStyled>
        <LoginStyled onClick={handleLogin}>로그인</LoginStyled>
      </LoginContainerStyled>
    </>
  );
};

export default CompanySignup;

const FormContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

const LabelStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 9px;
  color: var(--gray-4, #333);
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
`;

const InputStyled = styled.input`
  width: 400px;
  height: 56px;
  font-size: 18px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 1px solid var(--gray-2, #bebebe);

  &::placeholder {
    font-size: 15px;
    color: ${Colors.Gray2};
  }
`;

const TagContainerStyled = styled.div`
  display: flex;
  box-sizing: border-box;
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
    ${(props) => (props.selected ? Colors.mainPurple : "transparent")};
  border-radius: 16px;
  border-radius: 16px;
  color: ${(props) => (props.selected ? Colors.mainPurple : Colors.Gray4)};
  font-size: 14px;
  line-height: 20px;
  font-weight: ${(props) => (props.selected ? "400" : "300")};

  &:hover {
    font-weight: 400;
    cursor: pointer;
  }
`;

const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;

const MemberStyled = styled.div`
  border-right: 1px solid var(--gray-2, #bebebe);
  width: 140px;
  color: var(--gray-4, #333);
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
`;

const LoginStyled = styled.div`
  color: var(--main, #7000ff);
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  margin-left: 16px;

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

const IntroStyled = styled.textarea`
  width: 400px;
  height: 200px;
  font-size: 18px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 10px 10px;
  border: 1px solid var(--gray-2, #bebebe);

  &::placeholder {
    font-size: 14px;
    color: ${Colors.Gray2};
  }
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

const ApprovementWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 23px;
`;

const CheckboxStyled = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const WarningStyled = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${Colors.Gray3};
  line-height: 19px;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 0.25rem 0 0 0;
`;

const SignupFailStyled = styled(ErrorMessage)`
  margin-bottom: 20px;
`;
