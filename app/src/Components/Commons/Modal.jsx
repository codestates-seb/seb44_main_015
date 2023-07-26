import MainButton from "../Button/MainButton";
import Modal_checked from "../../Assets/Icons/Modal_checked.png";
import { Colors } from "../../Assets/Theme";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Modal = ({
  isOpen,
  onClose,
  title,
  text,
  content,
  subButtonText,
  redirectPage,
}) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  const handleMainButtonClick = () => {
    navigate(redirectPage);
  };

  return (
    <ModalOverlayStyled>
      <ModalWrapperStyled>
        <ModalContentStyled>
          <UpperContainerStyled>
            <ModalCheckedStyled src={Modal_checked} alt={"성공"} />
            <TitleStyled title={title}>{title}</TitleStyled>
          </UpperContainerStyled>

          <ContentStyled text={text}>{text}</ContentStyled>
          <MainButton
            width={"360px"}
            content={content}
            onClick={handleMainButtonClick}
          >
            {content}
          </MainButton>
          <SecondButtonStyled onClick={onClose} subButtonText={subButtonText}>
            {subButtonText}
          </SecondButtonStyled>
        </ModalContentStyled>
      </ModalWrapperStyled>
    </ModalOverlayStyled>
  );
};

export default Modal;

const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.Gray3};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Bgwhite};
  padding: 24px;
  width: 654px;
  height: 394px;
  border-radius: 16px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
`;

const ModalContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpperContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const ModalCheckedStyled = styled.img`
  height: 36px;
  width: 36px;
  margin-bottom: 4px;
  margin-right: 16px;
`;
const TitleStyled = styled.div`
  color: ${Colors.Gray4};
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 35px;
`;

const ContentStyled = styled(TitleStyled)`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  margin-bottom: 40px;
`;

const SecondButtonStyled = styled.button`
  width: 360px;
  padding: 16px 0px;
  text-align: center;
  background-color: ${Colors.Gray2};
  color: ${Colors.Bgwhite};
  font-weight: 700;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  line-height: 24px;
  font-size: 16px;
  margin-top: 8px;
`;
