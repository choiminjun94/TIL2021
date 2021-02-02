// 객체 안에 함수 넣는 방법
const dog = {
  name: "멍멍이",
  sound: "캉캉",

  say() {
    console.log(this.sound);
    // this란 함수가 위치가 한 객체 즉 자기 자신이다.
  },
};

dog.say();
// arrow함수는 되지 않는다.

//Getter Setter
// 특정값을 바꾸려고 한거나 조회할려고 할때 원하는 코드를 실핼 할수 있다.

// Getter는 특저값을 조회할려고 할떄 사용
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행");
    //get함수는 어떤값을 반환해주어야 한다.
    return this.a + this.b;
  },
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
