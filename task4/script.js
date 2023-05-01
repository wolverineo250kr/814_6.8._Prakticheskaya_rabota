const link = document.querySelector('#link');

link.addEventListener('click',
    (event) => {
        event.preventDefault();
        var promptText = prompt('Введите текст ссылки');
        link.textContent = promptText;
    });