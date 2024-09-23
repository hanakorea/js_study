document.querySelector('.get-btn').addEventListener('click', ()=>{
  const  xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
  xhr.setRequestHeader('content-type', 'application/json') // 보낼 내용에 대한 정보
  
  xhr.send();
  
  // 응답이 왔을때 처리 부분(응답 콜백 함수)
  xhr.onload = () =>{
    if(xhr.status === 200){
      const response = JSON.parse(xhr.response);
      console.log(response);
    }else{
      console.log(xhr.status);
    }
  }
  
})

document.querySelector('.put-btn').addEventListener('click', ()=>{
  const  xhr = new XMLHttpRequest();
  xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1')
 // UTF 8 유니코드 8
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8")
 let data = {
  title : 'abc',
  body : 'kkk',
  userId : 1,
 };

 xhr.send(JSON.stringify(data));

 xhr.onload = () =>{
  if(xhr.status === 200){
    const response = JSON.parse(xhr.response);
    console.log(response);
  }else{
    console.log(xhr.status);
  }
 }

})

// Promise 방식
// 요즘 사용하는 방식(비동기통신)
document.querySelector('.fetch').addEventListener('click',()=>{

  fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then((response)=>{
    return response.json(); // 응답데이터를 json형식> 그리고 쓸수있는데이터로 변경
   }).then((data)=>{
    console.log(data);
   }).catch((error)=>{
    console.log(error);
   })
})

let data = {
  title : 'abc',
  body : 'kkk',
  userId : 1,
 };



document.querySelector('.fetch2').addEventListener('click',()=>{
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'post', // 요청방식
    body : JSON.stringify(data), // 보낼 데이터
    headers : {
      "content-type" : "application/json; charset=utf-8", 
      // header 여러개 object형태로 추가 가능 
    }
  }).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data);
  }).catch((error) =>{
    console.log(error);
  })

})

document.querySelector('.jq').addEventListener('click', ()=>{
  $.ajax({
    url : 'https://jsonplaceholder.typicode.com/posts/1',
    type : 'get',
    success : function(response){
      console.log(response);
    },
    error : function(error){
      console.log(error);
    }
  })
})