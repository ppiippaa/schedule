// DYNAMIC DATE
const dateEl = document.getElementById('date');
let date = new Date().toDateString();
dateEl.innerText = date;


//
document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
        event.target.previousElementSibling.classList.toggle('strike-through');
    }
})