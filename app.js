const todoInp = document.querySelector('.todo-inp');
const todoBtn = document.querySelector('.todo-btn');
const todoLs = document.querySelector('.todo-ls');
const filterOpt = document.querySelector('.filter-todo');

todoBtn.addEventListener('click', addTodo)
todoLs.addEventListener('click', delORcheck)
filterOpt.addEventListener('click', filterTodo)


function addTodo(event) {
    event.preventDefault()
    
    //div todo
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInp.value
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)

    //check btn
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    completeBtn.classList.add('complete-btn')
    todoDiv.appendChild(completeBtn)

    //delete btn
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteBtn.classList.add('delete-btn')
    todoDiv.appendChild(deleteBtn)

    //Append to list
    todoLs.appendChild(todoDiv)

    //clear todoInp
    todoInp.value = ''

}

function delORcheck(e) {
    item = e.target
    //delete
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement
        todo.classList.add('removal')
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
    }
    //complite
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoLs.childNodes
    console.log(todos)
    todos.forEach(function(todo){
        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
        }
    })
}