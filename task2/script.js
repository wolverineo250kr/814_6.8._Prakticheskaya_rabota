const consoleLogBlock = document.querySelector('#consoleLog');
consoleLogBlock.addEventListener('click',
    (event) => {
        // тело обработчика
        alert('Метод для выводв сообщения в веб-консоль');
        // конец тела обработчика
    });

const alertBlock = document.querySelector('#alert');
alertBlock.addEventListener('click',
    (event) => {
        // тело обработчика
        alert('Метод для выводa сообщения в alert');
        // конец тела обработчика
    });


const promptBlock = document.querySelector('#prompt');
promptBlock.addEventListener('click',
    (event) => {
        // тело обработчика
        prompt('Метод для выводa сообщения в prompt');
        // конец тела обработчика
    });

