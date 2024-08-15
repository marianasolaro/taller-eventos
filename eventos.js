document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('div').addEventListener('click', () => {
        alert ('Hola! Soy el div');
    });
});

document.querySelector('button').addEventListener('click', (event) => {
    event.stopPropagation();
});

