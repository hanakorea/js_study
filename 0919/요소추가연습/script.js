// 과일정보가 들어있는 list
//실제로는 DB에서 해당 정보를 빼와서 처리
let fruits=[
  {name: 'apple', memo : '빨간색'},
  {name: 'mango', memo : '달달함'},
  {name: 'melon', memo : '맛있다'},
  {name:'strawberry', memo : '딸기'},
  {name : 'watermelon', memo : '수박'}
];

// // document.querySelectorAll('.card-img-top')[0].setAtrribute(속성명, 속성값)
// for(let i = 0; i<fruits.length; i++){
//   document.querySelectorAll('.card-title')[i].innerHTML = fruits[i].name;
//   document.querySelectorAll('.card-text')[i].innerHTML = fruits[i].memo;
//   document.querySelectorAll('.card-img-top')[i].setAttribute('src', `./img/${fruits[i].name}.jpg`);
// }

// // 

// for(let fruit in fruits){
// }

// fruits.forEach((f, i) => {
//   document.querySelectorAll('.card-title')[i].innerHTML = f.name;
//   document.querySelectorAll('.card-text')[i].innerHTML = f.memo;
//   document.querySelectorAll('.card-img-top')[i].setAttribute('src', `./img/${fruits[i].name}.jpg`);
// })

fruits.forEach((fruit)=>{
  let item =`   <div class="col">
              <div class="card" style="width: 18rem;">
                <img src="./img/${fruit.name}.jpg" class="card-img-top">
                <div class="card-body">
      
                  <h5 class="card-title">${fruit.name}</h5>
                  <p class="card-text">${fruit.memo}</p>
                  <button class="btn btn-primary cart">담기</button>
                </div>
              </div>
               </div>`;
document.querySelector('.row').insertAdjacentHTML('beforeend', item);
//jQuery문법
// $('.row').append(item);
})

//로컬 스토리지
let arr = [1,2,3,4,5];
// 배열 arr을 구조를 고정한 상태로 문자열로 변환
// 배열 arr을 json형식으로 변환
let arr_json = JSON.stringify(arr);
// 변환 arr을 로컬스토리지에 저장
// localStorage.setItem(키, 벨류)
localStorage.setItem('arr', arr_json);

// 로컬스토리지에서 arr을 빼옴(json)
let arr_local = localStorage.getItem('arr');
// json인 arr데이터를 js형식에 맞게 변환
// 문자열-> 배열로 전환
let arr_parse = JSON.parse(arr_local);
console.log(arr_parse);
console.log(arr_parse[0]);


// 버튼에 이벤트를 심는 방법 (이벤트리스너)
// document.querySelectorAll('.cart')[0].addEventListener(이벤트, 콜백함수)
// document.querySelectorAll('.cart')[0].addEventListener('click', ()=>{
//   alert('클릭');
// })

  //jQuert 문법
  $('.cart').on('click',(e) => {
  //  let name = e.target.previousElementSibling.previousElementSibling.innerHTML;
   
   // jQuery
   let name = $(e.target).siblings('h5').text();

  //  let names = [name]; // 배열로 변환
  //  let name_json = JSON.stringify(names);// json으로 변환

  // localstorage에 배열식으로 저장하기위해 json형식 사용
  
  if(localStorage.getItem('name') != null){
    // 로컬스토리지에 있는걸 빼와야 함
    let temp = localStorage.getItem('name');
    temp = JSON.parse(temp); 

    let isHave  = false; // 장바구니에 있나 없나를 저장하는 변수
    let index;  // 장바구니에 있으면 해당 인덱스를 저장하는 변수

    temp.forEach((data, i) =>{
      if(data.name === name){
        isHave = true;
        index = i;
      }
    })

    if(isHave){
      temp[index].cnt++;
    } else {
      temp.push({'name':name, 'cnt' : 1});
    }

    localStorage.setItem('name', JSON.stringify(temp));

  }else{
    localStorage.setItem('name', JSON.stringify([{'name': name, 'cnt': 1 }]));
  }

  })

  // value 명이 btn-remove인것을 클릭하면 
  // -> 장바구니를 비우겠습니까? 모달창 나오고
  // -> 확인 버튼 누르면 로컬스토리지가 삭제되도록 구현

  document.querySelector('.btn-remove').addEventListener('click',()=>{
    if(confirm('장바고니를 비우시겠습니까?')){
      localStorage.removeItem('name');
    }
  })