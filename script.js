const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];
let editIndex = null;

function deleteTask(index) {
  const confirmDelete = confirm("¿Estás seguro de eliminar esta tarea?");

  if (confirmDelete) {
    tasks.splice(index, 1);
    message.textContent = "Tarea eliminada correctamente.";
    message.style.color = "green";
    renderTasks();
  }
}