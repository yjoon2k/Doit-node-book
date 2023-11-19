// 여러 단계의 디렉터리 삭제하기 - rm 함수 (결과 비교 파일 : 03\results\dir-4.js)

const fs = require("fs");

fs.rm("./test2", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("directory deleted");
  }
});
