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
    card.className = task.completed ? "task-card completed" : "task-card";

    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p><strong>Fecha:</strong> ${task.date}</p>

      <div class="task-actions">
        <button class="edit-btn" onclick="editTask(${index})">Editar</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Eliminar</button>
        <button class="complete-btn" onclick="completeTask(${index})">Completar</button>
      </div>
    `;

    taskList.appendChild(card);
  });
}

function editTask(index) {
    document.getElementById("title").value = tasks[index].title;
    document.getElementById("description").value = tasks[index].description;
    document.getElementById("date").value = tasks[index].date;

    editIndex = index;
    message.textContent = "Editando tarea seleccionada.";
    message.style.color = "#f59e0b";
}

function deleteTask(index) {
  const confirmDelete = confirm("¿Estás seguro de eliminar esta tarea?");

  if (confirmDelete) {
    tasks.splice(index, 1);
    message.textContent = "Tarea eliminada correctamente.";
    message.style.color = "green";
    renderTasks();
    }
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}