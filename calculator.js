let screenValue = '0';
const MAX_SCREEN_LENGTH = 29; 

function appendToScreen(value) {
    if (screenValue.length < MAX_SCREEN_LENGTH) {
        if (screenValue === '0' && value !== '.') {
            screenValue = value.toString();
        } else if (value === '*' || value === '/') {
            if (!screenValue.endsWith('+') && !screenValue.endsWith('-') && !screenValue.endsWith('*') && !screenValue.endsWith('/')) {
                screenValue += value.toString();
            }
        } else if (value === '+' || value === '-') {
            if (!screenValue.endsWith('+') && !screenValue.endsWith('-')) {
                screenValue += value.toString();
            }
        } else {
            screenValue += value.toString();
        }
        updateScreen();
    }
}


function clearScreen() {
    screenValue = '0';
    updateScreen();
}

function backspace() {
    if (screenValue !== '0') {
        screenValue = screenValue.slice(0, -1);
        if (screenValue === '') {
            screenValue = '0';
        }
        updateScreen();
    }
}

function calculate() {
    if (screenValue.endsWith('+') || screenValue.endsWith('-') || screenValue.endsWith('*') || screenValue.endsWith('/')) {
        return; // Prevent calculation if the screen value ends with an operator
    }

    try {
        let result = eval(screenValue);
        if (!isNaN(result) && isFinite(result)) {
            screenValue = result.toString();
        } else {
            screenValue = 'Error';
        }
        updateScreen();
    } catch (error) {
        screenValue = 'Error';
        updateScreen();
    }
}

function updateScreen() {
    document.getElementById('screen').innerText = screenValue;
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || (key === '.' && screenValue.indexOf('.') === -1)) {
        appendToScreen(key); 
    } else if (['+', '-', '*', '/'].includes(key)) {
        if (screenValue.length === 1 && screenValue === '-') {
            appendToScreen(key); 
        } else if (!screenValue.endsWith('+') && !screenValue.endsWith('-') && !screenValue.endsWith('*') && !screenValue.endsWith('/')) {
            appendToScreen(key); 
        }
    } else if (key === 'Enter' || key === '=') {
        calculate();  
    } else if (key === 'Backspace') {
        backspace(); 
    } else if ((key === 'c' || key === 'C') && screenValue !== '0') {
        clearScreen(); 
    }
});