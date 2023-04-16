// Empty script file to start with

//after the user has entered a list description, 
//the user will
//click on the Add Task button
//that list description should be added to the list as a list item 
// and should be preceded by a checkbox

// Step 1 - grabbed an element from the DOM and assign it to  a variable
//Step 2 - write a function to handle the event
//Step 3 - Connect the variable and the fucntion via the event listener 
    //so that an 'event' triggers the update of the DOM
    
    //Step 1
    let addButton = document.getElementById('buttonAdd');
    let newTaskInput = document.getElementById('taskName');
    let todoListContainer = document.getElementById('todo-list')

    let templateElement = document.getElementById("list-item-template")
    let template = templateElement.innerHTML; 

    let showActiveButton = document.getElementById("show-active");
    let showAllButton = document.getElementById("show-all");
    let showCompletedButton = document.getElementById("show-completed");

    //save function to local storage
    function saveTask(name, isCompleted){
        localStorage.setItem(name, isCompleted);
    }

    //fucntion to read from the localStorage and render
    function renderTasks(){
        for (let i =0; i< localStorage.length; i++){
            let taskName = localStorage.key(i)
            let isCompleted = localStorage.getItem(taskName) == "true";
            let taskHTML =template.replace("<!-- TASK_NAME-->", taskName);

            if(!isCompleted){
                todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
            }
        }
    }
    //Step 2
    function onAddTaskClicked(e){
        //retrieve the value of the task input and assign to a variable
        let taskName = newTaskInput.value;
        newTaskInput.value="";

        //Step 1
        //create an li element
        //add a description in between the li tags
        //append the li to the todoListContainer

        //update the taskname in the template for the li text/placeholder
        if (taskName !=""){
            let taskHTML = template.replace("<!-- TASK_NAME-->", taskName);    
            //append the taskHTML to  my ul
            todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
            saveTask(taskName, false);
        }
    }
    function onTodolistClicked(e){
        let targetElement = e.target;

        while (!targetElement.classList.contains("task")){
            targetElement = targetElement.parentElement;
        }
        let checkbox = targetElement.querySelector(".checkbox");

        if (checkbox.checked){
            //taskshould be striked through 
            targetElement.classList.add("completed");
        }
        else{
            //checkbox should be normal
            targetElement.classList.remove("completed");
        }
        let taskNameElement = targetElement.querySelector(".task-name")
        let taskName = taskNameElement.innerText;

        saveTask(taskName, checkbox.checked);
    }

    function showAllTasks(e){
        let tasks = document.getElementsByClassName('task');
        for (let i = 0; i <tasks.length; i++){
            tasks[i].style.display = 'block';
        }
    }
    function showActiveTasks(e){
        let tasks = document.getElementsByClassName('task');
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].classList.contains("completed")){
                // set the display property to "none"
                tasks[i].style.display = "none";
            }
            else{
                tasks[i].style.display = "block";
            }
        }
    }

    function showCompletedTasks(e){
        let tasks = document.getElementsByClassName('task');
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].classList.contains("completed")){
                // set the display property to "none"
                tasks[i].style.display = "block";
            }
            else{
                tasks[i].style.display = "none";
            }
        }
    }
    //step 3
    addButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);
    showActiveButton.addEventListener('click', showActiveTasks);
    showAllButton.addEventListener('click', showAllTasks);
    showCompletedButton.addEventListener('click', showCompletedTasks);
    renderTasks();




















    /*   <ul>
    <li><input type="checkbox" id="task1" name="task1" value="Identify Websites to Review">
    <label for="task1">Identify Websites to Review</label></li>
    <li><input type="checkbox" id="task2" name="task2" value="Draft Introduction">
    <label for="task2">Draft Introduction</label></li>
    <li><input type="checkbox" id="task3" name="task3" value="Create Outline">
    <label for="task3">Create Outline</label></li>
    <li><input type="checkbox" id="task4" name="task4" value="Raed Chapter 4">
    <label for="task4">Raed Chapter 4</label></li>
    <li><input type="checkbox" id="task5" name="task5" value="Do Assignment">
    <label for="task5">Do Assignment</label></li>
    </ul>
    */
