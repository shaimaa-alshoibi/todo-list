//selectors
const todoBtn = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
//event listeners
todoBtn.addEventListener("click", addTask);
todoList.addEventListener("click", checkOrDelete);
//funcction
function addTask(e) {
  e.preventDefault();

  //ceate li
  const todoli = document.createElement("li");
  todoli.classList.add("todo");

  //create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");

  //add input value to div
  todoDiv.innerText = todoInput.value;

  //create btn complete
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = ' <i class="fa-solid fa-check"></i>';

  //create trash btn
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = ' <i class="fa-solid fa-trash"></i>';

  //add div and btn1 and btn2 to li
  todoli.appendChild(todoDiv);
  todoli.appendChild(completeBtn);
  todoli.appendChild(trashBtn);

  //add li to ul
  todoList.appendChild(todoli);

  //remove input value
  todoInput.value = "";
}

function checkOrDelete(e) {
  const item = e.target;

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
}
