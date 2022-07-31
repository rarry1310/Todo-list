let addTodoInput = document.getElementById('addTodoInput');
let todoInput = document.getElementById('todoInput');
let addButton = document.getElementById('addButton');
let todoList = document.getElementById('todoList');


addButton.addEventListener('click', addTodo);

function addTodo(e) {
    event.preventDefault();

    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    todoList.appendChild(todoDiv);

    let newTodo = document.createElement('li');
    newTodo.classList.add('newTodo');
    todoDiv.appendChild(newTodo);
    newTodo.innerText = todoInput.value;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    todoDiv.appendChild(buttons)
    
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = '<i class="bx bx-trash"></i>';
    buttons.appendChild(deleteButton);
    
    let checkButton = document.createElement('button');
    checkButton.classList.add('checkButton');
    checkButton.innerHTML = '<i class="bx bx-checkbox"></i>';
    buttons.appendChild(checkButton);

    let checkedButton = document.createElement('button');
    checkedButton.classList.add('checkedButton');
    checkedButton.innerHTML = '<i class="bx bx-checkbox-checked checked"></i>';
    buttons.appendChild(checkedButton);    

    todoInput.value = "";
}