// 각 원소 중 2로 나눴을 때 나머지가 0인 원소만 출력
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach((num) => {
  if (num % 2 === 0) console.log(num);
});
console.log("출력");

const numbers4Multi = numbers4.map((num) => {
  return num * 2;
});

console.log(numbers4Multi);
