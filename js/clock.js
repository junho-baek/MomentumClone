const clock = document.querySelector("h2#clock");
const h2Date = document.querySelector("h2#date");

function getDate(){
  const date2 = new Date();
  h2Date.innerText = `${date2.getFullYear()}. ${date2.getMonth() + 1}. ${date2.getDate()}`
}
function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");
  clock.innerText =`${hours}: ${min}: ${sec}`;
}
getDate();
getClock();
setInterval(getClock,1000);
setInterval(getDate,1000);
