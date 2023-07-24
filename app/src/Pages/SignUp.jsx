import { useState } from 'react';

import {
  BodyBackgroundStyled,
  MainStyled,
  HomeLinkWrapperStyled,
  HomeLinkStyled,
  LogInWrapperStyled,
} from '../Components/Commons/SignUp/Form';
import LogoTag from '../Components/Commons/SignUp/LogoTag';
import SignUpFreelancer from '../Components/Commons/SignUp/SignUpFreelancer';
import SignUpCompany from '../Components/Commons/SignUp/SignUpCompany';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [focusTag, setFocusTag] = useState('freelancer');

  const handleFocusTag = (tag) => () => {
    setFocusTag(tag);
  };

  return (
    <>
      <BodyBackgroundStyled>
        <MainStyled>
          <HomeLinkWrapperStyled>
            <HomeLinkStyled
              onClick={() => {
                navigate('/');
              }}
            >
              홈으로
            </HomeLinkStyled>
          </HomeLinkWrapperStyled>
          <LogInWrapperStyled>
            <LogoTag
              freelancerClassName={
                focusTag === 'freelancer'
                  ? 'mediumSelected'
                  : 'mediumUnSelected'
              }
              companyClassName={
                focusTag === 'company' ? 'mediumSelected' : 'mediumUnSelected'
              }
              freelancerOnClick={handleFocusTag('freelancer')}
              companyOnClick={handleFocusTag('company')}
            />
            {focusTag === 'freelancer' ? (
              <SignUpFreelancer />
            ) : (
              <SignUpCompany />
            )}
          </LogInWrapperStyled>
        </MainStyled>
      </BodyBackgroundStyled>
    </>
  );
}

export default SignUp;
