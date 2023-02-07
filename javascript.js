let firstOperand=null;
let secondOperand=null;
let operatorSign="";
let dotUsed=false;
function isOperator(ch){
    return (ch==="+"||ch==="-"||ch==="*"||ch==="/");
}

function add(firstOperand,secondOperand){
    return firstOperand+secondOperand;
}

function subtract(firstOperand,secondOperand){
    return firstOperand-secondOperand;
}

function multiply(firstOperand,secondOperand){
    return firstOperand*secondOperand;
}

function divide(firstOperand,secondOperand){
    return firstOperand/secondOperand;
}

function operate(operator,firstOperand,secondOperand){
    let result=0;
    switch(operator){
        case "+":
            result=add(firstOperand,secondOperand);
            break;
        case "-":
            result=subtract(firstOperand,secondOperand);
            break;
        case "*":
            result=multiply(firstOperand,secondOperand);
            break;
        case "/":
            result=divide(firstOperand,secondOperand); 
            break;
    }
    return result;
}

function appendDisplayText(text){
    const display=document.querySelector(".display");
    
    if(Number(display.textContent)===0||isOperator(display.textContent))
        display.textContent=text;
    else
        display.textContent+=text;
}

function editDisplayText(text){
    const display=document.querySelector(".display");
    display.textContent=text;
}

function deleteDisplayText(text){
    const display=document.querySelector(".display");
    display.textContent=0;
}

function getDisplayText(){
    const display=document.querySelector(".display");
    return display.textContent;
}


const numbers=document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener('click',()=>{
        let text=number.textContent;
        appendDisplayText(text);
    });
});


const operators=document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        firstOperand=Number(getDisplayText());
        operatorSign=operator.textContent;
        editDisplayText(operatorSign);
        dotUsed=false;
    });
});


const equal=document.querySelector(".equal-sign");

equal.addEventListener('click',()=>{
    let text=getDisplayText();
    secondOperand=Number(text);
    let result=operate(operatorSign,firstOperand,secondOperand);
    if(result===Infinity){
        alert("you can not divide by zero!");
    }
    else{
        editDisplayText(result);
    }
    firstOperand=Number(getDisplayText());
    secondOperand=0;
});


const dot=document.querySelector(".floating-point");

dot.addEventListener("click",()=>{
    if(!dotUsed){
        dotUsed=true;
        appendDisplayText(dot.textContent);
    }
});

const clear=document.querySelector(".clear");

clear.addEventListener("click",()=>{
    deleteDisplayText();
    dotUsed=false;
});


const deleteButtton=document.querySelector(".delete");

deleteButtton.addEventListener("click",()=>{
    let text=getDisplayText();
    if(text!="0"){
        text=text.slice(0,-1);
    }
    editDisplayText(text);
});