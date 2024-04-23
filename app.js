const LOTTO_COUNT = 7; // 로또의 추출 공 개수
const MAX_NUM = 45; // 로또의 최대 번호
function getLottoNumbers() {
  // 로또 추출 함수
  let lottoNumbers = []; // 빈 배열 선언
  while (lottoNumbers.length < LOTTO_COUNT) {
    // 7개를 추출할 때까지 반복
    let random = Math.floor(Math.random() * MAX_NUM) + 1; // 1~45 중 임의의 수를 선택
    if (!lottoNumbers.includes(random)) {
      // 뽑았던 수가 아니라면
      lottoNumbers.push(random); // 추가
    }
  }
  return lottoNumbers;
}
// 회차를 조절하기 위한 코드
const title = document.getElementById("title"); // title 부분을 선택
let times = 1116; // 현재 회차
title.innerHTML = `로또 6/45 <span>제${times}회</span>`; // 추가

// 날짜를 얻는 코드
const date = document.getElementById("date"); // date 부분을 선택
let today = new Date(); // 날짜 구하기
date.innerHTML += `<span>${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()} 추첨</span>`; // 연, 월, 일 추가

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("btn"); // 버튼 선택
const result = document.getElementById("result"); // result 부분 선택
btn.addEventListener("click", function () {
  // 클릭 이벤트 발생 시 실행할 함수
  result.innerHTML = ""; // 초기화 후 시작
  let lottoNumbers = getLottoNumbers(); // 로또 번호 선택
  for (let i = 0; i < lottoNumbers.length; i++) {
    // 7번 반복
    setTimeout(() => {
      // 공을 하나씩 보여주기 위한 시간 설정 함수
      let color; // 색 지정 및 클래스 추가 변수
      let colorNum = parseInt(lottoNumbers[i] / 10); // 10의 자리에 각각 어울리는 수를 배정
      // 색상을 주기 위한 분기
      if (colorNum == 0) {
        color = "bg-y"; // 0~9는 노란공
      } else if (colorNum == 1) {
        color = "bg-r"; // 10~11은 빨간공
      } else if (colorNum == 2) {
        color = "bg-g"; // 20~29은 회색공
      } else if (colorNum == 3) {
        color = "bg-b"; // 30~39는 파란공
      } else {
        color = "bg-grn"; // 40~45는 초록공
      }
      result.innerHTML += `<div class="ball ${color}">${lottoNumbers[i]}</div>`; // <div>태그를 ball 클래스와 색상 클래스를 지정하여 추가한다.
    }, 500 * i);
  }
});
