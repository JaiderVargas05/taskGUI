# Laboratorio 04- SCRUM - DI/IOC - INTERNET
*Integrantes:*

*-Andrea Camila Torres Gonzales.*

*-Jorge Andres Gamboa Sierra.*

*-Jaider David Vargas Noriega.*

*-Laura Sofia Gil Chaves.*

## Bitacora taskGui

1. Antes de implementar la interfaz gráfica se diseñó un MockUp para el gestor de tareas de un usuario.

   ![image](https://github.com/user-attachments/assets/86858a45-60ca-4f32-b237-08c84dcd02f9)

2. Luego se realizo mediante 3 archivos separados el HTML, CSS y JavaScript la aplicación web en la rama develop.
   
   A continuación se describe la estructura HTML del archivo principal index.html para crear y estructurar el contenido en la web.
   
   ```bash
      <!DOCTYPE html>
      <html lang="es">
      
      <head>
      	<meta charset="iso-utf-8" />
      	<link rel="stylesheet" href="../styles/home.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      	<script type="text/javascript" src="../jquery-3.0.0.min.js"></script>
      	<title>TaskManager</title>
      </head>
      
      <body>
      	<header>
              <img src="../images/logo.png" alt="Logo de la app" class="logo">
              <h1>TaskManager</h1>
      
      	</header>
      <main>
          <div class="task-form">
              <div class="form-group">
                  <label for="taskTitle"><b>Title</b></label>
                  <input type="text" id="taskTitle" placeholder="Enter a title (no more than 30 characters)" maxlength="30">
              </div>
              <div class="form-group">
                  <label for="taskDescription"><b>Description</b></label>
                  <textarea id="taskDescription" placeholder="Enter a description (no more than 50 characters)" maxlength="50"></textarea>
              </div>
              <div class="date-container">
                  <div class="date-input">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"                         stroke-linejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <input type="date" id="taskDueDate">
                  </div>
                  <button onclick="addTask()">Add</button>
              </div>
          </div>
          <div id="task-container">
          </div>
      </main>
      <script src="../scripts/script.js"></script>
      </body>
      </html>     
   ```
   Luego con ayuda del archivo home.css nos ayuda controlar el diseño y la presentación web escritos en HTML.

   ```bash
        /*estilo del cuerpo*/
        body{
            background-color: #daede5;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            padding: 0;
            overflow-x:hidden;
        }
        /*estilo del header*/
        header{
            display: flex;
            background-color: #15505d;
            width: 100vw; 
            padding: 0 0 0 6rem; 
            box-sizing: border-box;
            color: white;
            align-items: center;
        }
        
        img{
            height: 50px;
        }
        h1{
            margin-left: 1rem;
        }
        
        /*estilo title,description*/
        main{
            display: flex;
            align-content: space-between;
            margin: 2rem; 
            gap: 6%;
            width: 100vw; 
        }
        .task-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: calc(40%);
            display: flex;
            height: 50vh; 
            margin-left: 4rem; 
            flex-direction: column;
            align-content: center;
            margin-top: 80px;
            height: fit-content;
            position: sticky; 
            top: 70px; 
            left: 0; 
            z-index: 1000;
        }
        .form-group label, .date-container label {
            font-size: 18px;
            color: #15505d;
        }
        .form-group input, 
        .form-group textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #15505d;
            border-radius: 8px;
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
            box-sizing: border-box;
            resize: none;
            background-color: #afd1c6;
            margin-top: 20px;
        }
        /*estilo calendario*/
        .date-container {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            border: none;
            justify-content: space-between;
        }
        .date-input{
            display: flex;
            align-items: center; 
            gap: 10px; 
        }
        .date-input svg {
            color: #15505d;
        }
        
        .date-input input {
            border: 1px solid #15505d;
            border-radius: 8px;
            padding: 0.5rem;
            background-color: transparent;
            color: #15505d;
        }
        
        .date-container button {
            background-color: #15505d;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-size: 16px;
            
        }
        #taskDescription{
            height: 200px;
        }
        /*estilo de las tareas*/
        #task-container{
            width: calc(60%);
            display: flex;
            flex-wrap: wrap;
            gap: 8%;
            height: fit-content;
            max-width: 100%;
        }
        .task {
            align-items: center;
            background-color: #15505d;
            color: white;
            border-radius: 10px;
            box-sizing: border-box; 
            position: relative;
            width: 40%;
            height: 200px;
            overflow: hidden;
            padding: 1rem;
            position: relative;
            margin-top: 2rem;
            transition: transform 0.3s ease;
        }
        .task-header{
            display: flex;
        }
        .delete-button {
            position: absolute;
            bottom: 10px; 
            right: 10px;  
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: #afd1c6; 
            font-size: 1.5em; 
            padding: 0;
        }
        .task h4{
            margin-top: 2px;
            margin-left: 10px;
        }
        .task-checkbox {
            position: absolute;
            top: 10px;
            right: 10px;
            transform: scale(2);
        }
        .COMPLETED{
            background: #3c895f;
        }
        .task:hover{
            border: 1px solid #eefb03;
            transform: scale(1.08); 
        }
       ```
   
Mediante el archivo script.js proporciona funciones que interactúan con el backend.

   -La función loadTask() obtiene las tareas desde el servidor y las muestra en la página, permitiendo que el usuario vea las tareas pendientes o completadas.
   
   -La función addTask() permite agregar una nueva tarea, validando los campos del formulario, como el nombre, la descripción y la fecha límite antes de enviarla al servidor.
   
   -La función deleteTask() elimina una tarea seleccionada, mientras que disabledButton() actualiza una tarea para marcarla como completada.
   
   -El código utiliza fetch() para hacer peticiones HTTP (GET, POST, DELETE, PATCH) al servidor y actualizar dinámicamente la lista de tareas sin recargar la página.
   
   -Se utiliza jQuery para cargar las tareas al inicio cuando el documento está listo.

   ```bash
      /*
*Funcion para cargar las tareas
*/
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
            let isCompleted = task.isCompleted ? 'COMPLETED' : '';
            let buttonCheck = task.isCompleted 
            ? `<input type="checkbox" class="task-checkbox" onclick="disabledButton('${task.id}')" checked disabled />` 
            : `<input type="checkbox" class="task-checkbox" onclick="disabledButton('${task.id}')" />`;

            taskhtml+= `
            <div class="task ${isCompleted}">
                ${buttonCheck}
                <h2>${task.name}</h2>   
                <p>${task.description}</p>
                <p>Creation date: ${task.creationDate}</p>
                <p>Due date: ${task.dueDate}</p>
                <button class="delete-button" onclick="deleteTask('${task.id}')"><i class="fas fa-trash-alt"></i></button>
            </div>` 
        }
        document.getElementById("task-container").innerHTML = taskhtml;
    })
    .catch(function (error) {
        console.log('Error:', error);
    });
}

/*
*Funcion para añadir una tarea
*/
function addTask(){
    const taskName = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const date = document.getElementById("taskDueDate").value;
    if (!taskName || !description || !date) {
        alert('Please fill all the fields');
        return;
    }
    if(taskName.length > 30){
        alert('The title is too long');
        return;
    }
    if (description.length > 50) {
        alert('The description is too long');
        return;
    }
   
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let selectedDate = new Date(date);
    if (selectedDate < currentDate) {
        alert('The due date must be greater than the current date');
        return;
    };   
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
        loadTask();
    }
    /*
    *Funcion para eliminar tareas
    */
    function deleteTask(taskId) {
        fetch(`http://localhost:8080/taskManager/delete?id=${taskId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(function (res) {
            if (res.ok) {
                console.log('Task deleted successfully');
                loadTask();
            } else {
                console.log('Failed to delete task');
            }
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
    }
    /*
    *Funcion para marcar una tarea como completada
    */
    function disabledButton(id){
        console.log(id);
        fetch(`http://localhost:8080/taskManager/markTaskAsCompleted?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(function (res) {
            if (res.ok) {
                loadTask();
            } else {
                console.log('Failed to delete task');
            }
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
    }
    
    
    window.addTask = addTask;
    window.deleteTask = deleteTask;
    $(document).ready(function () {
        loadTask();
    });

   ```


