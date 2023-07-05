import { useState, useEffect } from 'react';

import NameCard from '../Components/Commons/NameCard';
import Resume from '../Components/Commons/Resume';
import FakeUserInfo from '../Api/FakeUserInfo.json';

const MyPageFreelancer = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(FakeUserInfo[0]);
    //console.log(info);
  }, []);

  const { name, email, phone, stack, resume, com1, com2, com3 } = info;

  //console.log('tmxo레줌 ', stack, resume);
  return (
    <div>
      <NameCard name={name} email={email} phone={phone} stack={stack} />
      <Resume resume={resume} com1={com1} com2={com2} com3={com3} />
    </div>
  );
};

export default MyPageFreelancer;
