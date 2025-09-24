const form = document.querySelector('.formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();
})

const button = document.querySelector('.button-enviar')

button.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.inputs');
    const errors = document.querySelectorAll('.error');
    inputs.forEach((input, idx) => {
        if (input.value === '') {
            if (errors[idx]) errors[idx].classList.remove('error');
            input.classList.remove('inputs');
            input.classList.add('campo-vazio');
        } else {
            input.classList.remove('inputs');
            input.classList.add('campo-preenchido');
        }
    });
});