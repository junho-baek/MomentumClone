const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");


const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){

  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  
  greetingFunction(username);
}

function greetingFunction(user) {
  
  greeting.innerText = `${user}님 오늘도 열심히 공부하세요!!😃😇`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit );

const savedUser = localStorage.getItem(USERNAME_KEY);

if(localStorage.getItem(USERNAME_KEY)=== null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit );
}else{
  greetingFunction(savedUser);
}


