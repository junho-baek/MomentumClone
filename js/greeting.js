const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const greetingBox = document.querySelector("#greeting-box");
const userEdit = document.getElementById("userEdit");

const toDoForm1 = document.querySelector("#todo-form");
const toDoInput1 = toDoForm1.querySelector("input");
const toDoList1 = document.getElementById("todo-list");
const toDobox1 = document.querySelector("#todo-box");

const clockBox = document.querySelector("#clock-box");

const logoImg = document.querySelector("#logo");

const link = document.querySelector("a");
const todoBtn = document.getElementById("todoBtn");
const quoteBox = document.getElementById("quote");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoForm1.classList.remove(HIDDEN_CLASSNAME);
  toDoInput1.classList.remove(HIDDEN_CLASSNAME);
  quoteBox.classList.remove(HIDDEN_CLASSNAME);
  toDoList1.classList.remove(HIDDEN_CLASSNAME);
  // toDobox1.classList.remove(HIDDEN_CLASSNAME);
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
  todoBtn.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  clockBox.classList.remove(HIDDEN_CLASSNAME);
  logoImg.classList.add(HIDDEN_CLASSNAME);
  // userEdit.classList.toggle(HIDDEN_CLASSNAME);
  greetingFunction(username);
}

function greetingFunction(user) {
  const date = new Date();
  if (date.getHours() >= 18 || date.getHours() < 5) {
    const a = "Good evening";
    greeting.innerText = `${a}, ${user}.`;
  } else if (date.getHours() >= 12) {
    const a = "Good afternoon";
    greeting.innerText = `${a}, ${user}.`;
  } else {
    const a = "Good morning";
    greeting.innerText = `${a}, ${user}.`;
  }

  greeting.classList.remove(HIDDEN_CLASSNAME);
}
function editUser() {
  greeting.classList.toggle(HIDDEN_CLASSNAME);

  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginInput.value = localStorage.getItem(USERNAME_KEY);
  localStorage.removeItem(USERNAME_KEY);
  greetingBox.classList.toggle(HIDDEN_CLASSNAME);
  userEdit.classList.toggle(HIDDEN_CLASSNAME);
}
userEdit.addEventListener("click", editUser);

function showEditBtn() {
  userEdit.classList.toggle("hidden");
  setTimeout(() => {
    userEdit.classList.add("hidden");
  }, 2000);
}

greeting.addEventListener("click", showEditBtn);

loginForm.addEventListener("submit", onLoginSubmit);

const savedUser = localStorage.getItem(USERNAME_KEY);

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  mainFocusDiv.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greetingFunction(savedUser);
  toDoForm1.classList.remove(HIDDEN_CLASSNAME);
  toDoInput1.classList.remove(HIDDEN_CLASSNAME);
  toDoList1.classList.remove(HIDDEN_CLASSNAME);
  // toDobox1.classList.remove(HIDDEN_CLASSNAME);
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
  quoteBox.classList.remove(HIDDEN_CLASSNAME);
  clockBox.classList.remove(HIDDEN_CLASSNAME);
  logoImg.classList.add(HIDDEN_CLASSNAME);
  todoBtn.classList.remove(HIDDEN_CLASSNAME);
}
