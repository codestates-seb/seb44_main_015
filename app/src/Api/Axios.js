import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ec2-13-125-92-28.ap-northeast-2.compute.amazonaws.com:8080/',
});

export default instance;
