// if 조건문의 기본 구조

// 여려줄 주석 : /* */

/* 
if(조건식){
  // 조건식이 참이면 실행되는 코드 영역
}
*/
if (5 > 1) {
  console.log("5는 1보다 크다");
}

/* if ~ else if 조건문 기본 구조
if (조건식) {
} else if(조건식') {
  조건식' 는 조건식이 거짓(false)이라면 평가 된다
} else if(조건식'') {
  조건식'' 는 조건식'가 거짓(false)이라면 평가 된다
}
*/
if (5 > 10) {
  console.log("5는 10보다 크다");
} else if (5 > 7) {
  console.log("5는 7보다 크다");
} else if (5 > 5) {
  console.log("5는 5보다 크다");
} else if (5 > 3) {
  console.log("5는 3보다 크다");
}

/* if ~ else if ~ else 조건문 기본 구조
if (조건식) {
} eles if (조건식') {
} else {
  else는 조건식이 없다.
  대신 위의 모든 조건식이 거짓(false)이면 실행
  else 아래에는 또 다른 else if나 else가 존재할 수 없다
} 
---
if (조건식) {
} else {
  조건식이 거짓이면 실행
}
*/

// 변수 number를 선언하고, 숫자 1을 할당
let number = 1;

// number 가 0보다 크면 "양수" 를 콘솔에 출력
// number 가 0보다 큰게 아니라면 "음수" 를 콘솔에 출력
// if ~ else 문 구현

// number가 0 보다 크면
if (number > 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// 변수 number2 를 선언하고, 숫자 0을 할당

// 만약에 변수 number2 가 0 보다 크면, "양수" 출력
// 그런데 만약에 변수 number2 가 0 보다 작으면, "음수" 출력
// 그런데 모두 아니라면, "0" 출력

let number2 = 1;
// 조건문 코드 작성
if (number2 > 0) {
  console.log("양수");
} else if (number2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}

// 중첩 조건문
// 조건문 내부에 조건문을 중첩하는 조건문

// 만약에 숫자가 10보다 크고, 짝수이고, 5의 배수이고, 소수이고, -3을 했을 때 ~~
// 조건식이 복잡할 때 사용을

// 변수 age를 선언하고, 숫자 25를 할당한다
// 변수 isStudent를 선언하고, 불리언 true를 할당한다

// 1. 변수 age가 20 이상이라면
// 1-1. 변수 isStudent가 true라면
// 1-2. 변수 isStudent가 true가 아니라면

// 2. 변수 age가 20 이상이 아니라면
// 2-1. 변수 isStudent가 true라면
// 2-2. 변수 isStudent가 true가 아니라면

let age = 25;
let isStudent = true;

if (age >= 20) {
  if (isStudent === true) {
  } else {
  }
} else {
  if (isStudent === true) {
  } else {
  }
}

// 변수 score를 선언하고, 숫자 75를 할당한다

// 만약 변수 socre가 90 이상이라면

// 그런데 만약 변수 score가 90 미만 그리고(&&), score가 80 이상이라면

// 그런데 만약 변수 score가 80 미만 그리고(&&), score가 70 이상이라면

// 그런데 만약 변수 score가 70 미만 그리고(&&), score가 60 이상이라면

// 그런데 모두 아니라면

if (90 >= 90) {
  // A
} else if (90 >= 80) {
  // B
} else if (90 >= 70) {
  // C
}

// ---

if (90 >= 90) {
  // A
}

// ---

if (90 >= 80) {
  // B
}

//---

if (90 >= 70) {
  // C
}

// ---

// 물건을 구입하는데
// 할인 규칙이 2개가 있어요. 그런데 규칙이 중복 가능해요
// 첫 번째 : 장바구니 할인 쿠폰
// 두 번째 : 회원 등급 쿠폰

const isBascketCoupon = true; // 장바구니 할인 쿠폰 O
const isUserCoupon = true; // 회원 등급 쿠폰 O

// 잘못된 조건문
if (isBascketCoupon === true) {
  //  장바구니 할인 적용
} else if (isUserCoupon === true) {
  // 회원등급 할인 적용
}

// 옳은 조건문
if (isBascketCoupon === true) {
  //  장바구니 할인 적용
}
if (isUserCoupon === true) {
  // 회원등급 할인 적용
}

// 삼항 연산자 표현식
// 표현식 : 데이터를 생성하는 코드

// 조건식은 무조건 참(true) / 거짓(false) 데이터 중 하나를 생성
// 조건식 ? 조건식 평가 결과가 참일 때 데이터 : 조건식 평가 결과가 거짓일 때 데이터
const message = 2 > 1 ? "2는 1보다 크다" : "2는 1보다 크지 않다";

// 사용자의 로그인 여부
let isLoggined = true;
const user = isLoggined === true ? "회원 사용자 화면" : "비 회원 사용자 화면";
