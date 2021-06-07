// Elements
const button = document.querySelector('#button');
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');

// Functions
// const clicked = (e) => {
//   e.preventDefault();
//   console.log('clicked');
// }

const addItem = (e) => {
  // prevent from submitting
  e.preventDefault();

  // create the div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-div');

  // create the li
  const todoItem = document.createElement('li');
  todoItem.innerText = todoInput.value;
  todoItem.classList.add('todo-item');
  todoDiv.appendChild(todoItem);

  // add to local storage
  saveToLocal(todoInput.value);

  // reset the input
  todoInput.value = '';
}

const saveToLocal = (todoItem) => {
  let todoItems;
  if(localStorage.getItem('todoItems') === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem('todoItems'));
  }
  todoItems.push(todoItem);
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// Event Listeners
// button.addEventListener('click', clicked);
todoBtn.addEventListener('click', addItem);
