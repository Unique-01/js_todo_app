let todoInput = document.getElementById("todo-input");
let btn = document.getElementById("btn");
let todoDiv = document.getElementById("todo-div");

let todoList = [];

function todoDisplay() {
  todoDiv.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    todoDiv.innerHTML += `<li>${todoList[i]} <button onclick='deleteFunc(this)' class='del-btn' id = '${i}'>x</button></li> `;
  }
}

btn.addEventListener("click", function () {
  todoList.push(todoInput.value);
  todoInput.value = "";
  todoDisplay();
});

function deleteFunc(e) {
  todoList.splice(e.id, 1);
  todoDisplay();
}
