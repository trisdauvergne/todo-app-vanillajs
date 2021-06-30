const todoItems = [];

// render the todo item
const renderTodo = (todo) => {
  // selecting the ul
  const list = document.querySelector('.todo-items');

  // use ternary operator to check if 'todo.checked' is true
  // if so, assign 'done' to 'isChcked', otherwise assign an empty string
  const isChecked = todo.checked ? 'done' : '';

  // create an 'li' element and assign it to 'node'
  const node = document.createElement('li');

  // set the classAttribute to the node
  node.setAttribute('class', `todo-item ${isChecked}`);

  // set the data-key attribute to the id of the todo
  node.setAttribute('data-key', todo.id);

  // set the contents of the 'li' element created above
  node.innerHTML = `
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick js-tick"></label>
  <span>${todo.text}</>
  <button class="delete-todo js-delete-todo">Delete</button>
  `;
  console.log('node', node);

  // append the element to the DOM as the list child of the element 'list' variable
  list.append(node);
};

// create new object
const addTodo = (text) => {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
  renderTodo(todo);
};

// select the form
const form = document.querySelector('.todo-form');
form.addEventListener('submit', (e) => {
  // prevent page refresh on form submission
  e.preventDefault();

  // select text input
  const input = document.querySelector('.todo-input');

  // get the value of the input and remote whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});
