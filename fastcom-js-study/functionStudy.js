// 함수
// 함수란 - 특정 코드를 하나의 명령어로
// 파라미터란 - 넣는 값을 파라미터라고 한다.
// 인수란 - 파라미터 값을 받는 것

function hello(name) {
  console.log("Hello, " + name + "!");
}
hello("minjun");

function hello2(name) {
  console.log(`Hello ${name}`);
}
hello2("choi");

function hello3(name) {
  return `Hello ${name}`;
  // 어떤 값을 함수에서 반환 할려면 return 하면 된다.
  // 함수에선 return이 사용되는 순간 종료 된다. 밑에 조건문을 걸지 않는 이상 선언이 될수 없다.
}
const result = hello3("Minjun~~~");
console.log(result);

// 함수로 학점 나누기
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  }
  // 이런씩으로 늘리며 됨
}
const grade = getGrade(100);

console.log(grade);

// arrow 함수
// let이나 const로 시작
const add = (a, b) => {
  return a + b;
};
const sum = add(1, 2);
console.log(sum);

const hello4 = (name) => {
  console.log(`Hello ${name}`);
};
hello4("KKK");
