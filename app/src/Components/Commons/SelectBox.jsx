import { Colors } from '../../Assets/Theme';

import { useState } from 'react';

import styled from 'styled-components';

import arrDown from '../../Assets/Icons/arr_down.png';
import arrUp from '../../Assets/Icons/arr_up.png';


function SelectBox({name, categoryOption, width}){
    const [focusBox, setFocusBox] = useState(false);
    const [focusItem, setFocusItem] = useState(null);

    const handleFocusTitle = (e) => {
        setFocusItem(e.target.innerText);
    }

    const handleFocusBox = () => {
        setFocusBox(!focusBox);
    }

    return(
        <SelectBoxWrapperStyled width={width}>
            <SelectBoxStyled onClick={handleFocusBox}>
                <BoxTitle className={focusItem ? "selected" : null}>{focusItem ? focusItem : name}</BoxTitle>
                <BoxIcon src={focusBox ? arrUp : arrDown}></BoxIcon>
            </SelectBoxStyled>
            <OptionBoxStyled className={focusBox ? null : "hide"}>
                {categoryOption.map((option) => (
                    <ListStyled key={option} onClick={handleFocusTitle}>{option}</ListStyled>
                ))}
            </OptionBoxStyled>
        </SelectBoxWrapperStyled>
    )
}

export default SelectBox;

const SelectBoxWrapperStyled = styled.div`
    position: relative;
    width: ${(props) => props.width || '146px'};
`


const SelectBoxStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 16px;
    background-color: ${Colors.Bgwhite};
    border: 1px solid ${Colors.Gray2};
    border-radius: 16px;
    box-sizing: border-box;
    cursor:pointer;
`

const BoxTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${Colors.Gray3};
    &.selected{
        color: ${Colors.Gray4};
    }
`

const BoxIcon = styled.img`
    width: 20px;
    height: 22px;
`

const OptionBoxStyled = styled.ul`
    position: absolute;
    top:64px;
    left:0;
    width: ${(props) => props.width || '100%'};
    padding: 8px 16px 8px;
    background: ${Colors.Bgwhite};
    box-sizing: border-box;
    border-radius: 16px;
    color: ${Colors.Gray4};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);

    &.hide{
        display:none;
    }
`

const ListStyled = styled.li`
    width: 100%;
    line-height:40px;
    cursor:pointer;
`