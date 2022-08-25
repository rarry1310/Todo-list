//START

//SELECTORS
let input = document.getElementById('task-input');
let addTaskButton = document.getElementById('add-task-button');
let taskList = document.getElementById('task-list');
let taskStorage = [];

//EVENT LISTENERS

addTaskButton.addEventListener('click', addTask);

window.onload = function() {

    let savedList = localStorage.getItem("taskList");
    taskStorage = localStorage.getItem("taskStorage");

    // Transform String into Array
    if (taskStorage) {
        taskStorage = taskStorage.split(",");
    } else {
        taskStorage = [];
    }

    if (savedList) {
        taskList.innerHTML = savedList;
        let newTask = document.getElementsByClassName("task-new");
        for (let i = 0; i < newTask.length; i++) {
            newTask[i].value = taskStorage[i];
        }
    }

}

// FUNCTIONS
function addTask(e) {

    //PREVENT THE FORM FROM SUBMITING
    e.preventDefault();

    if (input.value === "") {
        input.setAttribute("Placeholder", "Task Name Can't Be Empty");
        input.classList.add("placeholder-error");
    } else {
        input.classList.remove("placeholder-error");

        // CREATE TASK DIV
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');

        // CREATE TASK INPUT
        let taskInput = document.createElement('input');
        taskInput.value = input.value;
        taskStorage.push(input.value);

        taskInput.type = 'text';
        taskInput.setAttribute("readonly", "readonly");
        taskInput.classList.add('task-input', 'task-new');
        taskDiv.appendChild(taskInput);

        // CHECK BUTTON
        createButton('check', 'check', taskDiv);

        // EDIT BUTTON
        createButton('edit', 'edit', taskDiv);

        // DELETE BUTTON
        createButton('delete', 'eraser', taskDiv);

        taskList.appendChild(taskDiv);

        //CLEAR INPUT VALUE
        input.value = '';
    }
    updateStorage();
}

function createButton(buttonWord, iconName, taskDiv) {
    let buttonName = document.createElement('button');
    buttonName.innerHTML = `<i class="bx bx-${iconName}"></i>`;
    buttonName.classList.add(`${buttonWord}-btn`);
    buttonName.setAttribute("onclick", `${buttonWord}Task(this);`);
    taskDiv.appendChild(buttonName);
}

function checkTask(taskButton) {
    let taskInput = taskButton.parentElement.children[0];
    taskInput.classList.toggle('task-done');
    updateStorage();
}

function editTask(taskButton) {
    let taskInput = taskButton.parentElement.children[0];
    let editButton = taskButton.parentElement.children[2];

    if (taskInput.hasAttribute('readonly')) {
        taskInput.removeAttribute('readonly');
        taskInput.focus();
        editButton.style.backgroundColor = '#fff';

        localStorage.setItem("editedItem", taskStorage.indexOf(taskInput.value))
    } else {
        taskInput.setAttribute('readonly', 'readonly');
        taskInput.blur();
        editButton.style.backgroundColor = 'rgb(197, 228, 84)';

        taskStorage[localStorage.getItem("editedItem")] = taskInput.value;
    }
    updateStorage();
}

function deleteTask(taskButton) {
    let taskInput = taskButton.parentElement.children[0];
    let taskDiv = taskButton.parentElement;
    let removedItem = taskStorage.indexOf(taskInput.value)
    if (removedItem !== -1) {
        taskStorage.splice(removedItem, 1);
    }
    taskDiv.remove();
    updateStorage();
}

function updateStorage() {
    localStorage.setItem("taskStorage", taskStorage);
    localStorage.setItem("taskList", taskList.innerHTML);
}