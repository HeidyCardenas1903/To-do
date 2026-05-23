const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];
let editIndex = null;

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = "<p>No hay tareas registradas.</p>";
    return;
  }

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = "task-card";

    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p><strong>Fecha:</strong> ${task.date}</p>
    `;

    taskList.appendChild(card);
  });
}