import Footer from "../Components/Commons/Layouts/Footer";
import Header from "../Components/Commons/Layouts/Header";
import { Colors } from "../Assets/Theme";
import { Messages } from "../Assets/Theme";
import { ButtonWrapperStyled } from "./MyPageFreelancer";
import CompanyCard from "../Components/Commons/CompanyCard";
import OutlineButton from "../Components/Button/OutlineButton";
import MainButton from "../Components/Button/MainButton";
import CompanyDetail from "../Components/Commons/CompanyDetail";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const PostEmployment = () => {
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

  const userId = localStorage.getItem("id");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noticeTagNames, setNoticeTagNames] = useState("");
  const [deadline, setDeadline] = useState("");
  const [errors, setErrors] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({});

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

  const handlePostNotice = async (e) => {
    e.preventDefault();
    setErrors([]);

    let isValid = true;

    // 이메일 유효성 검사
    if (!title) {
      setErrors((prevErrors) => [...prevErrors, "Title_empty"]);
      isValid = false;
    }

    if (!content) {
      setErrors((prevErrors) => [...prevErrors, "Content_empty"]);
      isValid = false;
    }

    if (!deadline) {
      setErrors((prevErrors) => [...prevErrors, "Deadline_empty"]);
      isValid = false;
    }

    if (isValid) {
      try {
        const deadlineDate = new Date(deadline);
        const dataToSend = {
          title: title,
          content: content,
          tagNames: selectedTags,
          deadline: deadlineDate.toISOString(),
        };

        // 서버로 POST 요청 보내기
        const response = await axios.post(
          "http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/notice",
          dataToSend
        );

        if (response.status === 201) {
          console.log("채용 등록 성공!", response);
          // setModalOpen(true);
        } else {
          setErrors((prevErrors) => [...prevErrors, "PostFail"]);
          throw new Error(
            "채용 등록에 실패했습니다. 입력 정보를 확인해 주세요."
          );
        }
      } catch (error) {
        console.error("채용 등록 요청 중 오류가 발생했습니다.", error);
        setErrors((prevErrors) => [...prevErrors, "PostFail"]);
      }
    }
  };

  useEffect(() => {
    const url = `http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/company/${userId}`;
    console.log(userId);
    axios
      .get(url)
      .then((response) => {
        setCompanyInfo(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
        // setLoading(false);
      });
  }, []);

  const { email, phone, tagNames, intro, name } = companyInfo;

  return (
    <>
      <Header />
      <PageContainerStyled>
        <PostContainerStyled>
          <TextFirstStyled>채용 올리기</TextFirstStyled>
          <TitleContainerStyled>
            <TextSecondStyled>제목</TextSecondStyled>
            <TextThirdStyled>
              채용하실 직군을 정확히 입력해 주세요
            </TextThirdStyled>
            {errors.includes("Title_empty") && (
              <ErrorMessage>제목을 입력해 주세요.</ErrorMessage>
            )}
            <TitleInputStyled
              type="text"
              value={title}
              placeholder="제목을 입력해 주세요"
              onChange={(e) => setTitle(e.target.value)}
            />
          </TitleContainerStyled>
          <ContentWrapperStyled>
            <TextSecondStyled>내용</TextSecondStyled>
            <TextThirdStyled>
              자격 요건, 우대 사항, 기술 스택 등을 입력해 주세요
            </TextThirdStyled>
            {errors.includes("Content_empty") && (
              <ErrorMessage>내용을 입력해 주세요.</ErrorMessage>
            )}
            <ContentInputStyled
              placeholder="내용을 입력해 주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></ContentInputStyled>
          </ContentWrapperStyled>
          <LowerWrapperStyled>
            <TagWrapperStyled>
              <TextSecondStyled>태그</TextSecondStyled>
              <TextThirdStyled>
                채용을 나타낼 수 있는 태그를 선택해 주세요.
              </TextThirdStyled>
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
            </TagWrapperStyled>
            <DateWrapper>
              <TextSecondStyled>마감일</TextSecondStyled>
              <TextThirdStyled>마감일을 선택해 주세요</TextThirdStyled>
              <DateStyled
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              ></DateStyled>
              {errors.includes("Deadline_empty") && (
                <ErrorMessage>마감일을 선택해 주세요.</ErrorMessage>
              )}
            </DateWrapper>
          </LowerWrapperStyled>
          <MainButton width="100%" onClick={handlePostNotice} />
        </PostContainerStyled>
        <CompanyContainerStyled>
          <CompanyCard name={name} phone={phone} email={email} />
          <CompanyDetail stack={tagNames} detail={intro} />
          <ButtonWrapperStyled>
            <OutlineButton
              width={"360px"}
              content={Messages.companyCardEditBtn}
              onClick={() => {
                alert("서비스 구현중입니다!");
              }}
            />
          </ButtonWrapperStyled>
        </CompanyContainerStyled>
      </PageContainerStyled>
      <Footer />
    </>
  );
};

export default PostEmployment;

const PageContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  min-width: 1440px;
  padding: 50px 190px;
  box-sizing: border-box;
  background-color: ${Colors.Gray1};
`;

const PostContainerStyled = styled.section`
  width: 680px;
  height: auto;
  margin-right: 24px;
`;

const CompanyContainerStyled = styled.section`
  width: 360px;
  height: auto;
  padding-top: 92px;
`;

const TextFirstStyled = styled.div`
  margin-top: 40px;
  margin-bottom: 22px;
  color: var(--gray-4, #333);
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
`;

const TextSecondStyled = styled.div`
  color: var(--gray-4, #333);
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
`;

const TextThirdStyled = styled.div`
  margin-bottom: 17px;
  color: var(--gray-4, #333);
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
`;

const TitleContainerStyled = styled.div`
  width: 680px;
  height: 179px;
  padding: 24px 24px 40px 24px;
  border-radius: 16px;
  border: 1px solid var(--gray-2, #bebebe);
  box-sizing: border-box;
  background: var(--white, #fff);
`;

const TitleInputStyled = styled.input`
  width: 628px;
  height: 56px;
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid var(--gray-2, #bebebe);
  &::placeholder {
    font-size: 16px;
    color: ${Colors.Gray2};
  }
`;

const ContentWrapperStyled = styled(TitleContainerStyled)`
  height: 363px;
  margin-top: 16px;
`;

const ContentInputStyled = styled.textarea`
  width: 628px;
  height: 240px;
  padding: 16px;
  font-size: 18px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 10px 10px;
  border: 1px solid var(--gray-2, #bebebe);

  &::placeholder {
    font-size: 16px;
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

const LowerWrapperStyled = styled(ContentWrapperStyled)`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 36px;
`;

const TagWrapperStyled = styled.div`
  height: auto;
  width: 400px;
`;

const TagContainerStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 8px;
  gap: 8px;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid var(--gray-2, #bebebe);
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
const DateWrapper = styled.div`
  width: 200px;
`;

const DateStyled = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  color: var(--gray-4, #333);
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid var(--gray-2, #bebebe);
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 5px;
`;
