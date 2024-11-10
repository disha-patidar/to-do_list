const inputbox=document.getElementById('inputbox');
const addBtn=document.getElementById('addBtn');
const listcontainer=document.getElementById('todoList');
let editTodo=null;
const addTodo=()=>{
const inputText=inputbox.value.trim();
if(inputText.length <=0){
    alert("You must write something here");
    return false;
}
if(addBtn.value==="Edit"){
    editTodo.target.previousElementSibling.innerHTML=inputText;
    addBtn.value="Add";
    inputbox.value="";
}
else{


//creating p
const li=document.createElement("li");
const p=document.createElement("p");
p.innerHTML=inputText;
li.appendChild(p);
//creating edit btn
const editBtn=document.createElement("button");
editBtn.classList.add("btn","editBtn");
editBtn.innerHTML="Edit";
li.appendChild(editBtn);

//creating remove btn
const deleteBtn=document.createElement("button");
deleteBtn.classList.add("btn","deleteBtn");
deleteBtn.innerHTML="Remove";
li.appendChild(deleteBtn);
todoList.appendChild(li);
inputbox.value='';
saveLocalTodos(inputText);
}
}
const updateTodo=(e)=>{
   if(e.target.innerHTML=="Remove"){
   todoList.removeChild(e.target.parentElement);
   }
   if(e.target.innerHTML==="Edit"){
    inputbox.value=e.target.previousElementSibling.innerHTML;
    inputbox.focus();
    addBtn.value="Edit";
    editTodo=e;
   }
}
const saveLocalTodos=(todo)=>{
let todos;
if(localStorage.getItem("todos")===null){
    todos=[];
}
else{
    todos=JSON.parseInt(localStorage.getItem("todos"));
}
    
    
todos.push(todo);
//console.log(todos);
localStorage.setItem("todos",JSON.styringify(todos));

}
const getLocalTodos=()=>{
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parseInt(localStorage.getItem("todos"));
        todos.forEach(todo=>{
            const li=document.createElement("li");
            const p=document.createElement("p");
            p.innerHTML=inputText;
            li.appendChild(p);
            //creating edit btn
            const editBtn=document.createElement("button");
            editBtn.classList.add("btn","editBtn");
            editBtn.innerHTML="Edit";
            li.appendChild(editBtn);
            
            //creating remove btn
            const deleteBtn=document.createElement("button");
            deleteBtn.classList.add("btn","deleteBtn");
            deleteBtn.innerHTML="Remove";
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);