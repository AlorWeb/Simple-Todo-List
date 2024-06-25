// Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Events Listeners
document.addEventListener("DOMContentLoaded".getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

// Adding a task to the to-do list

function addTodo(e) {
   // prevent natural behavior of the form
   e.preventDefault();

   // create a todo div
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

   // Create a list
   const newTodo = document.createElement("li");
   newTodo.innerText = todoInput.value;

   // Save to local
   saveLocalTodos(todoInput.value);
}
