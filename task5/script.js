const form = document.querySelector('form');
const resultField = document.querySelector('#duplicateField');

form.addEventListener('submit',
    (event) => {
        event.preventDefault();

        let data = document.querySelector('input[type="text"]').value;
		console.log(data);
        document.querySelector('input[type="text"]').value = '';
        resultField.innerHTML = '';

    });

document.querySelector('input[type="text"]').addEventListener('keyup',
    (event) => {
        let data = document.querySelector('input[type="text"]').value;
        resultField.textContent = data;
    })