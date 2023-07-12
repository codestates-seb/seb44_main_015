import TextArea from '../TextArea';
import SelectBox from '../SelectBox';
import OutlineButton from '../../Button/OutlineButton';
import DisabledButton from '../../Button/DisabledButton';
import MainButton from '../../Button/MainButton';
import Tag from '../Tag';
import NoLineTag from '../NoLineTag';
import Approvement from './Approvement';

import {useState, useEffect} from 'react';

import styled from 'styled-components';

function SignUpFreelancer(){
    const categoryOption = ["안녕", "하세요", "반갑", "습니다", "많이", "있으면", "어떻게", "될까요"];
    const tagOption = [{id:1, isChecked:false, name:"안녕"}, {id:2,isChecked:false, name:"하세요"}, {id:3,isChecked:false, name:"반갑"}, {id:4,isChecked:false, name:"습니다"}, {id:5,isChecked:false, name:"많이"}, {id:6,isChecked:false, name:"있으면"}, {id:7,isChecked:false, name:"어떻게"}, {id:8,isChecked:false, name:"될까요"}]
    
    const [clickedId, setClickedId] = useState([]);
    const [clickedTag, setClickedTag] = useState(false);

    const handleTag = (id) =>{
        setClickedId([...clickedId, id]);
        setClickedTag(!clickedTag);
        tagOption.isChecked = !tagOption.isChecked;
    }

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
                    title={"이름"}
                    placeholder={"실명을 입력해주세요"}
                    />
                </li>
                <li>
                    <TextArea
                    title={"휴대폰번호"}
                    placeholder={"실명을 입력해주세요"}
                    errorMessage={"휴대폰번호는 숫자만 입력해주세요"}
                    className={"hide"}
                    />
                </li>
                <li>
                    <TitleStyled>산업군</TitleStyled>
                    <SelectBoxWrapperStyled>
                        <li>
                            <SelectBox
                            name={"메인 산업군"}
                            categoryOption={categoryOption}
                            width={"146px"}
                            />
                        </li>
                        <li>
                            <SelectBox
                            name={"세부 산업군"}
                            categoryOption={categoryOption}
                            width={"242px"}
                            />
                        </li>
                    </SelectBoxWrapperStyled>
                </li>
                <li>
                    <TitleStyled>마이 키워드</TitleStyled>
                    <span>(최대 3개 선택 가능)</span>
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
                <CareerWrapperStyled>
                    <TextArea
                    title={"이력"}
                    placeholder={"이력을 입력해주세요"}
                    className={"hide"}
                    />
                    <OutlineButton
                    content={"+ 이력 추가하기"}
                    width={"100%"}
                    />
                </CareerWrapperStyled>
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

export default SignUpFreelancer;

export const TextAreaWrapperStyled = styled.ul`
    margin-bottom: 56px;
    & > li{
        margin-bottom: 32px;
    }
    & > li:last-child{
        margin-bottom: 0px;
    }
`

export const TitleStyled = styled.p`
    display: inline-block;
    margin-bottom: 8px;
    font-size:16px;
    font-weight:700;
`

const SelectBoxWrapperStyled = styled.ul`
    display:flex;
    justify-content:space-between;
`

export const TagWrapperStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 8px;
    margin-bottom: 36px;
`

const CareerWrapperStyled = styled.li`
    display:flex;
    flex-direction:column;
    & > button{
        margin-top: 16px;
    }
`

export const ButtonWrapper = styled.div`
    margin-top:24px;
    width:100%;
`