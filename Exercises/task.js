function Task(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    this.completed = false;
}

let tasks = []

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault():

    let taskName = document.getElementById("taskName").value;
    let dueDate = document.getElementById("dueDate").value;
    let task = new Task(taskName, dueDate);
    tasks.push(task);

    updateTaskList();
    document.getElementById("taskForm").reset();
});

function updateTaskList() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(function(task) {
        let listItem = document.createElement("li");
        listItem.textContent = `${task.name} - Due: ${task.dueDate}`;
        listItem.addEventListener("click", function() {
            task.completed = !task.completed;
            updateTaskList();
        });
        if (task.completed) {
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "grey";
        }
        taskList.appendChild(listItem);
    });
}