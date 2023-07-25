import styled from 'styled-components';
import { Colors } from '../../Assets/Theme';

function TextArea({
  title,
  subtitle,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  className,
  errorMessage,
  height
}) {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      <SubtitleStyled className={className}>{subtitle}</SubtitleStyled>
      <TextareaStyled
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        height={height}
      >
        {value}
      </TextareaStyled>
      <ErrorStyled className={className}>{errorMessage}</ErrorStyled>
    </>
  );
}

export default TextArea;

const TitleStyled = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: ${Colors.Gray4};
`;
const SubtitleStyled = styled.p`
  margin: 4px 0 4px;
  font-size: 13px;
  font-weight: 400;
  &.hide {
    display: none;
  }
`;

const TextareaStyled = styled.textarea`
  width: ${(props) => props.width || '400px'};
  height: ${(props) => props.height || '56px'};
  padding: 16px;
  margin: 8px 0 0;
  border: 1px solid ${Colors.Gray2};
  border-radius: 16px;
  box-sizing: border-box;
  background-color: ${Colors.Bgwhite};
  color: ${Colors.Gray4};
  font-size: 16px;
  line-height: 24px;
  resize: none;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  &::placeholder {
    color: ${Colors.Gray2};
  }
`;

const ErrorStyled = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: ${Colors.Error};
  line-height: 18px;
  &.hide {
    display: none;
  }
`;
