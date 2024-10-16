document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const categoryInput = document.getElementById('categoryInput');

    const taskText = taskInput.value.trim();
    const deadline = deadlineInput.value;
    const category = categoryInput.value;

    if (taskText === '') {
        return; // To Don't add empty tasks
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = `category-${category}`;

    const taskInfo = document.createElement('span');
    taskInfo.textContent = `${taskText} (Due: ${deadline})`;

    li.appendChild(taskInfo);

    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    if (deadline) {
        const notificationTime = new Date(deadline);
        notificationTime.setDate(notificationTime.getDate() - 1); // Notify 1 day before the deadline
        const now = new Date();
        const timeUntilNotification = notificationTime - now;

        if (timeUntilNotification > 0) {
            setTimeout(() => {
                alert(`Reminder: ${taskText} is due tomorrow!`);
            }, timeUntilNotification);
        }
    }

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input field
    deadlineInput.value = '';}