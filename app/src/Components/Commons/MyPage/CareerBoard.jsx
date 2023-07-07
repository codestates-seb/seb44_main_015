import styled from 'styled-components';
import { Colors, Messages } from '../../../Assets/Theme';
import {
  BigCardStyled,
  NameWrapperStyled,
  ListWrapperStyled,
  BoxWrapperStyled,
  NumberStyled,
  InfoStyled,
} from './AppliedBoard';

const CareerBoard = () => {
  return (
    <BigCardStyled>
      <NameWrapperStyled>{Messages.appliedBoardTitle}</NameWrapperStyled>
      <ListWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>0</NumberStyled>
          <InfoStyled>{Messages.openTitle}</InfoStyled>
        </BoxWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>0</NumberStyled>
          <InfoStyled>{Messages.closedTitle}</InfoStyled>
        </BoxWrapperStyled>
        <BoxWrapperStyled>
          <NumberStyled>0</NumberStyled>
          <InfoStyled>{Messages.selectedTitle}</InfoStyled>
        </BoxWrapperStyled>
      </ListWrapperStyled>
    </BigCardStyled>
  );
};

export default CareerBoard;
