//#3.1에서 배운 내용

//const TITLE = document.getElementById("title");

//console.dir(TITLE);

//TITLE.innerText = "Got you!";

//console.log(TITLE.id);
//console.log(TITLE.className);


//#3.2

//클래스네임으로 불러오기
//const HELLOS = document.getElementsByClassName("hello");

//console.log(HELLOS);

//태그네임으로 불러오기
//const TITLE = document.getElementsByTagName("h1");

//Css 방식으로 불러오기(굳, 가장 위의 하나의 요소만 가져옴)
//const TITLE = document.querySelector(".hello h1")

//console.log(TITLE);

//array로 전부 불러오고 싶으면
//querySelectorAll

const TITLE = document.querySelector(".hello:first-child h1");

console.dir(TITLE);

//html요소의 속성을 바꿀 수 있다.
//TITLE.style.color = "blue"

function handleTitleClick() {
  console.log("title was cliked!!");
  TITLE.style.color = "blue";
  TITLE.textContent = "click!!"
}

function handleMouseEnter() {
  TITLE.innerText = "Mouse is Here!"  
}

function handleMouseLeave() {
  TITLE.innerText = "Mouse is Gone ㅠㅠ"  
}

//함수를 넣을 때 괄호는 넣으면 안됌. 왜냐면 함수만 넘겨주면, 클릭했을 때, 괄호가 부여되는 방식이라 생각하면 편함
TITLE.addEventListener("click", handleTitleClick);
TITLE.addEventListener("mouseenter", handleMouseEnter);
TITLE.addEventListener("mouseleave", handleMouseLeave);
