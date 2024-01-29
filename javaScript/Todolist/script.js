function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() != "") {
        let taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = taskInput.value + '<button onClick="removeTask(this)">Remove</button>'
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
function removeTask(button) {
    let taskList = document.getElementById("taskList");
    let taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}