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


// https://developer.mozilla.org/ko/docs/Web/API/HTMLElement

const H1TITLE = document.querySelector(".hello:first-child h1");

//console.dir(H1TITLE);

//html요소의 속성을 바꿀 수 있다.
H1TITLE.style.color = "black"

function handleTitleClick() {
  const CURRENTCOLOR = H1TITLE.style.color;
  if(CURRENTCOLOR === "black"||CURRENTCOLOR === "blue"){
    newColor = "red";
    H1TITLE.innerText = "빨간색! 다시 누르면 또 바껴!!🐵";
  }else if(CURRENTCOLOR === "red"){
    newColor = "pink";
    H1TITLE.innerText = "핑크색! 다시 누르면 또 바껴!!👻👻";
  }else{
    newColor = "blue";
    H1TITLE.innerText = "파란색! 다시 누르면 또 바껴!!🤩";
  }

  H1TITLE.style.color = newColor
  console.log(H1TITLE.style.color);
}

/*
function handleMouseEnter() {
  H1TITLE.innerText = "Mouse is Here!"  ;
}

function handleMouseLeave() {
  H1TITLE.innerText = "Mouse is Gone ㅠㅠ";
}

function handleWindowResize(){
  document.body.style.backgroundColor = "pink";
  H1TITLE.innerText = "너가 좋아하는 색 ~!!😎"
}

function handleWindowCopy() {
  alert("Hey Copier!!!!")
}

function handleWindowOffline() {
  alert("🤪다시켜봐!!🤪");
}

function handleWindowOnline() {
  alert("😎굳 이제 끝!😎")
}
*/

//함수를 넣을 때 괄호는 넣으면 안됌. 왜냐면 함수만 넘겨주면, 클릭했을 때, 괄호가 부여되는 방식이라 생각하면 편함

H1TITLE.addEventListener("click", handleTitleClick);
//TITLE.onclick = handleTitleClick; 이것도 위의 함수와 동일함
//addEventListener 함수가 더 좋은 이유는 .removeEventListener 함수를 쓸 수 있어서!!

//H1TITLE.addEventListener("mouseenter", handleMouseEnter);
//H1TITLE.addEventListener("mouseleave", handleMouseLeave);

//window.addEventListener("resize", handleWindowResize);
//window.addEventListener("copy", handleWindowCopy);

//window.addEventListener("offline", handleWindowOffline);
//window.addEventListener("online", handleWindowOnline);