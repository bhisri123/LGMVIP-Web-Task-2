// Add Todo
document.getElementById('addButton').addEventListener('click', function() {
  var todoInput = document.getElementById('todoInput');
  var todoList = document.getElementById('todoList');
  var todoText = todoInput.value.trim();

  if (todoText !== '') {
    var todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    var todoTextElement = document.createElement('span');
    todoTextElement.className = 'todo-text';
    todoTextElement.textContent = todoText;

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        todoTextElement.classList.add('completed');
      } else {
        todoTextElement.classList.remove('completed');
      }
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoTextElement);

    todoList.appendChild(todoItem);

    todoInput.value = '';
  }
});

// Hint Tasks
var hintTasks = ["Organize work desk", "start coding", "make presntations", "Complete important project", "Schedule meetings"];

var todoList = document.getElementById('todoList');

hintTasks.forEach(function(task) {
  var todoItem = document.createElement('li');
  todoItem.className = 'todo-item';

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  var todoTextElement = document.createElement('span');
  todoTextElement.className = 'todo-text';
  todoTextElement.textContent = task;

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      todoTextElement.classList.add('completed');
    } else {
      todoTextElement.classList.remove('completed');
    }
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoTextElement);

  todoList.appendChild(todoItem);
});



