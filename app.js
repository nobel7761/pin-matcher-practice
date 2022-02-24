document.getElementById('generate-pin').addEventListener('click', () => {
    const display = document.getElementById('pin-display');
    const pin = Math.round(Math.random() * 10000);
    console.log(pin)
    if ((pin + '').length == 4) {
        display.value = pin;
    }
})

document.getElementById('keypad').addEventListener('click', (event) => {
    const typedNumber = event.target.innerText;
    const calcDisplay = document.getElementById('calc-display');
    const previousNumber = calcDisplay.value;
    const newNumber = previousNumber + typedNumber;
    if (isNaN(typedNumber)) {
        if (typedNumber == 'C') {
            calcDisplay.value = '';
        }
    }
    else {

        calcDisplay.value = newNumber;
    }

})

document.getElementById('submit-btn').addEventListener('click', () => {
    const option = document.getElementById('option');

    if (parseInt(option.innerText) > 0) {
        const pinDisplay = document.getElementById('pin-display').value;
        const calcDisplay = document.getElementById('calc-display').value;

        if (pinDisplay == calcDisplay) {
            document.getElementById('notify-success').style.display = 'block';
            document.getElementById('notify-failed').style.display = 'none';
        }
        else {
            document.getElementById('notify-success').style.display = 'none';
            document.getElementById('notify-failed').style.display = 'block';
        }
        option.innerText--;
        if (parseInt(option.innerText) == 0) {
            document.getElementById('option-message').style.display = 'none';
            document.getElementById('message').style.display = 'block';

        }
    }
})