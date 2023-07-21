import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import selectedImg from '../../Assets/Icons/selected.png';
import unselectedImg from '../../Assets/Icons/unselected.png';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../Api/Axios';

const SelectedButton = ({ clicked, checked, id, ...props }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const [savedUserId, setSavedUserId] = useState(null);
  const selectCardNumber = useRef(0);
  let { noticeId } = useParams();

  const selectHandler = (e) => {
    if (Number(e.target.id) === id && checked === 'APPLY') {
      setSelected((prev) => !prev);
      setSavedUserId(id);
    }
  };

  useEffect(() => {
    if (selected && clicked) {
      async function fetchData() {
        const response = await axios.patch(
          `/notice/${noticeId}/card/${savedUserId}`,
          {
            cardCheck: 'ACCEPTED',
          },
          {
            headers: {
              Authorization: `BearereyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJDT01QQU5ZIl0sImlkIjoyLCJlbWFpbCI6ImdhcmFtQGdtYWlsLmNvbSIsInN1YiI6ImdhcmFtQGdtYWlsLmNvbSIsImlhdCI6MTY4OTgyMzk4MywiZXhwIjoxNjkwMDAzOTgzfQ.P5lpeQ_CdP706T0JE5PrWHeY_1ICvhlCIDxASCZ0wk8`,
            },
          },
        );
        alert('채택 완료!');
        selectCardNumber.current = selectCardNumber.current + 1;
        navigate('/mypagecompany');
      }
      fetchData();
    }
  }, [selectHandler]);

  return (
    <ButtonStyled
      alt="selectedButton"
      src={selected ? selectedImg : unselectedImg}
      {...props}
      id={id}
      selected={selected}
      checked={checked}
      onClick={selectHandler}
      clicked={clicked}
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
