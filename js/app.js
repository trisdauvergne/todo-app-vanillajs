const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const lists = [{
  id: 1,
  name: 'name',
}, {
  id: 2,
  name: 'todo',
}];

const createList = (name) => ({ id: Date.now().toString(), name, tasks: [] });

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const render = () => {
  clearElement(listsContainer);
  lists.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add('list-name');
    listElement.innerText = list.name;
    listsContainer.appendChild(listElement);
  });
};

newListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName === null || listName === '') return;
  const list = createList(listName);
  newListInput.value = '';
  lists.push(list);
  render();
});

render();
