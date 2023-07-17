const todoInp = document.querySelector('.todo-inp');
const todoBtn = document.querySelector('.todo-btn');
const todoLs = document.querySelector('.todo-ls');
const filterOpt = document.querySelector('.filter-todo');

todoBtn.addEventListener('click', addTodo)
todoLs.addEventListener('click', delORcheck)


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
    //Save to localStorage
    saveTodoLocal(todoInp.value)

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

function saveTodoLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify('todos'))
}