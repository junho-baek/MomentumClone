const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");


function onLoginSubmit(event){

  event.preventDefault();
  const USERNAME = loginInput.value;
  console.log(event);
  console.log(USERNAME);
}


loginForm.addEventListener("submit", onLoginSubmit );