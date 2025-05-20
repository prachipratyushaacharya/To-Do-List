let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();


    if(text){
        tasks.push({tex: text, completed: false });
        taskInput.value = "";
        updateTasksList();
    }
};

const updateTasksList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''

    tasks.forEach((task,index) =>{
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class = "taskItem">
            <div class="task $ {task.completed ? "completed": ""}">
                <input type= "checkbox" class="checkbox" $ {task.completed ? "checked" : ""} />
                <p> $ {task.text} </p>
            </div>
            <div class= "icons">
                <img src= "./TO-DO APP/edit-icon.png" onClick= "editTask(${index})" />
                <img src= "./TO-DO APP/bin-icon.png" onClick= "deleteTask(${index})"/>
            </div>
        </div>
        `;
        listItem.addEventListener("change", ()=> toggleTastComplete(index));
        taskList.append(ListItem);
    });
};

document.getElementById('newTask').addEventListener('click', function(e)
{
    e.preventDefault();

    addTask();
})