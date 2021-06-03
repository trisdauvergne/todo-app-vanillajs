// selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');

// functions

const newTodo = (e) => {
  // prevent form from submitting
  e.preventDefault();

  //create the todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create the li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo); // adding the new li to the todo div above

  // add to local storage
  saveLocalTodos(todoInput.value);

  // create the check mark button
  const completedBtn = document.createElement('button');
  completedBtn.innerText = 'Done';
  completedBtn.classList.add('complete-btn');
  todoDiv.appendChild(completedBtn);
  completedBtn.addEventListener('click', markAsDone)

  // create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete-btn');
  todoDiv.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', deleteTodo);

  // append the newly created todo div to the existing todo-list in HTML
  todoList.appendChild(todoDiv);

  // clear todoInput value
  todoInput.value = '';
}

const deleteTodo = (e) => {
  const todoItem = e.target.parentElement;
  todoItem.classList.add('fall');
  deleteLocalStorageItem(todoItem);
  todoItem.addEventListener('transitionend', () => {
    todoItem.remove();
  })
}

const markAsDone = (e) => {
  const markItem = e.target.parentElement;
  markItem.classList.toggle('completed');
}

const filterItems = (e) => {
  const todoItems = todoList.childNodes;
  console.log(e.target.value);
  todoItems.forEach(item => {
    switch(e.target.value) {
      case 'all':
        item.style.display = 'flex';
        break;
      case 'complete':
        if(item.classList.contains('completed')) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
        break;
      case 'incomplete':
        if(!item.classList.contains('completed')) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
        break;
    }
  })
}

const saveLocalTodos = (todo) => {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = () => {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(item => {
    //create the todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create the li
  const newTodo = document.createElement('li');
  newTodo.innerText = item;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo); // adding the new li to the todo div above

  // create the check mark button
  const completedBtn = document.createElement('button');
  completedBtn.innerText = 'Done';
  completedBtn.classList.add('complete-btn');
  todoDiv.appendChild(completedBtn);
  completedBtn.addEventListener('click', markAsDone)

  // create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete-btn');
  todoDiv.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', deleteTodo);

  // append the newly created todo div to the existing todo-list in HTML
  todoList.appendChild(todoDiv);
  })
}

const deleteLocalStorageItem = (item) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos =[];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const itemIndex = item.children[0].innerText;
  todos.splice(todos.indexOf(itemIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// listeners

document.addEventListener('DOMContentLoaded', getTodos) // Checking if content loaded
todoBtn.addEventListener('click', newTodo);
filterOptions.addEventListener('change', filterItems);

