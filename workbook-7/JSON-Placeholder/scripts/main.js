const todoInput = document.getElementById("todo-input");
const toDoBtn = document.getElementById("todo-btn");
const messageDiv = document.getElementById("message-div");

function onToDoBtnClicked() {
  const userID = todoInput.value;
  fetch("https://jsonplaceholder.typicode.com/todos/" + userID)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

window.onload = () => {
  toDoBtn.onclick = onToDoBtnClicked;
};
