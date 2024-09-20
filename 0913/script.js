// console창에 뜨게 만들어 주는 명령어
console.log('hello');

// //변수(파이썬 처럼 자료형선언 없이 모두 사용가능 , let으로 선언) 
// let a = 10;

// //상수(대문자로 표시)
// const B = 30;

// let msg = "js";

// //문자사용시 '' "" ``
// console.log("hello" + msg)
// console.log('hello'+ msg)
// console.log(`hello`+ msg)
// console.log(`hello ${msg}`)

// //js는 산술연산 안전함, 
// //java나 python은 잘못 연산되면 에러와 프로그램 종료


// console.log(10/0);
// console.log(typeof Infinity)//특수 숫자 값

// console.log(10/'sfea');
// console.log(typeof(NaN))

// // java에서 null은 참조 대상이 없음/ js에서는 비어있다, 알 수 없음
// let i = null;
// // undifind : 할당하지 않음

// // 알림창
// // alert('aaa'); // 페이지에 띄워줌
// // console.log('alert실행 후')
// let j = prompt('프롬프트', 200); // 입력값을 받음(문자열로 인식)

// // Number(j) int로 형변환
// console.log(j)
// console.log(typeof j)

// console.log('=============')

// let b = confirm('예 아니오')
// console.log(b)

//자료형 변환
// String(11) : 문자로 변환
// Number('11') : 숫자로 변환
// console.log('11' + '2'); // 문자열로 결과나옴
// console.log('11' - '2'); // 빼기 계산됨
// console.log(typeof('11' - '2'));
// let n;
// console.log(Number('sefefs')); //NaN 특수 숫자로 변환
// console.log(Number(n));
// console.log(Number(null)); // 없다는 의미로 0
// console.log(Number(true));
// console.log(Number(false));

// //Boolean(1) : 불린형 변환
// console.log(Boolean('sefefs')); // 내용 있으면 true
// console.log(Boolean('')); // 내용 없으면 false
// console.log(Boolean(null)); // 없다의미가지고 있는 것들은 false
// console.log(Boolean(undefined));  
// console.log(Boolean(NaN)); 

// //논리연산자 - && || !
// console.log(1 =='1'); // 타입 구분 없이 비교
// console.log(1 === '1'); // 타입 구분해서 비교(엄격버전)-권장

// console.log(1 !='1'); // 타입 구분 없이 비교
// console.log(1 !== '1'); // 타입 구분해서 비교(엄격버전)-권장

// //조건문
// let age = Number(prompt('나이입력'));
// if(age >= 20){
//   console.log('성인');
// }else{
//   console.log('청소년');
// }

// let result = age >=20? '성인' : '청소년';

// switch ~ case문
// switch(a){
//   case 1:
//     break;
//   case 2:
//     break;
//   default:    
// }

// 반복문
// while(조건식){
//   반복실행할코드
// }

// for(초기값; 조건식; 증감식){
//   반복실행할코드
// }

for(let i = 0; i<=10; i++){
  console.log(i)
}