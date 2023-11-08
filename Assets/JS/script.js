/* 
const buttonCrea = document.querySelector('button')

const newTask = document.querySelector('input').value

const toDoList = document.getElementById('toDoList')

const creaNewTaskDiv = () => {
    const wrapper = document.getElementById('wrapper')
    const newDiv = document.createElement('div')
    newDiv.className = "newDivClass"
    const newP = document.createElement('p')
    newP.innerText = newTask
    newDiv.appendChild(newP)
    toDoList.appendChild(newDiv)
}

buttonCrea.addEventListener('click', creaNewTaskDiv) */

/* const bottoneCrea = document.querySelector('button')
const newTaskInput = document.getElementById('addTask')
const wrapper = document.getElementById('wrapper')
const toDoList = document.getElementById('toDoList')
const toDoItem = document.getElementById('toDoItem')

const ToDoArray = []
ToDoArray = toDoList.value



const createToDo = () => {
    const toDo = newTaskInput.value
    const toDoLi = document.createElement('li')
    toDoLi.innerText = toDo
    const closeButton = document.createElement('div')
    const Cestino = document.createElement('img')
    Cestino.src = "Assets/Img/trash.svg"
    closeButton.appendChild(Cestino)
    toDoLi.appendChild(closeButton)
    toDoList.appendChild(toDoLi)

    newTaskInput.value = ''
}

bottoneCrea.addEventListener('click', createToDo) */

document.querySelector('button').onclick = () => {
    if(document.querySelectorAll('#addTask').values.length === '') {
        alert("Devi inserisci una task")
    }

    else {
        document.querySelector('#toDoList').innerHTML += `
        <div class="divList">
            <p>${document.querySelector('#addTask').value}</p>
            <button class="delete">
                <img src="Assets/Img/trash.svg"/>
            </button>
        </div>
        `;

        let currentTasks = document.querySelectorAll('.delete')
        for (let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();

            }
        }
    }
}