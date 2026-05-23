const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];
let editIndex = null;












































function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}
