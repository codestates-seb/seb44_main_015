import styled from 'styled-components';
import { useState, useEffect } from 'react';
import selectedImg from '../../Assets/Icons/selected.png';
import unselectedImg from '../../Assets/Icons/unselected.png';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../Api/Axios';

const SelectedButton = ({ clicked, checked, id, ...props }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const [savedUserId, setSavedUserId] = useState(null);
  let { noticeId } = useParams();
  const [selectcount, setSelectcount] = useState(0);

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
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          },
        );
        alert('채택 완료!');
        setSelectcount((prev) => prev + 1);
        localStorage.setItem('selectcount', selectcount);
        if (localStorage.getItem('id')) {
          navigate(`/mypagecompany/${localStorage.getItem('id')}`);
        } else {
          navigate(`/`);
        }
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
