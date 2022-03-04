const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");


function onLoginSubmit(event){

  event.preventDefault();
  const USERNAME = loginInput.value;
  console.log(event);
  console.log(USERNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit );


link.addEventListener("click", handleLinkClick);