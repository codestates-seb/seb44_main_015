import styled from 'styled-components';
import { Colors } from '../../../Assets/Theme';

import {useState} from 'react';

import Unchecked from '../../../Assets/Icons/checkbox_unchecked.png';
import Checked from '../../../Assets/Icons/checkbox_checked.png';

function Approvement(){
    const [checked, setChecked] = useState(false);
    const handleChecked = () =>{
        setChecked(!checked);
    }
    return(
        <ApprovementWrapperStyled>
            <CheckboxStyled src={checked ? Checked : Unchecked} onClick={handleChecked}></CheckboxStyled>
            <NoticeStyled>본 서비스는 학습용 프로젝트로 모든 개인 정보는 서비스 테스트 외에 타용도로 절대 사용되지 않습니다. 또한, 일정 기간 후 파기 예정입니다. 개인 정보 기입에 동의하시면 동의 버튼을 눌러주세요.</NoticeStyled>
        </ApprovementWrapperStyled>
    )
}

export default Approvement;

const ApprovementWrapperStyled = styled.div`
    display: flex;
    flex-direction: row;
`

const CheckboxStyled = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 12px;
`

const NoticeStyled = styled.p`
    font-size: 13px;
    font-weight:400;
    color: ${Colors.Gray3};
    line-height: 19px;
`