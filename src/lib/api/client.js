import axios from 'axios';

// 이렇게 axios 인스턴스를 만들면 나중에 API 클라이언트에 공통된 설정을 쉽게 넣어 줄 수 있습니다. /gyuo/2021-09-22
// 프록시 라는 기능을 사용하여 개발 서버로 요청하는 API들을 우리가 프록시로 정해 둔 서버로 그대로 전달해 줍니다./gyuo/2021-09-22
// package.json 하단 파일을 수정 했습니다. "proxy": "http://localhost:4000/" /gyuo/2021-09-22
const client = axios.create();

/*
 글로벌 설정 예시:
 // API 주소를 다른 곳으로 사용함
 client.defaults.baseURL = 'https://external-api-server.com/'

 // 헤더 설정
 client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

 // 인터셉터 설정
 axios.intercepter.response.use(＼response => {
     // 요청 성공 시 특정 작업 수행
     return response;
 })
*/

export default client;
