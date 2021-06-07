// Elements
const todoInput = document.querySelector('.todo-form__input');
const todoBtn = document.querySelector('.todo-form__btn');
const todoList = document.querySelector('.todo-items__list');

// Functions
const addItem = (e) => {
  // prevent from submitting
  e.preventDefault();

  // create the div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-items__item-div');

  // create the li
  const todoItem = document.createElement('li');
  todoItem.innerText = todoInput.value;
  todoItem.classList.add('todo-items__li-item');
  todoDiv.appendChild(todoItem);

  // create the check mark button
  const completedBtn = document.createElement('button');
  completedBtn.innerText = 'Done';
  completedBtn.classList.add('todo-items__completed-btn');
  todoDiv.appendChild(completedBtn);
  completedBtn.addEventListener('click', markAsComplete);

  // // create the delete button
  // const deleteBtn = document.createElement('button');
  // deleteBtn.innerText = 'Delete';
  // deleteBtn.classList.add('todo-items__delete-btn')
  // todoDiv.appendChild(deleteBtn);
  // deleteBtn.addEventListener('click', deleteTodoItem);

  // add to local storage
  saveToLocal(todoInput.value);

  // append to the todo-list in the hTML
  todoList.appendChild(todoDiv);

  // reset the input
  todoInput.value = '';
}

const markAsComplete = (e) => {
  const completedItem = e.target.parentElement;
  completedItem.classList.toggle('completed')
}

const deleteTodoItem = (e) => {
  const itemToDelete = e.target.parentElement;
  deleteLocalStorageItem(itemToDelete);
  itemToDelete.remove();
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

const getFromLocalStorage = () => {
  let todoItems;
  if(localStorage.getItem('todoItems') === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem('todoItems'));
  }
  todoItems.forEach(item => {
    // create the div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-items__item-div');

    // create the li
    const todoItem = document.createElement('li');
    todoItem.innerText = item;
    todoItem.classList.add('todo-items__li-item');
    todoDiv.appendChild(todoItem);

    // create the check mark button
    const completedBtn = document.createElement('button');
    completedBtn.innerText = 'Done';
    completedBtn.classList.add('todo-items__completed-btn');
    todoDiv.appendChild(completedBtn);

    // // create the delete button
    // const deleteBtn = document.createElement('button');
    // deleteBtn.innerText = 'Delete';
    // deleteBtn.classList.add('todo-items__delete-btn')
    // todoDiv.appendChild(deleteBtn);
    // deleteBtn.addEventListener('click', deleteTodoItem);

    // append the newly created todo div to the existing todo-list in HTML
    todoList.appendChild(todoDiv);
  })
}

const deleteLocalStorageItem = (todoItem) => {
  let todoItems;
  if(localStorage.getItem('todoItems') === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem('todoItems'));
  }
  const itemIndex = todoItem.children[0].innerText;
  todoItems.splice(todoItems.indexOf(itemIndex), 1);
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}



// Event Listeners
document.addEventListener('DOMContentLoaded', getFromLocalStorage);
todoBtn.addEventListener('click', addItem);
