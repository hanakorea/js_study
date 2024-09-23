const APIKEY = '362960042e0826fe7e0537c012b01506';
const nameSpan = document.querySelector('#weather span:first-child');
const tempSpan = document.querySelector('#weather span:last-child');


// 위치 정보를 가진 매개변수 받음
function  connectGeo(position){
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  console.log(lat, lon);

  const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=kr&units=metric`
  fetch(URL).then((response)=> response.json())
  .then((data)=>{
    const temp = data.main.temp;
    const name = data.name;
    const desc = data.weather[0].description;

    nameSpan.innerHTML = name;
    tempSpan.innerHTML = `${temp}도 ${desc}`;
  }).catch((error)=>{
    console.log(error);
  })
}

function errorGeo(){
  console.log('위치 연결 오류');
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);