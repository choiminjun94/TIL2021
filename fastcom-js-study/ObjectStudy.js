//객체
// 어떤한 값을 선언하게 될때 하나의 이름에 여러종류의 값을 넣을 수 있게  해준다.

//No.1
const minjun = {
  name: "ChoiMinjun",
  age: 28,
  sex: "male",
  // 앞의 것을 Key라고 한다.
};

console.log(minjun);
console.log(minjun.name);
console.log(minjun.age);
console.log(minjun.sex);

//No.2
const cat1 = {
  name: "산이",
  kind: "삼색이",
  sex: "암컷",
};

const cat2 = {
  name: "메롱이",
  kind: "검은고양이",
  sex: "수컷",
};

function print(cat) {
  const text = `${cat.name}는 (${cat.kind}) 종이며 성별은 ${cat.sex} 입니다.`;
  console.log(text);
}
print(cat1);
print(cat2);

// 비구조화 할당 | 객체 구조 분해
// 객체에서 특정 값들을 추출하는 역할
//No.3
const cat1 = {
  name: "산이",
  kind: "삼색이",
  sex: "암컷",
};

const cat2 = {
  name: "메롱이",
  kind: "검은고양이",
  sex: "수컷",
};

function print(cat) {
  const { name, kind, sex } = cat;
  //이부분이 비구조할당이다.
  const text = `${name}는 (${kind}) 종이며 성별은 ${sex} 입니다.`;
  console.log(text);
}
print(cat1);
print(cat2);

// 파라미터 쓰는 단계부터 비구조 할당
// No.4
const cat1 = {
  name: "산이",
  kind: "삼색이",
  sex: "암컷",
};

const cat2 = {
  name: "메롱이",
  kind: "검은고양이",
  sex: "수컷",
};

function print({ name, kind, sex }) {
  //이부분이 비구조할당이다.
  const text = `${name}는 (${kind}) 종이며 성별은 ${sex} 입니다.`;
  console.log(text);
}
print(cat1);
print(cat2);
