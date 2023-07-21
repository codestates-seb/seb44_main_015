import {Colors} from '../../../Assets/Theme';
import Tag from '../../Commons/Tag';

import {useState} from 'react';

import styled from 'styled-components';

import Logo from '../../../Assets/Icons/Logo.png';

function LogoTag({freelancerOnClick, companyOnClick, freelancerClassName, companyClassName}){

    return(
        <>
            <LogoWrapperStyled>
                <h2><LogoStyled src={Logo} alt="프리해요"></LogoStyled></h2>
                <NoticeStyled>프리랜서/회사 유형을 선택 후<br></br>로그인 해 주세요</NoticeStyled>
            </LogoWrapperStyled>
            <TagWrapperStyled>
                <Tag
                children={"🧑‍💻 프리랜서"} 
                className={freelancerClassName}
                onClick={freelancerOnClick}
                />
                <Tag children={"🏢 회사 · 의뢰인"}
                className={companyClassName}
                onClick={companyOnClick}
                />
            </TagWrapperStyled>
        </>
    )
}

export default LogoTag;

const LogoWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LogoStyled = styled.img`
    width:108px;
    height: 22px;
`

const NoticeStyled = styled.p`
    margin: 16px 0 0;
    font-size: 16px;
    font-weight: 400;
    color: ${Colors.Gray3};
    text-align:center;
    line-height:24px;
`

const TagWrapperStyled = styled.ul`
    display:flex;
    width:100%;
    margin: 24px 0 40px;
    gap:16px;
`