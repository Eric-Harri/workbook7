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

function onToDoBtnClicked() {
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
      // messageDiv.innerText = JSON.stringify(data)
      completedSpan.innerText = data.completed;
      completedPara.innerText = data.title;
    });
}

window.onload = () => {
  toDoBtn.onclick = onToDoBtnClicked;
};
