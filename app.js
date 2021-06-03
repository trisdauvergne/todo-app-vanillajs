// selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// functions

const newTodo = (e) => {
  // prevent form from submitting
  e.preventDefault();

  //create the todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create the li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo); // adding the new li to the todo div above

  // create the check mark button
  const completedBtn = document.createElement('button');
  completedBtn.innerText = 'Complete';
  completedBtn.classList.add('complete-btn');
  todoDiv.appendChild(completedBtn);

  // create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete-btn');
  todoDiv.appendChild(deleteBtn);

  // append the newly created todo div to the existing todo-list in HTML
  todoList.appendChild(todoDiv);
}

// listeners

todoBtn.addEventListener('click', newTodo);

