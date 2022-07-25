const greetingBox2 = document.getElementById("greeting-box2");
const mainFocusForm = document.getElementById("mainFocusForm");
const mainFocusFormInput = mainFocusForm.querySelector("input");

const mainFocusDiv = document.getElementById("mainFocusDiv");
const mainFocusCheck = document.getElementById("mainFocusCheck");
const mainFocusSpan = document.getElementById("mainFocusSpan");
const focusEdit = document.getElementById("focusEdit");

const MAINTHING_KEY = "mainfocus";
const CHECKED_KEY = "checked";

//
function showMainFocusDiv(event) {
  event.preventDefault();
  const spanText = mainFocusFormInput.value;
  greetingBox2.classList.add("hidden");
  mainFocusDiv.classList.toggle("hidden");

  localStorage.setItem(MAINTHING_KEY, spanText);
  writeMainFocus(spanText);
}

mainFocusForm.addEventListener("submit", showMainFocusDiv);

//mainfocus 작성
function writeMainFocus(thing) {
  mainFocusSpan.innerText = thing;
}
//check 작동
function checkMainThing() {
  if (mainFocusCheck.checked === true) {
    mainFocusSpan.classList.add("line-through");
    localStorage.setItem(CHECKED_KEY, "true");
  } else {
    mainFocusSpan.classList.remove("line-through");
    localStorage.setItem(CHECKED_KEY, "false");
  }
}
mainFocusCheck.addEventListener("click", checkMainThing);

//mainfocus가 로컬스토리지에 있는지 확인
function checkLocalMainFocus() {
  if (localStorage.getItem(MAINTHING_KEY) === null) {
    greetingBox2.classList.remove("hidden");
    mainFocusForm.addEventListener("submit", showMainFocusDiv);
  } else {
    greetingBox2.classList.add("hidden");
    if (localStorage.getItem(USERNAME_KEY) !== null) {
      mainFocusDiv.classList.remove("hidden");
    }

    writeMainFocus(localStorage.getItem(MAINTHING_KEY));
    checkCheked();
    checkMainThing();
  }
}
checkLocalMainFocus();

function checkCheked() {
  const mainFocusCheck = document.getElementById("mainFocusCheck");
  if (localStorage.getItem(CHECKED_KEY) === "true") {
    mainFocusCheck.checked = true;
  } else {
    mainFocusCheck.checked = false;
  }
}

function editMainFocus() {
  greetingBox2.classList.toggle("hidden");
  mainFocusDiv.classList.toggle("hidden");
  mainFocusFormInput.value = localStorage.getItem(MAINTHING_KEY);
  localStorage.removeItem(MAINTHING_KEY);
}
focusEdit.addEventListener("click", editMainFocus);

function showEditBtn() {
  focusEdit.classList.toggle("hidden");
  setTimeout(() => {
    focusEdit.classList.add("hidden");
  }, 2000);
}

mainFocusSpan.addEventListener("click", showEditBtn);
