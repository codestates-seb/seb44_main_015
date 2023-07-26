import { useState } from "react";
import Modal from "../Components/Commons/Modal";

const TestModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>모달 열기</button>
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        title="회원가입 성공!"
        text="프리해요와 함께 성장해 나가는 모습을 기대합니다!"
        content="로그인 하러 가기"
        subButtonText={"창 닫기"}
        redirectPage={"/login"}
      />
    </div>
  );
};

export default TestModal;
