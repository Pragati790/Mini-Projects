document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskValue;

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
        const currentText = li.firstChild.textContent;
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = currentText;

        // Replace the task text with the input box for editing
        li.firstChild.textContent = '';
        li.insertBefore(editInput, editBtn);

        // Change the Edit button to "Save"
        editBtn.textContent = 'Save';
        editBtn.onclick = function() {
            const updatedValue = editInput.value.trim();
            if (updatedValue === '') {
                alert('Task cannot be empty.');
                return;
            }
            // Update the task with the new value
            li.firstChild.textContent = updatedValue;
            li.removeChild(editInput);

            // Change the button text back to "Edit"
            editBtn.textContent = 'Edit';
            editBtn.onclick = arguments.callee;
        };
    };

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}