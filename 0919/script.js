let user = {
  name : 'hong',
  age : 20
};

user.hello = function(){
  console.log('hello');
}; // 객체 안에 함수를 넣어줌 ->메서드

user.hello();

function hi(){
  console.log('hi');
};

user.hello = hi;
user.hello();

user = {
  name : 'hong',
 msg(){
  console.log(this.name)
  }
};

user.msg();

let kim = user;
user = null;

kim.msg();


kim = {
  name : 'kim',
  age : 20,
}

let park = {
  name : 'park',
  age : 30,
}

function himsg(){
  console.log(this.name + '님 안녕하세요')
}

kim.fn = himsg;
park.fn = himsg;

kim.fn();
park.fn();

// new, 생성자
// 함수명 첫글가가 대문자, 생성할때 new키워드로 생성
function creatUser(name, age){
  name;
  age;
  return creatUser;
}

function User(name, age){
  this.name = name;
  this.age = age;

  this.hi = function(){
    console.log(`${this.name} 안녕`)
  }
}

// DOM 
// JS는 HTML의 요구, 속성 추가, 수정, 삭제 가능
// CSS의 추가, 수정, 삭제 가능
// 이벤트 추가 수정 삭제

document.body.style.background = 'red';