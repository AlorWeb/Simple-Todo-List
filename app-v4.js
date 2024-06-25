// Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const completedTodo = document.querySelector(".complete-button");
const removedTodo = document.querySelector(".trash-button");

// Events Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
removedTodo.addEventListener("click", deletedTodo);
// completedTodo.addEventListener("click", todoCompleted);
// filterOption.addEventListener("click", filterTodo);

// Adding a task to the to-do list

function addTodo(e) {
   // prevent natural behavior of the form
   e.preventDefault();
   // console.log("test");

   // create a todo div
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

   // Create a list
   const newTodo = document.createElement("li");
   newTodo.innerText = todoInput.value;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);
   //  <div class="todo"><li class="todo-item"></li></div>

   // Save to local
   saveLocalTodos(todoInput.value);

   // Create completed button
   const completedButton = document.createElement("button");
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-button");
   todoDiv.appendChild(completedButton);

   // Create trash button
   const trashButton = document.createElement("button");
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-button");
   todoDiv.appendChild(trashButton);

   // Append to todo list
   todoList.appendChild(todoDiv);

   // Clear input value
   todoInput.value = "";
}

// Save to Local
function saveLocalTodos(todo) {
   let todos;
   if (localStorage.getItem("todos") === null) {
      todos = [];
   } else {
      todos = JSON.parse(localStorage.getItem("todos"));
   }
   todos.push(todo);
   localStorage.setItem("todos", JSON.stringify(todos));
   console.log(todos);
}

// Retrieve all todos
function getTodos() {
   let todos;
   if (localStorage.getItem("todos") === null) {
      todos = [];
   } else {
      todos = JSON.parse(localStorage.getItem("todos"));
   }
   todos.forEach(function (todo) {
      // Create todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");

      // Create list item
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);

      // Create completed button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = '<i class="fas fa-check"></i>';
      completedButton.classList.add("complete-button");
      todoDiv.appendChild(completedButton);

      // Create trash button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.classList.add("trash-button");
      todoDiv.appendChild(trashButton);

      // Append to todo list
      todoList.appendChild(todoDiv);
   });
}

// Delete todo
function deletedTodo(e) {
   console.log('test');
}


// Todo Completed
// function todoCompleted(){
//      const todoItem = document.querySelector('.todo-item');
//      todoItem.classList.toggle('strikethrough');
// }
