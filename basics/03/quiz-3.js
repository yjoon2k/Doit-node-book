// 현재 폴더(03 폴더)에 있는 파일 중에서 확장자가 .txt인 파일의 개수를 구하는 코드를 작성하세요.

const fs = require("fs");
const path = require("path");

fs.readdir("./", (err, files) => {
  if (err) {
    console.lof(err);
  } else {
    let count = 0;
    files.forEach((file) => {
      if (path.extname(file) === ".txt") {
        count++;
      }
    });
    console.log(`.txt 확장자를 가진 파일의 갯수 : ${count}`);
  }
});
