document.querySelector('.btn').addEventListener('mousedown',(e) => {
  console.log(e.button);

  if(e.ctrlKey){
    console.log('컨트롤 클릭')
  }

  if(e.altKey){
    console.log('알트 클릭')
  }

  if(e.shiftKey){
    console.log('쉬프트 클릭')
  }

  if(e.ctrlKey && e.shiftKey){
    console.log('컨트롤+쉬프트 클릭')
  }
})

// document.body.addEventListener('mousemove', (e)=>{
//   console.log('clientX', e.clientX);// 스크롤 포함한 페이지에서 좌표
//   console.log('clientY', e.clientY);
//   console.log('======================');
//   console.log('pageX', e.pageX); // 현재 페이지에서 좌표
//   console.log('pageY', e.pageY);
// })


// change : 변경(포커스를 잃은 후 실행)
// input : 변경될때 마다 실행
// copy : 복사할때
// paste : 붙여넣기 할때
// cut : 잘라내기 할때
document.querySelector('.username').addEventListener('input', ()=>{
  console.log('변경됨');
})