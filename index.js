
    
   let result=document.getElementById('enterValue');
   let displayOperator=document.getElementById('operValue');
   let firstNumber;
   let newNumber;
   
function Numbers(result){
   enterValue.value+=result;
   newNumber=enterValue.value
   
   
}
function Operators(displayOperator){
    operValue.value=displayOperator;
    
    
    if (displayOperator===' + ') {
        display.value= enterValue.value+ displayOperator;
        
    }
    
    else if (displayOperator===' - ') {
        display.value=enterValue.value+  displayOperator; 
    }
    else if (displayOperator===' ÷ ') {
        display.value=enterValue.value+ displayOperator; 
    }
    else if (displayOperator===' x ') {
        display.value=enterValue.value+ displayOperator; 
    }
    else if (displayOperator===' % ') {
        display.value=enterValue.value+displayOperator; 
    }
    else if (displayOperator==='√') {
        display.value= displayOperator+enterValue.value; 
    }
    else if (displayOperator==='1/') {
        display.value= displayOperator+enterValue.value ; 
    }
    else if (displayOperator==='^2') {
        display.value=enterValue.value + displayOperator; 
    }
    else if (displayOperator==='±') {
        display.value= displayOperator+enterValue.value; 
    }
    firstNumber=result.value;
    
    enterValue.value=''   
}
function equals(){
//  enterValue.value=eval(enterValue.value)
display.value= firstNumber+ operValue.value + newNumber;

if (operValue.value==(' + ')) {
    firstNumber=((Number(firstNumber)))+((Number(newNumber)))
    enterValue.value=firstNumber   
    
    }
    else if (operValue.value==(' - ')) {
        firstNumber=((Number(firstNumber)))-((Number(newNumber)))
    }
    else if (operValue.value==' ÷ ') {
        firstNumber=((Number(firstNumber)))/((Number(newNumber))) 
    }
    else if (operValue.value==' x ') {
        firstNumber=((Number(firstNumber)))*((Number(newNumber))) 
    }
    else if (operValue.value==' % ') {
        firstNumber=((Number(firstNumber)))%((Number(newNumber))) 
    }
    else if (operValue.value=='√') {
        display.value= operValue.value+firstNumber
        firstNumber=((Number(firstNumber)))**0.5
        }
        else if (operValue.value=='1/') {
        display.value= operValue.value+firstNumber
        firstNumber=1/((Number(firstNumber)))
        }
        else if (operValue.value=='^2') {
        display.value=firstNumber+ operValue.value
        firstNumber=((Number(firstNumber)))**2
        }
        else if (operValue.value=='±') {
        display.value= operValue.value+firstNumber
        firstNumber=((Number(firstNumber)))*-1
        }
    else{
        alert('wrong')
    }
display.value+='='
enterValue.value=firstNumber
}
function Clear(){
   enterValue.value=''
   display.value=''
}
function ClearE(){
   display.value=''
}
function Slice(){
enterValue.value=enterValue.value.slice(0,-1);
display.value=display.value.slice(0,-1);
}
document.body.style.background=' white'
console.log(window.innerWidth);

