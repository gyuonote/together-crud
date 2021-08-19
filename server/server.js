const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
/* 코드해석
{1번줄} node_modules에서 express라는 모듈을 활용한다는뜻

{2번줄} app 이라는 변수에 express 함수의 변환값을 저장. app변수로 REST End Point생성

{3번줄} process.env는 nodeJS에서 환경 변수를 가져올 떄 사용.
 환경변수 가 입력되지 않을시 port에 3000번을 지정하는코드

{5~9번줄} REST API 의 한가지 종류인 GET 리퀘스트를 정의하는부분.
app.get이라고 작성했기 떄문에 get요청으로 정의가 된다.
app.post 로 작성할 경우 post 요청으로 정의가 된다.
첫번쨰 파라미터는 URL 정의 ('/') 두번쨰 파라미터함수에는 요청 request, 응답 response
즉 res파라미터에 json 형태의 {success:true} 를 전송하는 코드

{11~13번줄} express 서버를 실행할 떄 필요한 포트 정의 및 실행시 callback함수를 받는다.
첫 번쨰 파라미터에는 3번 줄에 저장한 port 3000번을 적용하여 express 를 3000번 포트에 실행하라고
지정 하였고, 두번째 파마니터인 콜백 함수에서 express 서버 구축 성공 시 console.log 출력 */
