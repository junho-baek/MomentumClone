const clock = document.querySelector("h2#clock");
const clock12 = document.querySelector("h2#clock12");
// const h2Date = document.querySelector("h2#date");

// function getDate(){
//   const date2 = new Date();
//   h2Date.innerText = `${date2.getFullYear()}. ${date2.getMonth() + 1}. ${date2.getDate()}`
// }
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");

  const min = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${min}`;

  if (date.getHours() > 12) {
    const h12 = String(date.getHours() - 12).padStart(2, "0");

    clock12.innerText = `${h12}:${min}`;
  } else if (hours == "00") {
    const h12 = "12";

    clock12.innerText = `${h12}:${min}`;
  } else {
    const h12 = hours;

    clock12.innerText = `${h12}:${min}`;
  }
}
// getDate();
getClock();
setInterval(getClock, 1000);
// setInterval(getDate,1000);

clock.addEventListener("click", () => {
  clock.classList.toggle("hidden");
  clock12.classList.toggle("hidden");
});
clock12.addEventListener("click", () => {
  clock.classList.toggle("hidden");
  clock12.classList.toggle("hidden");
});
