const regex = /\d{3}-\d{4}-\d{4}/;  //전화번호 받기

let tel = '010-1234-4567';
let result = regex.test(tel); // 설정된 규칙에 맞는지 확인
console.log(result);

tel= '12-34-56';
result = regex.test(tel);
console.log(result);

const regex2 = /abc/;
// 정규식.test("검사할데이터")
// 정규식에 만족하면 true, 아니면 false
result = regex2.test("가나다 abc 1234")
console.log(result);

let text = '가나다 abc 1234';
result = text.match(regex2); // 정규식에 만족하는것을 배열 형태로 
console.log(result);

result = text.replace(regex2, "x"); //정규식을 넣어서도 가능 
console.log(result);

// flag(플래그) - 정규식 설정시 옵션
// i : 대소문자 구분안함
// g(global) : 문자열 전체에서 검색
// m : 행이 변경되도 검색가능

text = 'abcabc';

result = text.match(/a/);
console.log(result);


result = text.match(/a/g);
console.log(result);