// 여러 계층의 디렉터리 만들기 - mkdir 함수의 recursive 옵션 (결과 비교 파일 : 03\results\dir-2.js)

const fs = require("fs");

if (fs.existsSync("./test2/test3/test4")) {
  console.log("Directory already exists");
} else {
  fs.mkdirSync("./test2/test3/test4", { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory created");
  });
}
