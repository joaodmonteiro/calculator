function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case 'X':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
    }
}

const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const keys = document.querySelectorAll('.key');
let a;
let b;
let result;
let operator;

keys.forEach(key => {
    key.addEventListener('click', () => {
        if(key.textContent == 'Clear')
        {
            a = '';
            b = '';
            operator = '';
            screen1.textContent = '';
            screen2.textContent = '';
            return;
        }
        if(result)
        {
            if(key.classList.contains('number'))
            {
                a = '';
                b = '';
                operator = '';
                screen1.textContent = '';
                screen2.textContent = '';
                result = '';
            }
            else
            {
                if(key.id === 'equals')
                    return;
                screen1.textContent = result + key.textContent;
                screen2.textContent = '';
                operator = key.textContent;
                a = result;
                b = '';
                result = '';
                return;
            }    
        }

        if(!a)
        {
            if(key.classList.contains('number'))
            {
                screen2.textContent += key.textContent;
            }
            else if(key.classList.contains('operator') && screen2.textContent)
            {
                a = screen2.textContent;
                operator = key.textContent;
                screen1.textContent = screen2.textContent + operator;
                screen2.textContent = '';
            }
        }
        else {
            if(!b)
            {
                if(key.classList.contains('number'))
                {
                    screen2.textContent += key.textContent;
                }
                else if(key.classList.contains('operator'))
                {
                    b = screen2.textContent;
                    screen1.textContent += screen2.textContent;
                    screen2.textContent = '';
                    if(key.id == 'equals')
                    {
                        switch(operator) {
                            case '+':
                                result = add(a, b);
                                screen1.textContent += '=';
                                screen2.textContent = result;
                                break;
                            case '-':
                                result = subtract(a, b);
                                screen1.textContent += '=';
                                screen2.textContent = result;
                                break;
                            case 'X':
                                result = multiply(a, b);
                                screen1.textContent += '=';
                                screen2.textContent = result;
                                break;
                            case '/':
                                result = divide(a, b);
                                screen1.textContent += '=';
                                screen2.textContent = result;
                                break;
                        }   
                    }
                    else
                    {
                        switch(operator) {
                            case '+':
                                screen1.textContent = add(a, b);
                                a = screen1.textContent;
                                b = '';
                                screen1.textContent += key.textContent;
                                operator = key.textContent;
                                break;
                            case '-':
                                screen1.textContent = subtract(a, b);
                                a = screen1.textContent;
                                b = '';
                                screen1.textContent += key.textContent;
                                operator = key.textContent;
                                break;
                            case 'X':
                                screen1.textContent = multiply(a, b);
                                a = screen1.textContent;
                                b = '';
                                screen1.textContent += key.textContent;
                                operator = key.textContent;
                                break;
                            case '/':
                                screen1.textContent = divide(a, b);
                                a = screen1.textContent;
                                b = '';
                                screen1.textContent += key.textContent;
                                operator = key.textContent;
                                break;
                        }
                    }
                }
            }
            // else
            // {
            //     if(key.classList.contains('number'))
            //     {
            //         screen2.textContent += key.textContent;
            //     }
            //     else if(key.classList.contains('operator'))
            //     {
            //         a = screen2.textContent;
            //         operator = key.textContent;
            //         screen1.textContent = screen2.textContent + operator;
            //         screen2.textContent = '';
            //     }
            // }
        }
        
    })
})