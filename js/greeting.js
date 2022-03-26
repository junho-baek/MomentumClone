const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const greetingBox = document.querySelector("#greeting-box");

const toDoForm1 = document.querySelector("#todo-form");
const toDoInput1 = toDoForm1.querySelector("input");
const toDoList1 = document.getElementById("todo-list");
const toDobox1 = document.querySelector("#todo-box");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){

  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoForm1.classList.remove(HIDDEN_CLASSNAME);
  toDoInput1.classList.remove(HIDDEN_CLASSNAME);
  toDoList1.classList.remove(HIDDEN_CLASSNAME);
  toDobox1.classList.remove(HIDDEN_CLASSNAME);
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  
  greetingFunction(username);
}

function greetingFunction(user) {
  
  greeting.innerText = `Hello ${user}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit );

const savedUser = localStorage.getItem(USERNAME_KEY);

if(localStorage.getItem(USERNAME_KEY)=== null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit );
}else{
  greetingFunction(savedUser);
  toDoForm1.classList.remove(HIDDEN_CLASSNAME);
  toDoInput1.classList.remove(HIDDEN_CLASSNAME);
  toDoList1.classList.remove(HIDDEN_CLASSNAME);
  toDobox1.classList.remove(HIDDEN_CLASSNAME);
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
}


