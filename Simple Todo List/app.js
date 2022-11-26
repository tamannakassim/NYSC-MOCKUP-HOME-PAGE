'use strict';
let todoInputField=document.getElementById('todoInput');
let addTodoBtn=document.getElementById('addTodoBtn');
let todoList=document.getElementById('todoList');

const addTodo=()=>{
    //VALIDATE TODO INPUT FIELD
    if (todoInputField.value.trim()==""){
        return alert('Please enter what you want to do');
    }
    //CREATING THE 'li'
   let listOfTodos=document.createElement('li');
   listOfTodos.className='todo-lists';
   todoList.appendChild(listOfTodos) ;

   //CREATING THE INPUT FIELD
   let todoItem=document.createElement('input');
   todoItem.type='text';
   todoItem.className="todo-item";
   todoItem.disabled=true;

   //ASSIGNING THE VALUE OF todoInputField to todoItem
   todoItem.value=todoInputField.value;
   listOfTodos.appendChild(todoItem);
   
   

   //CREATING THE BUTTON CONTAINER
   let btnContainer=document.createElement('span');
   btnContainer.className="btn-container";
   listOfTodos.appendChild(btnContainer);
   
   //CREATING THE EDIT BUTTON
   let editBtn=document.createElement('button');
   editBtn.className="edit-btn";
   editBtn.innerText="Edit";
   editBtn.id="editBtn";
   btnContainer.appendChild(editBtn);
   
   //CREATING THE DELETE BUTTON
   let delBtn=document.createElement('button');
   delBtn.className="del-btn";
   delBtn.innerText='Delete';
   delBtn.id="delBtn";
   btnContainer.appendChild(delBtn);

   //CLEAR INPUT FIELD
   todoInputField.value=""
   

//DELETE FUNCTIONALITY
window.addEventListener('click',(e)=>{
    if (e.target.id=='delBtn'){
        console.log(e.target.parentElement.parentElement);
        let child=e.target.parentElement.parentElement;
        let parent=child.parentElement;
        parent.removeChild(child);
    }

//EDIT FUNCTIONALITY
window.addEventListener('click',(e)=>{
    if(e.target.id=='editBtn'){
    let newTodo=e.target.parentElement.parentElement.firstElementChild;
    newTodo.disabled=false;
    //ASSIGNING THE ENTER KEY
    window.addEventListener('keydown',(e)=>{
        if(e.key=='Enter'){
          let newTodoValue=newTodo.value;
          newTodo.disabled=true;
        }
    })
    }
})
}
)
   
}
addTodoBtn.addEventListener('click', addTodo);
window.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        addTodo();
    }
})