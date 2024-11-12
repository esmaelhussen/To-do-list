import './style.css';

document.addEventListener('DOMContentLoaded', function () {
  // Step 1: Array of tasks with properties
  const tasks = [
    { description: "Buy groceries", completed: false, index: 1 },
    { description: "Walk the dog", completed: true, index: 2 },
    { description: "Finish homework", completed: false, index: 3 },
    { description: "Clean the house", completed: true, index: 4 }
  ];

  // Step 2: Function to render tasks
  function renderTasks() {
    const taskListContainer = document.querySelector('.all-lists');
    taskListContainer.innerHTML = ''; // Clear any existing tasks

    // Sort tasks by their index (this will ensure they appear in the correct order)
    tasks.sort((a, b) => a.index - b.index);

    // Step 3: Loop through the tasks and create list items
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.classList.add('task-item');
      
      // Add task description
      const taskDescription = document.createElement('span');
      taskDescription.textContent = task.description;
      
      // Style completed tasks with a strikethrough
      if (task.completed) {
        taskDescription.style.textDecoration = 'line-through';
        taskDescription.style.color = '#A9A9A9';
      }

      // Add a checkbox to toggle completion status
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.checked = task.completed;
      checkBox.addEventListener('change', () => toggleTaskCompletion(task.index));

      // Append the elements to the list item
      listItem.appendChild(checkBox);
      listItem.appendChild(taskDescription);
      
      // Append the list item to the task list
      taskListContainer.appendChild(listItem);
    });
  }

  // Step 4: Function to toggle task completion
  function toggleTaskCompletion(taskIndex) {
    const task = tasks.find(t => t.index === taskIndex);
    if (task) {
      task.completed = !task.completed;
      renderTasks(); // Re-render tasks after changing completion status
    }
  }

  // Step 5: Initialize by rendering tasks
  renderTasks();
});
