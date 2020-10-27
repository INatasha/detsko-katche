import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://detsko-katche.firebaseio.com/',
});

export default instance;
