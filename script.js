const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];
let editIndex = null;

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const date = document.getElementById("date").value;

  if (title === "" || description === "" || date === "") {
    message.textContent = "Todos los campos son obligatorios.";
    message.style.color = "red";
    return;
  }

  const task = {
    title,
    description,
    date,
    completed: false
  };

  tasks.push(task);
  message.textContent = "Tarea creada correctamente.";
  message.style.color = "green";

  taskForm.reset();
  renderTasks();
});