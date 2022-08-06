//START

//SELECTORS
let input = document.querySelector('#task-input');
let addTaskButton = document.querySelector('#add-task-button');
let taskList = document.querySelector('#task-list');


//EVENT LISTENERS

addTaskButton.addEventListener('click',addTask);



//FUNCTIONS

function addTask(e) {
    
    //PREVENT THE FORM FROM SUBMITING
    e.preventDefault();

    if(input.value === "") {
        alert("Please add a task!")
    }
    else {

         //CREATE TASK DIV
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');


        //CREATE TASK INPUT
        let taskInput = document.createElement('input');
        taskInput.value = input.value;
        taskInput.type = 'text';
        taskInput.setAttribute("readonly","readonly");
        taskInput.classList.add('task-input');
        taskDiv.appendChild(taskInput);


        //CHECK BUTTON
        let checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="bx bx-check"></i>';
        checkButton.classList.add('check-btn');
        taskDiv.appendChild(checkButton);


        //EDIT BUTTON
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="bx bx-edit"></i>';
        editButton.classList.add('edit-btn');
        taskDiv.appendChild(editButton);


        //DELETE BUTTON
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="bx bx-eraser"></i>';
        deleteButton.classList.add('delete-btn');
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);


        //CLEAR INPUT VALUE
        input.value = '';


        //CHECK TASK
        checkButton.addEventListener('click', () => {
            if(taskInput.classList == 'task-done') {
                taskInput.classList.toggle('task-done');
            }
            else {
                taskInput.classList.toggle('task-done');
            }
        });

        //EDIT TASK
        editButton.addEventListener('click', () => {
            if(taskInput.hasAttribute('readonly')){
                taskInput.removeAttribute('readonly');
                taskInput.focus();
                editButton.style.backgroundColor = '#fff';
            }
            else {
                taskInput.setAttribute('readonly','readonly');
                taskInput.blur();
                editButton.style.backgroundColor = 'rgb(197, 228, 84)';
            }
        });


        //REMOVE TASK
        deleteButton.addEventListener('click', () => {
            taskDiv.remove()
        });
    }
}
