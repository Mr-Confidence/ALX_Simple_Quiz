function addition(number1, number2){
    return number1 + number2;
}
function substraction(number1,number2){
    return number1 - number2;
}
function multiplication(number1, number2){
    return number1 * number2;
}
function division(number1, number2){
    if(number2 === 0){
        return "Error: Division by zer0";
    }
    return number1 / number2;
}
document.getElementById("add").addEventListener("click",function(){
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = addition(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});
document.getElementById("subtract").addEventListener("click",function(){
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = substraction(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});
document.getElementById("multiply").addEventListener("click",function(){
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = multiplication(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});
document.getElementById("divide").addEventListener("click",function(){
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = division(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});