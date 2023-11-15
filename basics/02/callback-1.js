// '주문 접수' 3초 후 '완료' 메시지 표시하기   (결과 비교: 02\results\callback-1.js)

const order = (coffee, callback) => {
  console.log(`${coffee} 가 주문 접수 되었습니다.`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

const display = (result) => {
  console.log(`${result} 가 준비되었습니다.`);
};

order("아메리카노", display);
