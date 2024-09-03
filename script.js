// script.js
const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('result');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
        } else if (value === '←') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput);
            } catch {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
        }

        display.value = currentInput;
    });
});
