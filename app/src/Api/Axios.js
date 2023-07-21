import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
  //연습용fakeAPI입니다. 후에 param추가예정
});

export default instance;
