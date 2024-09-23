const box = document.querySelector('.box');

// box의 총 높이(scroll + 박스 크기)
const boxY= box.scrollHeight;

// box크기의 높이(보이는 박스의 크기)
const boxHeight = box.clientHeight;

console.log('box 총높이', boxY);
console.log('box 크기 높이', boxHeight);

// 스크롤 했을 때 크기
let isDisabled = true;
box.addEventListener('scroll', ()=>{
  let scroll = box.scrollTop;
  
  // 끝까지 내렸는지 확인 하는 방법(5~10px 정도의 여유주기, 이상인지 확인)
  if(isDisabled && scroll + boxHeight > boxY - 5){
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }
})

// 화면 높이
let windowY = window.innerHeight;

// body태그 높이
let bodyY = document.body.clientHeight;

//해당창에 이벤트 걸어주기
window.addEventListener('scroll', ()=>{
  let scrollY = window.scrollY;
  let status = scrollY /(bodyY - windowY) * 100;

  console.log(status);

  document.querySelector('.status-bar').style.width = `${status}%`;
})