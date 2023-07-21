import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { Messages } from '../Assets/Theme';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export function duedate(deadline) {
  const now = dayjs();
  const lastday = dayjs(deadline);
  const diffday = now.diff(lastday, 'day');

  if (diffday < 0) {
    return `D${diffday}`;
  } else {
    return `${Messages.closedTitle}`;
  }
}

//사용법
//사용할 컴포넌트에 위 함수를 import하시고 duedate(마감일)하시면됩니다.
//import { duedate } from '../../Utils/Dayjs';
//<NoLineTag
//name={duedate(deadline)}   //<------ D-500등으로 표시됨  //지난일이면 지난 채용으로 표시
//></NoLineTag>
