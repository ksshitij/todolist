function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = taskInput.value;
    li.classList.add("text-white", "bg-gray-700", "p-2", "rounded", "mt-2");

    li.onclick = () => li.remove(); // Remove task when clicked
    taskList.appendChild(li);

    taskInput.value = "";
}
