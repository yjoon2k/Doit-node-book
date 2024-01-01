// 논블로킹 I/O   (결과 비교 파일 : 05\results\nonblocking.js)

const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log("코드 끝!");
