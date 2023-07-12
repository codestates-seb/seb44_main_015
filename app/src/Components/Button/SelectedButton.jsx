import styled from 'styled-components';
import { useState } from 'react';
import selectedImg from '../../Assets/Icons/selected.png';
import unselectedImg from '../../Assets/Icons/unselected.png';

const SelectedButton = ({ className }) => {
  const [changeImg, setChangeImg] = useState(unselectedImg);
  //const [showSelectedBtn, setShowSelectedBtn] = useState(false);
  const ImageHandler = () => {
    if (changeImg === unselectedImg) {
      setChangeImg(selectedImg);
    } else {
      setChangeImg(unselectedImg);
    }
  };

  return (
    <ButtonStyled
      alt="selectedButton"
      src={changeImg}
      onClick={ImageHandler}
      className={className}
    ></ButtonStyled>
  );
};

export default SelectedButton;

export const ButtonStyled = styled.img`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  cursor: pointer;
  margin: 24px 24px 87px 0;
  &.hide {
    display: none;
  }
`;
