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
  console.log(li.id)
completeDos = completeDos.filter((e) => e.id !== parseInt(li.id));
  
  saveToDos();
  saveCompleteToDos();
}
function completeToDo(event) {
  
  console.log(event.target.checked);
  const li = event.target.parentElement;
  const span = li.querySelector("span");
  const input = span.querySelector("input");
  const checkBox = li.querySelector("input");

  if ((event.target.checked == true)) {
    const completeTodo = span.innerText;
    const completeTodoObj = {
      text: completeTodo,
      id: parseInt(li.id)
    };
    paintMiddleLine(completeTodoObj);
    console.log(li.id);
    completeDos.push(completeTodoObj);
    saveCompleteToDos();
    span.classList.add("line-through");
  } else {
  span.classList.remove("line-through");
  completeDos = completeDos.filter((element) => element.id !== parseInt(li.id));
  saveCompleteToDos()

  }
}
function paintMiddleLine(comTodo) {
  const li = document.getElementById(comTodo.id);
  const span = li.querySelector("span");
  const checkBox = li.querySelector("input");
  if ((checkBox.checked = true)) {
    span.classList.add("line-through");
  } else {
    span.classList.remove("line-through");
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.classList.add("flex","h-6","relative");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const form = document.createElement("form");
  const input = document.createElement("input");
  form.appendChild(input);
  input.classList.add("line-through")
  input.value = newTodo.text;
  const checkbox = document.createElement("input");
  // button.innerText = "x";
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", completeToDo);
  const button = document.createElement("button");
  const select = document.createElement("div");
  select.classList.add("flex","flex-col","absolute","right-8","border", "border-black","bg-gray-100","hidden","mr-0.5","p-2","rounded-lg","gap-1","z-20")
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("border-b",)
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  select.appendChild(editBtn);
  select.appendChild(deleteBtn);


  
  button.innerHTML = '<svg class="icon icon-ellipsis flex flex-col item-center justify-arund more-icon h-[20px] w-[20x] bg-gray-100/0 rounded-full p-[0.3rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg>';
  button.classList.add(
"border",
"border-[rgba(0,0,0,0)]",
"focus:bg-gray-100/50",
"flex",
"item-center",
"justify-around",
"rounded-full", "absolute", "right-1")
  button.addEventListener("focus",()=>{select.classList.remove("hidden")})
  button.addEventListener("focusout",()=>{setTimeout(()=>{select.classList.toggle("hidden")},10)})
    
  deleteBtn.addEventListener("click", deleteToDo);

  li.appendChild(checkbox);
  li.appendChild(span);
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
