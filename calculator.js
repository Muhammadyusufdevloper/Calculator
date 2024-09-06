const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    if (value === '.' && display.value.includes('.')) {
        return;
    }
    display.value += value;
    formatNumber();
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        formatNumber();
    } catch (e) {
        display.value = 'Error';
    }
}

function formatNumber() {
    let number = display.value.replace(/,/g, '');
    if (!isNaN(number) && number) {
        display.value = Number(number).toLocaleString('en');
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
