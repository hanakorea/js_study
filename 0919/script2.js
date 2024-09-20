// console.log(document.body.childNodes)

// for(let i=0; i<document.body.childNodes.length;i++){
//   console.log(document.body.childNodes[i]);
// }

// console.log(document.body.parentNode);// html(부모)
// console.log(document.body.nextSibling); // 형제 테그
// console.log(document.body.previousSibling); //head(이전의 형제)

// //in 사용안함(of 사용)
// for(let node of document.body.childNodes){
//   console.log(node);
// }

// 문서에 중 해당 id를 찾아줌
const s = document.getElementById('start');
s.style.background = 'red';

document.getElementById('start').style.color = 'white'

const li = document.querySelectorAll('ul>li') //선택자
li[0].innerHTML = 'aaaa'
console.log(li[0]);
console.log(li[1]);

const end = document.querySelector('.end')
console.log(end);