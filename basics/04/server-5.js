// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "text/plain");

  if (method === "GET" && url === "/home") {
    res.statusCode = 200;
    res.end("HOME");
  } else if (method === "GET" && url === "/about") {
    res.statusCode = 200;
    res.end("ABOUT");
  } else {
    res.statusCode = 404;
    res.end("NOT FOUND");
  }
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});
