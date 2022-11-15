const todoInput = document.getElementById("todo-input");
const toDoBtn = document.getElementById("todo-btn");
const messageDiv = document.getElementById("message-div");
const messageDiv2 = document.getElementById("message-div2");

 // const userID = todoInput.value;
  // fetch("https://jsonplaceholder.typicode.com/todos/" + userID)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     messageDiv.innerHTML = data.;
  //   });

function onFormSubmit(event) {
  event.preventDefault();
  const id = document.querySelector("#todoId").value;
  loadTodo(id);
}

function loadTodo(todoId) {
  const messageDiv = document.querySelector("#message-div");
  const completedSpan = document.querySelector("#message-div span");
  const completedPara = document.querySelector("#message-div p");
  
  fetch(`http://localhost:8888/todos/${todoId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      completedSpan.innerText = data.completed;
      completedPara.innerText = data.title;
    });
}

window.onload = () => {
  const $q = (selector) => document.querySelector(selector)
  const form = $q("form");
  form.onsubmit = onFormSubmit;
};
