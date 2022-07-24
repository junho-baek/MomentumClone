const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoBox = document.querySelector("#todo-box");
const toDoList = document.getElementById("todo-list");

// const todoBtn1 = document.getElementById("todoBtn");
const xBtn = document.getElementById("xBtn");

function showtodobox() {
  todoBox.classList.toggle("hidden");
}

todoBtn.addEventListener("click", showtodobox);

xBtn.addEventListener("click", showtodobox);

const TODOS_KEY = "todos";
const COMPLETE_TODOS_KEY = "completTodos";

let toDos = [];

let completeDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function saveCompleteToDos() {
  localStorage.setItem("completTodos", JSON.stringify(completeDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((element) => element.id !== parseInt(li.id));
  console.log(li.id);
  completeDos = completeDos.filter((e) => e.id !== parseInt(li.id));

  saveToDos();
  saveCompleteToDos();
}
function completeToDo(event) {
  console.log(event.target.checked);
  const li = event.target.parentElement;
  // const span = li.querySelector("span");
  const form = li.querySelector("form");
  const input = form.querySelector("input");
  // const checkBox = li.querySelector("input");

  if (event.target.checked === true) {
    const completeTodo = input.value;
    const completeTodoObj = {
      text: completeTodo,
      id: parseInt(li.id)
    };
    // paintMiddleLine(completeTodoObj);
    console.log(li.id);
    completeDos.push(completeTodoObj);
    saveCompleteToDos();
    // span.classList.add("line-through");
    input.classList.add("line-through");
  } else {
    // span.classList.remove("line-through");
    input.classList.remove("line-through");
    completeDos = completeDos.filter(
      (element) => element.id !== parseInt(li.id)
    );
    saveCompleteToDos();
  }
}


function paintMiddleLine(comTodo) {
  const li = document.getElementById(comTodo.id);
  // const span = li.querySelector("span");
  const form = li.querySelector("form");
  const input = form.querySelector("input");
  const checkBox = li.querySelector("input");
  if ((checkBox.checked = true)) {
    input.classList.add("line-through");
  } else {
    input.classList.remove("line-through");
  }
}
function editTodos(event) {
  event.preventDefault();
  console.log(event);
  const li = event.target.parentElement  
  const form = li.querySelector("form");
  const input = form.querySelector("input");
  // input.disabled = true;
  input.readOnly = true;
  const checkBox = li.querySelector("input");
  console.log(toDos);
  let a = toDos.filter((element) => element.id === parseInt(li.id));
  let b = completeDos.filter((element) => element.id === parseInt(li.id));
  console.log(toDos);
  const completeTodo = input.value;
  const completeTodoObj = {
    text: completeTodo,
    id: parseInt(li.id)
  };
  toDos.splice(toDos.indexOf(a[0]), 1, completeTodoObj);
  if (checkBox.checked === true) {
    completeDos.splice(completeDos.indexOf(b[0]), 1, completeTodoObj);
    saveCompleteToDos();
  }

  saveToDos();

  
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.classList.add("flex", "h-6", "relative");
  li.id = newTodo.id;
  // const span = document.createElement("span");
  // span.innerText = newTodo.text;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", completeToDo);

  const form = document.createElement("form");
  const input = document.createElement("input");
  input.readOnly = true;
  input.value = newTodo.text;
  form.appendChild(input);

  const b =document.createElement("button");
  b.innerText = ""
  form.appendChild(b);



  
  input.addEventListener("blur", () => {
    // form.submit() 이거랑 다르다!!!!!!!!!!
    b.click()
    // form.submit();
  });

  // form.onblur = () => {
  //   // form.submit() 이거랑 다르다!!!!!!!!!!
  //   form.requestSubmit(); 이거 사파리에서 안되니까 쓰지마라잉
  // };
  form.addEventListener("submit", editTodos);
  // input.classList.add("line-through");
  // button.innerText = "x";
  const button = document.createElement("button");
  const select = document.createElement("div");
  select.classList.add(
    "flex",
    "flex-col",
    "absolute",
    "right-8",
    "border",
    "border-black",
    "bg-gray-100",
    "hidden",
    "mr-0.5",
    "p-2",
    "rounded-lg",
    "gap-1",
    "z-40"
  );
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("border-b");

  editBtn.addEventListener("click", () => {
    input.readOnly = false;
    // input.disabled = false;
    input.autofocus = true;
    input.focus();
    form.focus();
    button.blur();


  });
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  select.appendChild(editBtn);
  select.appendChild(deleteBtn);

  button.innerHTML =
    '<svg class="icon icon-ellipsis flex flex-col item-center justify-arund more-icon h-[20px] w-[20x] bg-gray-100/0 rounded-full p-[0.3rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg>';
  button.classList.add(
    "border",
    "border-[rgba(0,0,0,0)]",
    "focus:bg-gray-100/50",
    "flex",
    "item-center",
    "justify-around",
    "rounded-full",
    "absolute",
    "right-1"
  );

  document.querySelector("body").addEventListener("click", () => {
    button.blur;
    input.blur;
    form.blur;
  })

  button.addEventListener("click", () => {

    button.focus()
  });
  button.addEventListener("focus", () => {
    select.classList.remove("hidden");
  });
  // button.addEventListener("focusout", () => {
  //   setTimeout(() => {
  //     select.classList.toggle("hidden");
  //   }, 10);
  // });
  button.addEventListener("blur", () => {
    setTimeout(() => {
      select.classList.add("hidden");
    }, 10);
  });

  deleteBtn.addEventListener("click", deleteToDo);

  li.appendChild(checkbox);
  // li.appendChild(span);
  li.appendChild(form);
  li.appendChild(button);
  li.appendChild(select);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const savedComToDos = localStorage.getItem(COMPLETE_TODOS_KEY);

if (savedComToDos !== null) {
  const parsedComToDos = JSON.parse(savedComToDos);
  completeDos = parsedComToDos;
  parsedComToDos.forEach(paintMiddleLine);
}
