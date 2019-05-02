
const buttonOp = document.querySelectorAll('.button-operator');
const buttonNum = document.querySelectorAll('.button-number');
const buttonClear = document.querySelector('.calculator-clear')
const buttonBackSpace = document.querySelector('.calculator-backspace')
let currentVal = document.querySelector('.calculator-result');

let lastClickIsNumber = 1;
let currentResult = 0;
let reqOp = "";
let executeCalc = 0;

for (i = 0; i < buttonOp.length; i++) {
    const buttonOpText = buttonOp[i].innerHTML;
    buttonOp[i].addEventListener('click',function(){
        operationClick(buttonOpText);
        });
};

for (i = 0; i < buttonNum.length; i++){
    const buttonNumText = buttonNum[i].innerHTML;
    buttonNum[i].addEventListener('click',function(){
        numberClick(buttonNumText);
    });
};

buttonClear.addEventListener('click',function(){
    lastClickIsNumber = 0;
    currentResult = 0;
    reqOp = "";
    executeCalc = 0;
    currentVal.innerHTML = "0";
});

buttonBackSpace.addEventListener('click',function(){
    if (currentVal.innerHTML !== "0"){
        currentVal.innerHTML = currentVal.innerHTML.slice(0,-1);
    }   
});

function operationClick(buttonOpText) {
    if (executeCalc === 1){
        switch (reqOp) {
        case "+":
            currentResult += Number(currentVal.innerHTML);
            currentVal.innerHTML = currentResult;
            break;
        case "%":
            currentResult /= Number(currentVal.innerHTML);
            currentVal.innerHTML = currentResult;
            break;
        case "x":
            currentResult *= Number(currentVal.innerHTML);
            currentVal.innerHTML = currentResult;
            break;
        case "-":
            currentResult -= Number(currentVal.innerHTML);
            currentVal.innerHTML = currentResult;
            break;
        default:
            alert("Invalid operation");
        }
        executeCalc = 0;
    }
    reqOp=buttonOpText;
    lastClickIsNumber = 0;
};

function numberClick(buttonNumText) {
    if (reqOp !== ""){
        executeCalc = 1
        if (lastClickIsNumber !== 1) {
            currentResult = Number(currentVal.innerHTML);
            currentVal.innerHTML = buttonNumText;
        }
        else
        {
            currentVal.innerHTML += buttonNumText;
        }
    }
    else
    {
        if (currentVal.innerHTML === "0"){
            currentVal.innerHTML = buttonNumText;
        }
        else
        {
            currentVal.innerHTML = currentVal.innerHTML + buttonNumText;
        }
    }
    lastClickIsNumber = 1;
};