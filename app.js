let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();


    if(text){
        tasks.push({tex: text, completed: false });
        
    }
}

document.getElementById('newTask').addEventListener('click', function(e)
{
    e.preventDefault();

    addTask();
})