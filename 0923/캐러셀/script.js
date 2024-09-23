let boxNo = 1;

$('.next').on('click', ()=>{
  if(boxNo < 3){
    $('.carousel').css('transform', 'translateX(-' + boxNo +'00vw)');
    boxNo++;
  }  
})

// boxNo가 1일 경우 -> 이전 버튼 눌러도 아무일 안생겨야함
// boxNo가 2일 경우 -> 이전 버튼 누르면 000vW
// boxNo가 3일 경우 -> 이전 버튼 누르면 -100vW

$('.prev').on('click', ()=>{
  if(boxNo > 1){
    $('.carousel').css('transform', `translateX(-${boxNo-2}00vw)`)
    boxNo--;
  }
})

$('.btn').on('click', (e)=>{
  let no = +e.target.dataset.no; // 보통문자열임 -> 기호를 넣어주면 형변환됨
  // no = parseInt(no);
  $('.carousel').css('transform', 'translateX(-' + no +'00vw)');
  boxNo = no + 1;
})
