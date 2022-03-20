const clock = document.querySelector("h2#clock");
const h2Date = document.querySelector("h2#date");

function getDate(){
  const date2 = new Date();
  h2Date.innerText = `🗓${date2.getFullYear()}년 ${date2.getMonth() + 1}월 ${date2.getDate()}일`
}
function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");
  clock.innerText =`현재시각⏰: ${hours}시 ${min}분 ${sec}초`;
}
getDate();
getClock();
setInterval(getClock,1000);
setInterval(getDate,1000);
