import FakeEmploymentInfo from '../../../Api/FakeEmploymentInfo.json';
import Notice from '../../../Assets/Icons/Notice.png';
import { styled } from 'styled-components';
import { Colors } from '../../../Assets/Theme';

const CompanyDetail = ({ employmentInfo }) => {
  const { title, name, region, stack, text, duedate } = employmentInfo;

  return (
    <>
      <LeftContainerStyled>
        <UpperContainerStyled>
          <TitleWrapperStyled title={title}>{title}</TitleWrapperStyled>
          <DetailWrapperStyled>
            <CompanyNameStyled name={name}>{name}</CompanyNameStyled>
            <RegionStyled $region={region}>{region}</RegionStyled>
          </DetailWrapperStyled>
          <TagContainerStyled>
            {stack &&
              stack.map((tag, index) => (
                <TagStyled key={index}>{tag}</TagStyled>
              ))}
          </TagContainerStyled>
        </UpperContainerStyled>
        <MiddleContainerStyled>
          <TextStyled text={text}>{text}</TextStyled>
        </MiddleContainerStyled>
        <LowerContainerStyled>
          <DueDateContainerStyled>
            <DueDateTextStyled>마감일</DueDateTextStyled>
            <DueDateStyled duedate={duedate}>{duedate}</DueDateStyled>
          </DueDateContainerStyled>
          <NoticeContainerStyled>
            <NoticeMarkStyled src={Notice} alt="주의" />
            <NoticeTextContainerStyled>
              <NoticeStyled>
                해당 채용에 허위 사실이 있을 경우, 프리해요팀에 알려주세요!
              </NoticeStyled>
              <MailStyled>freeheayo.gamil.com</MailStyled>
            </NoticeTextContainerStyled>
          </NoticeContainerStyled>
        </LowerContainerStyled>
      </LeftContainerStyled>
    </>
  );
};

export default CompanyDetail;

const LeftContainerStyled = styled.section`
  display: flex;
  margin-top: 90px;
  margin-left: 190px;
  margin-right: 64px;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const UpperContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleWrapperStyled = styled.h3`
  color: ${Colors.Gray4};
  font-size: 28px;
  font-weight: 700;
  line-height: 41px;
`;

const DetailWrapperStyled = styled.p`
  margin-top: 8px;
  margin-bottom: 25px;
`;
const CompanyNameStyled = styled.span`
  color: ${Colors.Gray4};
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  margin-right: 12px;
`;
const RegionStyled = styled(CompanyNameStyled)`
  color: ${Colors.Gray3};
`;

const TagContainerStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 40px;
`;
const TagStyled = styled.div`
  display: flex;
  padding: 8px 12px;
  white-space: nowrap;
  background-color: ${Colors.Gray1};
  border: 1px solid transparent;
  border-radius: 16px;
  color: ${Colors.Gray4};
  font-size: 14px;
  line-height: 20px;
  font-weight: 300px;

  &:hover {
    background-color: ${Colors.Bgwhite};
    border-color: ${Colors.mainPurple};
    color: ${Colors.mainPurple};
    font-weight: 400px;
    cursor: pointer;
  }
`;

const MiddleContainerStyled = styled.section`
  padding-top: 36px;
  padding-bottom: 53px;
  border-top: 1px solid ${Colors.Gray2};
  border-bottom: 1px solid ${Colors.Gray2};
  width: 636px;
`;

const TextStyled = styled.p`
  color: ${Colors.Gray4};
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
`;

const LowerContainerStyled = styled.section`
  margin-top: 40px;
`;

const DueDateContainerStyled = styled.div`
  margin-bottom: 41px;
`;
const DueDateTextStyled = styled.span`
  color: ${Colors.Gray3};
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;
const DueDateStyled = styled(DueDateTextStyled)`
  color: ${Colors.Gray4};
  font-weight: 500;
  margin-left: 16px;
`;

const NoticeContainerStyled = styled.section`
  display: flex;
  flex-direction: row;
  width: 636px;
  height: 90px;
  border-radius: 16px;
  background: ${Colors.Gray1};
  margin-bottom: 56px;
`;
const NoticeMarkStyled = styled.img`
  width: 24px;
  height: 24px;
  margin: 36px 24px;
`;
const NoticeTextContainerStyled = styled.div`
  margin: 28px 0;
  align-items: center;
`;
const NoticeStyled = styled.div`
  color: ${Colors.Gray4};
  font-size: 13px;
  font-weight: 700;
  line-height: 19px;
`;
const MailStyled = styled(NoticeStyled)`
  margin-top: 4px;
  font-weight: 400;
`;
