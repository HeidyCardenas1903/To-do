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
