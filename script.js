//finding element

const container=document.querySelector(".container");
const todoForm=document.querySelector(".todo-form");
const inputTodo=document.querySelector("#inputTodo");
const btn=document.querySelector("#btn");
const lists=document.querySelector("#lists");
const message=document.querySelector(".message")


//create todo function/
const createTodo=(todoId,todoValue)=>{
    const todoElement=document.createElement("li");
    todoElement.id=todoId;
    todoElement.classList.add("li-style")
    todoElement.innerHTML=`<span>${todoValue}</span> 
    <span><button class="btn" id="deleteButton"> <i class="fa-solid fa-trash"></i></button>
    </span>`;
    lists.appendChild(todoElement);
}


//showmessage function///
const showMessage=(text,status)=>{
    message.textContent=text;
    message.classList.add(`bg-${status}`);
    setTimeout(()=>{
      message.textContent="";
       message.classList.remove(`bg-${status}`);
      
    },1000)
}


//addTodo function
const addTodo=(event)=>{
    event.preventDefault();
    const todoValue=inputTodo.value;
    //console.log(inputTodo.value);


    //unique id
    const todoId= Date.now().toString();
    createTodo(todoId,todoValue);
    showMessage("todo is added","success");
 
    //addimg todo to localstorage
    const todos=localStorage.getItem("mytodo")?JSON.parse(localStorage.getItem("mytodos")):[];
    todos.push({todoId,todoValue});
    localStorage.setItem("mytodos",JSON.stringify(todos));
    inputTodo.value="";
};

//adding listener

todoForm.addEventListener("submit",addTodo)

