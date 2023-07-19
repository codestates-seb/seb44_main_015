import {TextAreaWrapperStyled, TitleStyled, ButtonWrapper, TagWrapperStyled} from "./SignUpFreelancer";
import TextArea from '../TextArea';
import SelectBox from '../SelectBox';
import OutlineButton from '../../Button/OutlineButton';
import DisabledButton from '../../Button/DisabledButton';
import MainButton from '../../Button/MainButton';
import Tag from '../Tag';
import NoLineTag from '../NoLineTag';
import Approvement from './Approvement';

import styled from 'styled-components';

function SignUpCompany(){
    const categoryOption = ["서울", "부산", "광주", "대구"];
    const tagOption = [{id:1, isChecked:false, name:"안녕"}, {id:2,isChecked:false, name:"하세요"}, {id:3,isChecked:false, name:"반갑"}, {id:4,isChecked:false, name:"습니다"}, {id:5,isChecked:false, name:"많이"}, {id:6,isChecked:false, name:"있으면"}, {id:7,isChecked:false, name:"어떻게"}, {id:8,isChecked:false, name:"될까요"}]

    return(
        <>
            <TextAreaWrapperStyled>
                <li>
                    <TextArea
                    title={"이메일"}
                    placeholder={"이메일을 입력해주세요"}
                    errorMessage={"이메일 형식에 맞게 입력해주세요"}
                    className={"hide"}
                    />
                </li>
                <li>
                    <TextArea
                    title={"비밀번호"}
                    placeholder={"비밀번호를 입력해주세요"}
                    errorMessage={"비밀번호는 영문, 특수문자 포함 8자 이상이어야 합니다"}
                    className={"hide"}
                    />
                </li>
                <li>
                    <TextArea
                    title={"회사·의뢰인 이름"}
                    placeholder={"실명을 입력해주세요"}
                    />
                </li>
                <li>
                    <TextArea
                    title={"회사 전화번호"}
                    placeholder={"회사 전화번호·휴대폰 번호를 입력해주세요"}
                    errorMessage={"휴대폰번호는 숫자만 입력해주세요"}
                    className={"hide"}
                    />
                </li>
                <li>
                    <TitleStyled>지역</TitleStyled>
                    <SelectBox
                    name={"지역"}
                    categoryOption={categoryOption}
                    width={"100%"}
                    />
                </li>
                <li>
                    <TitleStyled>회사 키워드</TitleStyled>
                    <TagWrapperStyled>
                        {tagOption.map((tag, index) => {
                            return(
                                <NoLineTag
                                key={index}
                                name={tag.name}
                                fontSize={"16px"}
                                className={tag.isChecked ? "cursor select" : "cursor"}
                                onClick={() => handleTag(tag.id)}
                                />
                            )}
                        )}
                    </TagWrapperStyled>
                </li>
                <li>
                    <TextArea
                        title={"회사 소개"}
                        placeholder={"회사 소개를 입력해주세요"}
                        className={"hide"}
                        height={"220px"}
                    />
                </li>
            </TextAreaWrapperStyled>
            <Approvement/>
            <ButtonWrapper>
                <MainButton
                content={"회원가입"}
                width={"100%"}
                />
            </ButtonWrapper>
        </>
    )
}

export default SignUpCompany;

