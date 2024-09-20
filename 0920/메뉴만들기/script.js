const hamBtn = document.querySelector('.navbar-toggler');

//toggle 탈부착 가능
hamBtn.addEventListener('click', ()=>{
  // js코드
  // document.querySelector('.list-group').classList.toggle('show');

  // jQuery 문법
  $('.list-group').toggleClass('show')
})