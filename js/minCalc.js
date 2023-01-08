let inp1 = document.querySelector('input[name=num1]');
let inp2 = document.querySelector('input[name=num2]');
let span = document.querySelector('.res');

let buttons = document.querySelectorAll('input[type=button');

for(i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        let op = this.getAttribute('data-op');
        calcForm(op);
    }
}
function calcForm(op){
    let a = parseInt(inp1.value);
    let b = parseInt(inp2.value);
    let res;

    if (op === '+'){
        res = a + b;
    }
   else if (op === '-'){
        res = a - b;
    }
   else if (op === '/'){
        res = a / b;
    }
   else if (op === '*'){
        res = a * b;
    }

    else res = 'Странная операция';
    span.innerHTML = res;
}


