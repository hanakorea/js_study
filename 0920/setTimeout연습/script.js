// 정해진 시간 뒤에 콜백함수가 실행됨
// setTimeout(콜백함수, 시간);

// 정해진 시간마다 콜백함수가 반복 실행됨
// setInterval(콜백함수, 시간);


let time = 5;
let interval = setInterval(()=>{
  time--; //1초뒤에 실행되야 됨
  document.querySelector('.time').innerHTML = time;
},1000);

setTimeout(()=>{
  document.querySelector('.alert').style.display = 'none';
  clearInterval(interval); // 계속 실행되는 interval 중지를 위해 -메모리 누수
},5000);

// 여러번 누르면 여러번 실행됨(눈에는 안보이지만)-문제점
document.querySelector('.btn').addEventListener('click', ()=>{

  setTimeout(() => {
    document.querySelectorAll('.alert')[1].style.display ='none';
  }, 5000);

})
