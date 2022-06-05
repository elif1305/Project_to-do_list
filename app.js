const inputText = document.querySelector("#task");
const button = document.querySelector(".add-btn");
const form = document.querySelector("#add-task");
const ul = document.querySelector(".todolist-list-container");

//functions 

const createTask = (taskText) => {
    return `
                 <div class="list-group">
                <li class="undone">${taskText}</li>
                <button class="btn">&#128473;</i></button>
            </div>  `

  
}


const completedTaskCount = () => {
    let checkedCount = ul.getElementsByClassName("done").length ;
    let taskCount = ul.getElementsByClassName("list-group").length ;
    //console.log(checkedCount,taskCount );
    const checkedTasks = document.getElementById("checkedTasks");
    const allTasks = document.getElementById("allTasks");
    checkedTasks.innerText = checkedCount;
    allTasks.innerText = taskCount;
}




//events

button.addEventListener("click", (e)=>{
    e.preventDefault();                   // formlarda sayfa default olarak yeniler, yani input yerine yazilanlari gostermez. bu nedenle preventdefault yapilip bunun onune gecilmeli.
    if(inputText.value!="" ) {
    ul.innerHTML += createTask(inputText.value);
    form.reset(); 
} else {
    alert ('Please write a task')
}  
    completedTaskCount();
})

// Deleting a task

ul.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn")){
        e.target.parentElement.remove();
    }
    completedTaskCount();
}
)

// Done and UnDone

ul.addEventListener("click", (e) => {
    if(e.target.classList.contains("undone")){
        e.target.className = "done";
    }else{
        e.target.className = "undone";
    }
    completedTaskCount();
})

