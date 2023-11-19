// 03 폴더에 mine 폴더가 있는지 확인한 후, 없다면 mine 폴더를 새로 만드는 코드를 작성하세요.

const fs = require("fs");

if (fs.existsSync("./mine")) {
  console.log("mine 폴더가 이미 존재합니다");
} else {
  fs.mkdirSync("./mine", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mine 폴더를 생성했습니다");
    }
  });
}
