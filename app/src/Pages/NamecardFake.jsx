import React from 'react';
import NameCard from '../Components/Commons/NameCard';
import { useState, useEffect } from 'react';

import axios from '../Api/Axios';

const NamecardFake = () => {
  const [userListInfo, setUserListInfo] = useState([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('card/weekly');
      setUserListInfo(response.data);
    }
    fetchData();
  }, []);

  const touchHandler = (e) => {
    setSelected(!selected);
    console.log(e);
  };

  return (
    <>
      {userListInfo &&
        userListInfo.map((onecard) => (
          <NameCard
            key={onecard.id}
            userInfo={onecard}
            className={null}
            onClick={touchHandler}
            selected={selected}
            id={onecard.id}
          ></NameCard>
        ))}
    </>
  );
};

export default NamecardFake;
