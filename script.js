const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
  const VALUE = loginInput.value;
  console.log(loginInput.value);
}


loginButton.addEventListener("click", onLoginBtnClick );