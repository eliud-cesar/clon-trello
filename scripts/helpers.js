const form = document.getElementById('formulario')
const button = document.getElementById('newTask')
const cancel = document.getElementById('cancel')

button.addEventListener('click', () => {
    form.classList.add('active')
})

cancel.addEventListener('click', () => {
    form.classList.remove('active')
})