// DYNAMIC DATE
const dateEl = document.getElementById('date');
let date = new Date().toDateString();
dateEl.innerText = date;

let resetButton = document.querySelector('.reset-button');

// ADD STRIKE THROUGH ON COMPLETED TASKS
document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
        event.target.previousElementSibling.classList.toggle('strike-through');
    }
})


// REMOVE CLASS
const resetElement = (task) => {
    task.classList.remove('strike-through')
}

// UNCHECK BOX
const resetCheckbox = (checkbox) => {
    checkbox.checked = false;
}

// RESET ALL TASkS
resetButton.addEventListener('click', function() {
    let tasks = document.querySelectorAll('p');
    tasks.forEach(task => resetElement(task) )

    let checkboxes = document.querySelectorAll('input')
    checkboxes.forEach(checkbox => resetCheckbox(checkbox))
})