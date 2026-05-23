const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];
let editIndex = null;

function editTask(index) {
    document.getElementById("title").value = tasks[index].title;
    document.getElementById("description").value = tasks[index].description;
    document.getElementById("date").value = tasks[index].date;

    editIndex = index;
    message.textContent = "Editando tarea seleccionada.";
    message.style.color = "#f59e0b";
}