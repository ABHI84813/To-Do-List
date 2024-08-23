let tasks = [];

document.addEventListener("DOMContentLoaded", function() {
	const addTaskButton = document.getElementById("add-task");
	const taskList = document.getElementById("tasks");

	addTaskButton.addEventListener("click", function() {
		const newTask = document.getElementById("new-task").value.trim();
		if (newTask !== "") {
			addTask(newTask);
			document.getElementById("new-task").value = "";
		}
	});

	taskList.addEventListener("click", function(event) {
		if (event.target.tagName === "BUTTON") {
			const taskIndex = event.target.parentNode.getAttribute("data-index");
			if (event.target.textContent === "Edit") {
				editTask(taskIndex);
			} else if (event.target.textContent === "Delete") {
				deleteTask(taskIndex);
			} else if (event.target.textContent === "Mark as Completed") {
				markAsCompleted(taskIndex);
			} else if (event.target.textContent === "Mark as Incomplete") {
				markAsIncomplete(taskIndex);
			}
		}
	});

	loadTasks();
});

function addTask(newTask) {
	tasks.push({ text: newTask, completed: false });
	renderTasks();
}

function editTask(taskIndex) {
	const task = tasks[taskIndex];
	const editText = prompt("Edit task:", task.text);
	if (editText !== null) {
		task.text = editText;
		renderTasks();
	}
}

function deleteTask(taskIndex) {
	tasks.splice(taskIndex, 1);
	renderTasks();
}

function markAsCompleted(taskIndex) {
	tasks[taskIndex].completed = true;
	renderTasks();
}

function markAsIncomplete(taskIndex) {
	tasks[taskIndex].completed = false;
	renderTasks();
}

function renderTasks() {
	const taskList = document.getElementById("tasks");
	taskList.innerHTML = "";
	tasks.forEach((task, index) => {
		const taskHTML = `
			<li data-index="${index}">
				<span ${task.completed ? 'class="completed"' : ""}>${task.text}</span>
				<button type="button">Edit</button>
				<button type="button">Delete</button>
				<button type="button">${task.completed ? "Mark as Incomplete" : "Mark as Completed"}</button>
			</li>`
		taskList.innerHTML += taskHTML;
	});
}
function loadTasks() {}