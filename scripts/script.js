
function loadTask() {
    fetch("http://localhost:8080/taskManager/getTasks", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    })
    .then(function (res) {
        if (!res.ok) {
            throw new Error('Error en la solicitud: ' + res.status);
        }
        return res.json();  
    })
    .then(function (data) {
        console.log(data);
        let taskList = [];
        let taskhtml = '';
        for(let i=0; i<data.length;i++){
            const task = data[i];
            taskhtml+= `
                <div class="task">
                <input type="checkbox" class="task-checkbox">
                <h2>${task.name}</h2>   
                <p>${task.description}</p>
                <p>Creation date: ${task.creationDate}</p>
                <p>Due date: ${task.dueDate}</p>
                <button class="delete-button" onclick="deleteTask(${task.id})"><i class="fas fa-trash-alt"></i></button>
            </div>` 
        }
        document.getElementById("task-container").innerHTML = taskhtml;
    })
    .catch(function (error) {
        console.log('Error:', error);
    });
}


function addTask(){
    let taskName = document.getElementById("taskTitle").value;
    let description = document.getElementById("taskDescription").value;
    let date = document.getElementById("taskDueDate").value;
        
    fetch("http://localhost:8080/taskManager/saveTask",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                name: taskName,
                description: description,
                dueDate: date
            })
        })
        .then(function (res) { console.log(res); loadTask(); })
        .catch(function (res) { console.log(res) })
        

    }

        /*let taskDescription = $("#task-description").val();
        if (!taskName || !taskDescription) {
            alert('Please fill all the fields');
            return;
        }
        if (taskDescription.length > 40) {
            alert('The description is too long');
            return;
        }
        let dueDateText = $('#dueDateText');
        if (!dueDateText.text()) {
            alert('Please select a due date');
            return;
        }
        let currentDate = new Date();
        let dueDate = new Date(dueDateText.text());
        currentDate.setHours(0, 0, 0, 0);
        if (dueDate < currentDate) {
            alert('The due date must be greater than the current date');
            return;
        };
        if(user.checkExistingTask(dueDateText.text(),taskName)){
            alert('A task with that name already exist on this date.');
            return;
        }
        let task = new Task(taskName, taskDescription, Status.PENDING, user.subjects[0]);
        user.addTask(dueDateText.text(), task);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem(`user${localStorage.getItem('currentUser')}`,JSON.stringify(user));
        loadTasks();*/
        window.addTask = addTask;
        $(document).ready(function () {
            loadTask();
        });

